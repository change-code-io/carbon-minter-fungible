const hre = require("hardhat");

async function main() {
    const contractAddress = "";
    const carbon_minter = "";
    const carbon_recipient_1 = "";
    const carbon_recipient_2 = "";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    const burnTokens = 
    await carbon.burn_plus(carbon_recipient_2, 0, 0, "");

    console.log("Tokens burned!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});