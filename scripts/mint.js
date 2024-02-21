const hre = require("hardhat");

async function main() {
    const contractAddress = "0xB6C3Ffd4D940C4eeD808473A75d0868528B59278";
    const carbon_dev_minter = "0x5CBaF6a447d44d52bE4b6e6a7241e067b614Da49";
    const carbon_dev_recipient_1 = "0x1FFF5A920dA884A0977C08caa3518F1Ae7e7aFD9";

    const carbon_dev = await hre.ethers.getContractAt("Carbon_dev", contractAddress);

    const mintTokens = 
    await carbon_dev.mint_plus(carbon_dev_minter, 0, 100, "0x");
    await carbon_dev.mint_plus(carbon_dev_recipient_1, 1, 101, "0x");
    await carbon_dev.mint_plus(carbon_dev_recipient_1, 2, 102, "0x");
    await carbon_dev.mint_plus(carbon_dev_recipient_1, 3, 103, "0x");

    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});