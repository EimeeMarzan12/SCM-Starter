require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "localhost", // Set localhost as the default network
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // URL for the Hardhat local network
      chainId: 31337, // Default chain ID for Hardhat
      accounts: [
        "8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba", // Replace with your private key
      ], 
    },
  },
};
