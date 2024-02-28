const hre = require("hardhat");

async function main() {
    const contractAddress = "0x5B6b59EE434d1d6525853435Edbe94735dD7F778";
    const carbon_minter = "0x204e07573052aa523f2662F98A3057791B19208C";
    const carbon_recipient_1 = "0xCDc503AFDbDc7025D8F1c68c2CA655AA383aD89f";
    const carbon_recipient_2 = "0x56f0970E8332D75c92Bd7f59Fa5EB0d4662522c2";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    const transferTokens = 
    await carbon.transfer_plus(carbon_recipient_1, carbon_recipient_2, 1, 531, "0x");

    console.log("Tokens transferred!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});