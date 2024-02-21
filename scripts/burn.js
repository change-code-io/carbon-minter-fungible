const hre = require("hardhat");

async function main() {
    const contractAddress = "0xB6C3Ffd4D940C4eeD808473A75d0868528B59278";
    const carbon_dev_recipient_2 = "0x78Fa5c18a80eef995a4e50b74ED8CC13aF033A93";

    const carbon_dev = await hre.ethers.getContractAt("Carbon_dev", contractAddress);

    const burnTokens = 
    await carbon_dev.burn(carbon_dev_recipient_2, 2, 20);

    console.log("Tokens burned!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});