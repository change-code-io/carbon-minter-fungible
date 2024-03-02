const hre = require("hardhat");

//input addresses
async function main() {
    const contractAddress = "";
    const carbon_minter = "";
    const carbon_recipient_1 = "";
    const carbon_recipient_2 = "";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);
    
    //input batch to be burned (y) and quantity (x)
    const burnTokens = 
    await carbon.burn(carbon_recipient_2, y, x);

    console.log("Tokens burned!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});