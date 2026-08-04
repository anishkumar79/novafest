# 🚀 NovaVest - Decentralized Milestone-Based Venture Funding

NovaVest is an advanced, production-ready decentralized Venture Funding Platform built on Stellar (Soroban). It solves the web3 "rug pull" problem by locking startup funds in a Smart Contract Vault and releasing them only when investors vote to approve predefined milestones.

## 🔗 Live Demo & Video Pitch
- **Live Platform**: [novafest.vercel.app](https://novafest.vercel.app/)
- **Demo Video**: [Watch the Demo on Google Drive](https://drive.google.com/file/d/1rJg1da4KQjCT_VO30-phupnAD05b-yll/view?usp=sharing)
- **Deployed Contracts**:
  - Campaign Manager: `CATUZHU52FJIQQ6ICYSTIOMGUNSULKBGLZEMXQ7ZLF7K6V4PMOBIZJTQ`
  - Governance Token: `CCO4MRACX7CT3SWQ4AQP4KU3NWVIRVYMGHCXJMBDPAOEF43DPBOG7RT3`
  - Vault Contract: `CAHTY45D6KACFR4SWHTGHQ7LKIVC6DHXQCHCTXQPNUVXVZKIR3AC7SW7`
- **Transaction Hash**: [`cec92c92cef810fab408b156928f22f812e7d67ceb283b531812d982c8d31f65`](https://stellar.expert/explorer/testnet/tx/cec92c92cef810fab408b156928f22f812e7d67ceb283b531812d982c8d31f65)

## 🌟 Key Features

1. **Milestone-based Escrow**: Startups define milestones (e.g., Alpha Launch = 30% of funds). Capital is locked and protected.
2. **Decentralized Governance**: Investors act as a DAO, voting YES/NO on milestone releases. >50% approval automatically unlocks funds.
3. **Real Wallet Integration**: Full Freighter wallet connection with live balance tracking and cryptographic transaction signing on the Stellar Testnet.
4. **Premium UI**: Built with React, Vite, and Vanilla CSS featuring a stunning dark mode, glassmorphism, and neon accents. Fully mobile responsive.

---

## 📸 Platform Gallery

### 1. Product UI — Explore Dashboard & Campaign Details
Browse verified Web3 startups, view funding progress, and invest XLM directly into campaigns.
<img src="scrrenshots/product ui.png" width="100%" alt="Product UI" />

### 2. Mobile Responsive UI
The platform is fully responsive across all device sizes, from desktop to mobile.
<img src="scrrenshots/mobile ui.png" width="100%" alt="Mobile Responsive UI" />

### 3. CI/CD Pipeline Running ✅
GitHub Actions CI/CD pipeline running successfully — builds smart contracts and runs all frontend tests automatically on every push.
<img src="scrrenshots/ci_cd_v2.png" width="100%" alt="CI/CD Pipeline Running" />

### 4. Test Output — 3 Passing Tests ✅
All 3 frontend tests passing with Vitest testing framework.
<img src="scrrenshots/test_output_v2.png" width="100%" alt="Test Output 3+ Passing" />

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
