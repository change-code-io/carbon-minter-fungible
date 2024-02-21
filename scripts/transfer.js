const hre = require("hardhat");

async function main() {
    const contractAddress = "0xB6C3Ffd4D940C4eeD808473A75d0868528B59278";
    const carbon_dev_recipient_1 = "0x1FFF5A920dA884A0977C08caa3518F1Ae7e7aFD9";
    const carbon_dev_recipient_2 = "0x78Fa5c18a80eef995a4e50b74ED8CC13aF033A93";

    const carbon_dev = await hre.ethers.getContractAt("Carbon_dev", contractAddress);

    const transferTokens = 
    await carbon_dev.transfer_plus(carbon_dev_recipient_1, carbon_dev_recipient_2, 1, 50, "0x");
    await carbon_dev.transfer_plus(carbon_dev_recipient_1, carbon_dev_recipient_2, 2, 51, "0x");

    console.log("Tokens transferred!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});