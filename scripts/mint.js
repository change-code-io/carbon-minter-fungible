const hre = require("hardhat");

async function main() {
    const contractAddress = "";
    const carbon_minter = "";
    const carbon_recipient_1 = "";
    const carbon_recipient_2 = "";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    const mintTokens = 
    await carbon.mint_plus(carbon_minter, 0, 0, "0x", "");
    await carbon.mint_plus(carbon_recipient_1, 0, 0, "0x", "");
    await carbon.mint_plus(carbon_minter, 0, 0, "0x", "");
    await carbon.mint_plus(carbon_recipient_1, 0, 0, "0x", "");
    

    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});