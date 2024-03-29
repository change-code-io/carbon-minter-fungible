const hre = require("hardhat");

async function main() {

    //get all signers
    const signers = await hre.ethers.getSigners();
    //select desired account for burning
    const burner = signers[0];

    const contractAddress = "0xdB2668f7Bd0E7351118A2b363601fbF911E76765";
    const carbon_minter = "0x5CBaF6a447d44d52bE4b6e6a7241e067b614Da49";
    const carbon_recipient_1 = "0x1FFF5A920dA884A0977C08caa3518F1Ae7e7aFD9";
    const carbon_recipient_2 = "0x78Fa5c18a80eef995a4e50b74ED8CC13aF033A93";

    //get the contract instance
    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    //connect the burner signer with the contract
    const carbonSigned = carbon.connect(burner);
    
    await carbonSigned.burn_plus(carbon_recipient_2, 0, 50, "data4");

    console.log("Tokens burned!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});