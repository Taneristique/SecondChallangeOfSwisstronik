const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Challange");

  console.log(`deployed to ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});