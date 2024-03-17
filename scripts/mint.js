const hre = require("hardhat");

async function main() {
    const contractAddress = "0x3bA6Dd9858ec2c128b3DCF472ad3D4EC0b37a737";
    const carbon_minter = "0x204e07573052aa523f2662F98A3057791B19208C";
    const carbon_recipient_1 = "0xCDc503AFDbDc7025D8F1c68c2CA655AA383aD89f";
    const carbon_recipient_2 = "0x56f0970E8332D75c92Bd7f59Fa5EB0d4662522c2";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    const mintTokens = 
    await carbon.mint_plus(carbon_minter, 0, 59, "0x", "FFS001-04/26/22-FFS-SOILC-NYK-UK");
    await carbon.mint_plus(carbon_recipient_1, 0, 531, "0x", "FFS001-04/26/22-FFS-SOILC-NYK-UK");
    await carbon.mint_plus(carbon_minter, 0, 29, "0x", "FFS001-01/17/24-FFS-SOILC-NYK-UK");
    await carbon.mint_plus(carbon_recipient_1, 0, 259, "0x", "FFS001-01/17/24-FFS-SOILC-NYK-UK");
    

    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});