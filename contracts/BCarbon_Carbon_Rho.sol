// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
 
 contract BCarbon_Carbon_Rho is ERC1155, ERC1155Burnable {
    uint256 public constant BCARBON_RHO_BUFFER = 0;
    uint256 public constant BCARBON_RHO001 = 1;
    uint256 public constant BCARBON_RHO002 = 2;
    uint256 public constant BCARBON_RHO003 = 3;
    uint256 public constant BCARBON_RHO004 = 4;
    uint256 public constant BCARBON_RHO005 = 5;
    uint256 public constant BCARBON_RHO006 = 6;
    uint256 public constant BCARBON_RHO007 = 7;
    uint256 public constant BCARBON_RHO008 = 8;
    uint256 public constant BCARBON_RHO009 = 9;
    uint256 public constant BCARBON_RHO010 = 10;
    uint256 public constant BCARBON_RHO011 = 11;
    uint256 public constant BCARBON_RHO012 = 12;
    uint256 public constant BCARBON_RHO013 = 13;
    uint256 public constant BCARBON_RHO014 = 14;
    uint256 public constant BCARBON_RHO015 = 15;


    constructor() ERC1155("https://jade-near-wasp-97.mypinata.cloud/ipfs/QmVupA8r6ZGq3yP8neUZ742ddMuzEReurTVHokcBYe5CUU/{id}.json") {
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, SILVER, 10**27, "");
        _mint(msg.sender, THORS_HAMMER, 1, "");
        _mint(msg.sender, SWORD, 10**9, "");
        _mint(msg.sender, SHIELD, 10**9, "");
    }