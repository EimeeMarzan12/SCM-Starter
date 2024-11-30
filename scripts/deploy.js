// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const initBalance = hre.ethers.utils.parseEther("1"); // Set initial balance to 1 ETH
  
  // Get the contract factory
  const Assessment = await hre.ethers.getContractFactory("Assessment");

  // Deploy the contract with the required constructor parameters
  const assessment = await Assessment.deploy(initBalance, { value: initBalance });

  // Wait for the deployment to complete
  await assessment.deployed();

  console.log(`A contract with balance of ${hre.ethers.utils.formatEther(initBalance)} ETH deployed to ${assessment.address}`);
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
