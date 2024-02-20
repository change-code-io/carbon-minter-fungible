const hre = require("hardhat");

async function main() {
    const contractAddress = "0x0ba329D41D07fa570b3DC0f686146e06a6f0Bb00";
    const carbonRho = "0x28e0b075F524b4F6197691723Ef68974F2C0D45b";
    const bcarbon = "0x204e07573052aa523f2662F98A3057791B19208C";

    const bCarbon_Carbon_Rho = await hre.ethers.getContractAt("BCarbon_Carbon_Rho", contractAddress);

    const mintTokens = 
    await bCarbon_Carbon_Rho.metamint(carbonRho, 1, 2527, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 2, 1313, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 3, 1446, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 4, 1155, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 5, 71, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 6, 4518, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 7, 868, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 8, 602, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 9, 3127, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 10, 1068, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 11, 3553, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 12, 3502, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 13, 678, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 14, 773, "0x");
    await bCarbon_Carbon_Rho.metamint(carbonRho, 15, 779, "0x");

    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});