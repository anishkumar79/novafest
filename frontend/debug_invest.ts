import { rpc, Contract, Keypair, Address, nativeToScVal } from '@stellar/stellar-sdk';
import { TransactionBuilder, Networks } from '@stellar/stellar-sdk';

const server = new rpc.Server('https://soroban-testnet.stellar.org');
const CAMPAIGN_MANAGER = 'CD4FGTRTKEUXK52XZZEYNGYIAKS6TJHRZA2MWL4D3Y4PCPBZFDP3IVTN';
const contract = new Contract(CAMPAIGN_MANAGER);

async function main() {
    try {
        const kp = Keypair.random();
        
        await fetch('https://friendbot.stellar.org?addr=' + kp.publicKey());
        console.log("Funded random account:", kp.publicKey());
        
        const investCall = contract.call('invest',
            new Address(kp.publicKey()).toScVal(),
            nativeToScVal(2, {type: 'u32'}),
            nativeToScVal(1010000000, {type: 'i128'})
        );
        
        const sourceAcc = await server.getAccount(kp.publicKey());
        const txb = new TransactionBuilder(sourceAcc, { fee: '10000', networkPassphrase: Networks.TESTNET });
        txb.addOperation(investCall);
        txb.setTimeout(30);
        const builtTx = txb.build();
        
        const sim = await server.simulateTransaction(builtTx);
        console.log("SIMULATION RESULT:", JSON.stringify(sim, null, 2));
    } catch (e) {
        console.error("ERROR:", e);
    }
}
main();
