const hre = require("hardhat");

async function main() {

  const latestBlock = await hre.ethers.provider.getBlock("latest")

  const Carbon = await hre.ethers.getContractFactory("Carbon");
  const carbon = await Carbon.deploy();

  console.log(`Contract deployed to: ${carbon.target}`);
  console.log(`Contract deployed successfully!`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });