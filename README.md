
# Metacrafters Ethereum ATM

Welcome to the **Metacrafters Ethereum ATM** project! This is a decentralized application (DApp) built on the Ethereum blockchain that simulates an ATM machine, allowing users to deposit and withdraw Ether (ETH). It integrates MetaMask for wallet connection and Hardhat for smart contract deployment and testing.


## Project Overview

In this project, we built a simple smart contract that allows the owner to:

- **Deposit** Ether into the contract balance (only the owner can deposit).
- **Withdraw** Ether from the contract balance (only the owner can withdraw, and the contract will revert if there are insufficient funds).
- **Check Balance** by interacting with the `getContractBalance` function in the smart contract.

The project is built with **React**, **Ethereum (Solidity)**, **MetaMask**, and **Hardhat**.



## Features

- **MetaMask Integration**: The DApp interacts with MetaMask to connect to the user's wallet.
- **Smart Contract**: A Solidity-based smart contract that allows deposits, withdrawals, and balance checks.
- **Owner-Only Access**: The `onlyOwner` modifier restricts deposit and withdrawal functions to the contract owner.
- **Error Handling**: Includes custom errors like `Unauthorized` and `InsufficientBalance` for better gas efficiency and clearer feedback.
- **React Frontend**: A React application for interacting with the Ethereum smart contract.
- **Ethereum Network Support**: The application works on the **Goerli Testnet** (or Ethereum mainnet if desired).


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
    - Connect to Local Host 8545 of your Hardhat network.
    - Make sure your MetaMask is configured with the correct chain.

4. **Set up Hardhat**:

    - Navigate and deploy the contract using Hardhat:
    
    ```bash
    npx hardhat run --network localhost scripts/deploy.js
    ```

    This will deploy the contract to Hardhat.

5. **Run the React app**:

    After the contract is deployed, you can start the React application:
    
    ```bash
    npm start
    ```

6. **Interact with the DApp**:

    - Open the app in your browser.
    - Connect your MetaMask wallet.
    - Once connected, you can see your account address, balance, and interact with the ATM by depositing or withdrawing Ether.



## Smart Contract

The smart contract defines three main functions:

- **deposit(uint256 _amount)**: Allows the owner to deposit Ether into the contract. Only the owner can deposit. The contract ensures the amount matches the transaction value.
- **withdraw(uint256 _amount)**: Allows the owner to withdraw Ether from the contract. The contract will revert if there are insufficient funds.
- **getContractBalance()**: Returns the current balance of the contract in Ether.

The contract uses the **onlyOwner** modifier to ensure only the contract owner can perform deposits or withdrawals. It also includes error handling with custom errors for unauthorized access and insufficient balance.



## License

This project is licensed under the MIT License.



## Author

- **Eimee Suzanne Marzan**

