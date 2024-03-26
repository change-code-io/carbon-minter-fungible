const hre = require("hardhat");

async function main() {
    const contractAddress = "0xbB67bDb30701D33BDC6F56863D38a5608C082670";
    const carbon_minter = "0x3F58C00a19F58Bb60DeA9D6Ec87Fe954E31e19C1";
    const carbon_buffer = "0x730681c0254b6C8047A4F73c51E282084e82d447";
    const carbon_recipient_1 = "0xA243dB2b8aA4224226b58fD8F5Ce15272C41526D";
    const carbon_recipient_2 = "0xC34E6d76B62046cb197D97A5CE0ea53C5939bfB2";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    const transferTokens = 
    await carbon.transfer_plus(carbon_recipient_1, carbon_recipient_2, 0, 531, "0x", "FFS001-04/26/22-FFS-SOILC-NYK-UK");

    console.log("Tokens transferred!");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});