const hre = require("hardhat");
// Import required variables from config.js
const { contractAddress, carbon_developer, bid, ipfs_data } = require("./config");

async function main() {
    //get all signers
    const signers = await hre.ethers.getSigners();

    //select desired account for minting
    const minter = signers[0];

    //get the contract instance
    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    //connect the minter signer with the contract
    const carbonSigned = carbon.connect(minter);

    await carbonSigned.mint_plus(carbon_developer, 0, 2107, "0x", bid, ipfs_data);

    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});