import { rpc, TransactionBuilder, Networks, Contract, nativeToScVal, Address } from '@stellar/stellar-sdk';
import { requestAccess, signTransaction } from '@stellar/freighter-api';

const server = new rpc.Server('https://soroban-testnet.stellar.org');
const NETWORK_PASSPHRASE = Networks.TESTNET;

// Make sure to add your deployed contract ID to the .env file
const CAMPAIGN_MANAGER_ID = import.meta.env.VITE_CAMPAIGN_MANAGER_ID || "CBEXAMPLE...YOUR_CONTRACT_ID";

/**
 * Initiates an investment transaction on the Stellar Testnet using the deployed Soroban contract.
 */
export async function investInCampaign(campaignId: number, _startupAddress: string, amount: string) {
  try {
    // 1. Get user's public key from Freighter
    const response = await requestAccess();
    if (!response || !response.address) throw new Error("Wallet not connected");
    const pubKey = response.address;

    // 2. Load the user's account to get their sequence number
    const sourceAccount = await server.getAccount(pubKey);

    // 3. Prepare the contract call parameters
    const contract = new Contract(CAMPAIGN_MANAGER_ID);
    
    // Amount in XLM comes in as a string, e.g. "100". The contract expects i128.
    // Assuming 1 XLM = 10_000_000 stroops
    const amountInStroops = BigInt(Math.floor(parseFloat(amount) * 10_000_000));
    
    const op = contract.call(
      'invest',
      new Address(pubKey).toScVal(),
      nativeToScVal(campaignId, { type: 'u32' }),
      nativeToScVal(amountInStroops, { type: 'i128' })
    );

    // 4. Build the transaction
    const txBuilder = new TransactionBuilder(sourceAccount, {
      fee: '1000', // Base fee, will be adjusted by simulateTransaction
      networkPassphrase: NETWORK_PASSPHRASE,
    })
      .addOperation(op)
      .setTimeout(30);
      
    let tx = txBuilder.build();

    // 5. Simulate the transaction to get resources and fees
    const sim = await server.simulateTransaction(tx);
    if (rpc.Api.isSimulationError(sim)) {
      throw new Error(`Simulation failed: ${typeof sim.error === 'string' ? sim.error : JSON.stringify(sim.error)}`);
    }

    // 6. Assemble the transaction with required auth and resources
    tx = rpc.assembleTransaction(tx, sim).build();

    // 7. Sign the transaction using Freighter
    const signedResponse = await signTransaction(tx.toXDR(), {
      networkPassphrase: NETWORK_PASSPHRASE
    });

    if (signedResponse.error) {
      throw new Error(signedResponse.error as string);
    }

    // 8. Submit the transaction to the network
    const txToSubmit = TransactionBuilder.fromXDR(signedResponse.signedTxXdr as string, NETWORK_PASSPHRASE);
    let submitResponse = await server.sendTransaction(txToSubmit);
    
    // Wait for the transaction to be processed
    if (submitResponse.status === 'PENDING') {
       let txStatus = await server.getTransaction(submitResponse.hash);
       while (txStatus.status === 'NOT_FOUND') {
         await new Promise(resolve => setTimeout(resolve, 1000));
         txStatus = await server.getTransaction(submitResponse.hash);
       }
       if (txStatus.status === 'FAILED') {
         throw new Error("Transaction failed on-chain");
       }
    } else {
        throw new Error(`Submit failed: ${JSON.stringify(submitResponse)}`);
    }
    
    return { status: 'success', hash: submitResponse.hash };
  } catch (error) {
    console.error('Investment error:', error);
    throw error;
  }
}

/**
 * Votes on a milestone using the deployed Soroban contract.
 */
export async function voteMilestone(campaignId: number, voteYes: boolean) {
  try {
    const response = await requestAccess();
    if (!response || !response.address) throw new Error("Wallet not connected");
    const pubKey = response.address;

    const sourceAccount = await server.getAccount(pubKey);
    const contract = new Contract(CAMPAIGN_MANAGER_ID);
    
    const op = contract.call(
      'vote_milestone',
      new Address(pubKey).toScVal(),
      nativeToScVal(campaignId, { type: 'u32' }),
      nativeToScVal(voteYes, { type: 'bool' })
    );

    const txBuilder = new TransactionBuilder(sourceAccount, {
      fee: '1000',
      networkPassphrase: NETWORK_PASSPHRASE,
    })
      .addOperation(op)
      .setTimeout(30);
      
    let tx = txBuilder.build();

    const sim = await server.simulateTransaction(tx);
    if (rpc.Api.isSimulationError(sim)) {
      throw new Error(`Simulation failed: ${typeof sim.error === 'string' ? sim.error : JSON.stringify(sim.error)}`);
    }

    tx = rpc.assembleTransaction(tx, sim).build();

    const signedResponse = await signTransaction(tx.toXDR(), {
      networkPassphrase: NETWORK_PASSPHRASE
    });

    if (signedResponse.error) {
      throw new Error(signedResponse.error as string);
    }

    const txToSubmit = TransactionBuilder.fromXDR(signedResponse.signedTxXdr as string, NETWORK_PASSPHRASE);
    let submitResponse = await server.sendTransaction(txToSubmit);
    
    if (submitResponse.status === 'PENDING') {
       let txStatus = await server.getTransaction(submitResponse.hash);
       while (txStatus.status === 'NOT_FOUND') {
         await new Promise(resolve => setTimeout(resolve, 1000));
         txStatus = await server.getTransaction(submitResponse.hash);
       }
       if (txStatus.status === 'FAILED') {
         throw new Error("Transaction failed on-chain");
       }
    } else {
        throw new Error(`Submit failed: ${JSON.stringify(submitResponse)}`);
    }
    
    return { status: 'success', hash: submitResponse.hash };
  } catch (error) {
    console.error('Voting error:', error);
    throw error;
  }
}
