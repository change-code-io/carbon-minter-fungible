const hre = require("hardhat");

async function main() {

  const latestBlock = await hre.ethers.provider.getBlock("latest")

  const Carbon_dev = await hre.ethers.getContractFactory("Carbon_dev");
  const carbon_dev = await Carbon_dev.deploy();

  console.log(`Contract deployed to: ${carbon_dev.target}`);
  console.log(`Contract deployed successfully!`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });