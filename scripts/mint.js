const hre = require("hardhat");

//input addresses
async function main() {
    const contractAddress = "";
    const carbon_minter = "";
    const carbon_recipient_1 = "";
    const carbon_recipient_2 = "";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    //update qunatity (x) and mint recipients
    const mintTokens = 
    await carbon.mint_plus(carbon_minter, 0, X, "0x");
    await carbon.mint_plus(carbon_recipient_1, 1, X, "0x");
    await carbon.mint_plus(carbon_recipient_, 2, X, "0x");


    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});