# Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/\

# Metacrafters Ethereum ATM

Welcome to the **Metacrafters Ethereum ATM** project! This is a decentralized application (DApp) built on the Ethereum blockchain that simulates an ATM machine, allowing users to deposit and withdraw Ether (ETH). It integrates MetaMask for wallet connection and Hardhat for smart contract deployment and testing.

---

## Project Overview

In this project, we built a simple smart contract that allows the owner to:

- **Deposit** 1 ETH to the contract balance.
- **Withdraw** 1 ETH from the contract balance.
- **Check Balance** by interacting with the `getBalance` function in the smart contract.

The project is built with **React**, **Ethereum (Solidity)**, **MetaMask**, and **Hardhat**.

---

## Features

- **MetaMask Integration**: The DApp interacts with MetaMask to connect to the user's wallet.
- **Smart Contract**: A Solidity-based smart contract that allows deposits, withdrawals, and balance checks.
- **React Frontend**: A React application for interacting with the Ethereum smart contract.
- **Ethereum Network Support**: The application works on the **Goerli Testnet** (or Ethereum mainnet if desired).

---


## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- Node.js and npm 
- MetaMask wallet extension installed in your browser
- Hardhat for Ethereum development

### Installation Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/metacrafters-ethereum-atm.git
    cd metacrafters-ethereum-atm
    ```

2. **Install project dependencies**:

    ```bash
    npm install
    ```

3. **Set up MetaMask**:

    - Install MetaMask extension in your browser.
    - Connect to **Goerli Testnet** (or Ethereum mainnet if using real ETH).
    - Make sure your MetaMask is configured with the correct chain.

4. **Set up Hardhat**:

    - Navigate to the `contracts` folder and deploy the contract using Hardhat:
    
    ```bash
    npx hardhat run scripts/deploy.js --network goerli
    ```

    This will deploy the contract to the **Goerli Testnet** (or Ethereum mainnet if configured).

5. **Run the React app**:

    After the contract is deployed, you can start the React application:
    
    ```bash
    npm start
    ```

6. **Interact with the DApp**:

    - Open the app in your browser.
    - Connect your MetaMask wallet.
    - Once connected, you can see your account address, balance, and interact with the ATM by depositing or withdrawing 1 ETH.

---

## Smart Contract

### Assessment.sol

The smart contract defines three main functions:

- **deposit(uint256 _amount)**: Allows the owner to deposit Ether into the contract. Only the owner can deposit.
- **withdraw(uint256 _withdrawAmount)**: Allows the owner to withdraw Ether from the contract. The contract will revert if there are insufficient funds.
- **getBalance()**: Returns the current balance of the contract.

---

## Troubleshooting

### Issue: **Error: call revert exception**
- **Cause**: This typically happens if the `getBalance()` function is not properly called or the contract is not deployed on the right network.
- **Solution**: Ensure your MetaMask is connected to the correct network (Goerli or Ethereum mainnet). Double-check the deployed contract address in the React frontend.

### Issue: **MetaMask Network Mismatch**
- **Cause**: If MetaMask is connected to a different network than the one where the contract is deployed.
- **Solution**: Make sure MetaMask is connected to the correct network (Goerli Testnet or Ethereum Mainnet) where your contract is deployed.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

- **Eimee Suzanne Marzan**

For any questions or feedback, feel free to reach out!

---

## Acknowledgements

- **MetaMask**: For providing the wallet and browser extension to interact with the Ethereum blockchain.
- **Hardhat**: For making Ethereum development easier with tools for testing, deploying, and debugging smart contracts.
- **Ethers.js**: For making it simple to interact with Ethereum from the frontend.

---

Happy coding!

