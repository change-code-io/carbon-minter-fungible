const hre = require("hardhat");
// Import required variables from config.js
const { contractAddress, carbon_recipient_1 } = require("./config");

async function main() {
    //get all signers
    const signers = await hre.ethers.getSigners();

    //select desired account for minting
    const minter = signers[0];

    //get the contract instance
    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    //connect the minter signer with the contract
    const carbonSigned = carbon.connect(minter);

    await carbonSigned.mint_plus(carbon_recipient_1, 0, 20, "0x", "data1");
    await carbonSigned.mint_plus(carbon_recipient_1, 1, 25, "0x", "data2");   

    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});