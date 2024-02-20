const hre = require("hardhat");

async function main() {

  const latestBlock = await hre.ethers.provider.getBlock("latest")

  const BCarbon_Carbon_Rho = await hre.ethers.getContractFactory("BCarbon_Carbon_Rho");
  const bCarbon_Carbon_Rho = await BCarbon_Carbon_Rho.deploy();

  console.log(`Contract deployed to: ${bCarbon_Carbon_Rho.target}`);
  console.log(`Contract deployed successfully!`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });