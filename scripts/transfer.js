const hre = require("hardhat");

//input addresses
async function main() {
    const contractAddress = "";
    const carbon_minter = "";
    const carbon_recipient_1 = "";
    const carbon_recipient_2 = "";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    //input batch to be transferred (y) and quantity (x)
    const transferTokens = 
    await carbon.transfer_plus(carbon_recipient_1, carbon_recipient_2, Y, X, "0x");

    console.log("Tokens transferred!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});