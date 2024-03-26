const hre = require("hardhat");

async function main() {
    const contractAddress = "0x5F3664fd1B82761d6d1273d5b3D99636fb39670D";
    const carbon_minter = "0x3F58C00a19F58Bb60DeA9D6Ec87Fe954E31e19C1";
    const carbon_buffer = "0x730681c0254b6C8047A4F73c51E282084e82d447";
    const carbon_recipient_1 = "0xa10AEBb60B918D77E1Ae9ab57BDC93DC6dB049c9";

    const carbon = await hre.ethers.getContractAt("Carbon", contractAddress);

    const mintTokens = 
    await carbon.mint_plus(carbon_recipient_1, 1, 2527, "0x", "RHO001-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 2, 1313, "0x", "RHO002-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 3, 1446, "0x", "RHO003-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 4, 1155, "0x", "RHO004-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 5, 71, "0x", "RHO005-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 6, 4518, "0x", "RHO006-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 7, 868, "0x", "RHO007-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 8, 602, "0x", "RHO008-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 9, 3127, "0x", "RHO009-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 10, 1068, "0x", "RHO010-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 11, 3553, "0x", "RHO011-10/19/2023-CARBONRHO-FORESTC-AR-USA");
    await carbon.mint_plus(carbon_recipient_1, 12, 3502, "0x", "RHO012-10/19/2023-CARBONRHO-FORESTC-TX-USA");
    await carbon.mint_plus(carbon_recipient_1, 13, 678, "0x", "RHO013-10/19/2023-CARBONRHO-FORESTC-TX-USA");
    await carbon.mint_plus(carbon_recipient_1, 14, 773, "0x", "RHO014-10/19/2023-CARBONRHO-FORESTC-TX-USA");
    await carbon.mint_plus(carbon_recipient_1, 15, 799, "0x", "RHO015-10/19/2023-CARBONRHO-FORESTC-OK-USA");

    

    console.log("Tokens minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});