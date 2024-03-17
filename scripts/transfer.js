const hre = require("hardhat");

async function main() {
    const contractAddress = "";
    const carbon_minter = "";
    const carbon_recipient_1 = "";
    const carbon_recipient_2 = "";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    const transferTokens = 
    await carbon.transfer_plus(carbon_recipient_1, carbon_recipient_2, 0, 0, "0x", "");

    console.log("Tokens transferred!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});