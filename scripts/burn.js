const hre = require("hardhat");
const { contractAddress, carbon_developer, data } = require("./config");

async function main() {

    //get all signers
    const signers = await hre.ethers.getSigners();
    //select desired account for burning
    const burner = signers[0];

    //get the contract instance
    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    //connect the burner signer with the contract
    const carbonSigned = carbon.connect(burner);
    
    await carbonSigned.burn_plus(carbon_developer, 0, 2107, "data");

    console.log("Tokens burned!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});