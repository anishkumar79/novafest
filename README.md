# 🚀 NovaVest - Decentralized Milestone-Based Venture Funding

NovaVest is an advanced, production-ready decentralized Venture Funding Platform built on Stellar (Soroban). It solves the web3 "rug pull" problem by locking startup funds in a Smart Contract Vault and releasing them only when investors vote to approve predefined milestones.

## 🔗 Live Demo & Video Pitch
- **Live Platform**: [nova-vest-decentralized-milestone-b.vercel.app](https://nova-vest-decentralized-milestone-b.vercel.app/)
- **Demo Video**: [Watch the Demo on Google Drive](https://drive.google.com/file/d/1rJg1da4KQjCT_VO30-phupnAD05b-yll/view?usp=sharing)
- **Deployed Contracts**:
  - Campaign Manager: `CCA32PXSYTZHMHRHZORPKXVQEMJRHQ3APGX4XLENJYS7FJNTGIF3RZDK`
  - Governance Token: `CCX5ZLUPKCW2ODMM6FBVDRBKQKSU72EIVPR7MWAIBD3OUKX7A2DC4QKB`
  - Vault Contract: `CASOD3F4ITECXDITAUKYSDKTPKT2NIZLFXFTYEINQFCZXXB7AJATFA7O`
- **Transaction Hash**: [`cec92c92cef810fab408b156928f22f812e7d67ceb283b531812d982c8d31f65`](https://stellar.expert/explorer/testnet/tx/cec92c92cef810fab408b156928f22f812e7d67ceb283b531812d982c8d31f65)

## 🌟 Key Features

1. **Milestone-based Escrow**: Startups define milestones (e.g., Alpha Launch = 30% of funds). Capital is locked and protected.
2. **Decentralized Governance**: Investors act as a DAO, voting YES/NO on milestone releases. >50% approval automatically unlocks funds.
3. **Real Wallet Integration**: Full Freighter wallet connection with live balance tracking and cryptographic transaction signing on the Stellar Testnet.
4. **Premium UI**: Built with React, Vite, and Vanilla CSS featuring a stunning dark mode, glassmorphism, and neon accents. Fully mobile responsive.

---

## 📸 Platform Gallery

### Explore Dashboard & Campaign Details
Browse verified Web3 startups and invest XLM directly into campaigns.
<img src="scrrenshots/product ui.png" width="100%" alt="Product UI" />

### Mobile Responsive UI
<img src="scrrenshots/mobile ui.png" width="100%" alt="Mobile Responsive UI" />

---


## ✅ Submission Proof

### Mobile Responsive UI
The platform is fully responsive across all device sizes.
<img src="scrrenshots/mobile ui.png" width="100%" alt="Mobile Responsive UI" />

### Product UI
<img src="scrrenshots/product ui.png" width="100%" alt="Product UI" />

### CI/CD Pipeline Running
GitHub Actions CI/CD pipeline running successfully with contract build and frontend tests.
<img src="scrrenshots/ci cd.png" width="100%" alt="CI/CD Pipeline" />

### Test Output (3+ Passing Tests)
All 3 frontend tests passing with Vitest.
<img src="scrrenshots/test output.png" width="100%" alt="Test Output" />

---


## 🛠️ Tech Stack & Architecture

- **Frontend**: React, Vite, TypeScript, Vanilla CSS (Glassmorphism UI)
- **Blockchain**: Stellar Network, Soroban Smart Contracts
- **Wallet Integration**: `@stellar/freighter-api`, `@stellar/stellar-sdk`
- **CI/CD**: GitHub Actions (Automated testing & deployments)
- **Deployment**: Vercel

## 🚀 Setup & Deployment

### Run Locally
```bash
cd frontend
npm install
npm run dev
```

### Run Tests
```bash
cd frontend
npm run test
```
