const hre = require("hardhat");

async function main() {
  //get all signers
  const signers = await hre.ethers.getSigners();

  //select desired account for deployment
  const deployer = signers[0];

  const latestBlock = await hre.ethers.provider.getBlock("latest")

  const Carbon = await hre.ethers.getContractFactory("Carbon", deployer);
  const carbon = await Carbon.deploy();

  console.log(`Contract successfully deployed to: ${carbon.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });