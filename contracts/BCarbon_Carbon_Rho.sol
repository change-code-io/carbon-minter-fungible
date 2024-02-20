// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
 
 contract BCarbon_Carbon_Rho is Ownable, ERC1155, ERC1155Burnable {
        
    string public name = "BCarbon -- Carbon Rho";
    string public symbol = "BCO2-RHO";
    
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

    address public carbonRho;

    using Strings for uint256;

    string private baseURI = "https://jade-near-wasp-97.mypinata.cloud/ipfs/QmVupA8r6ZGq3yP8neUZ742ddMuzEReurTVHokcBYe5CUU/";

    constructor() ERC1155("https://jade-near-wasp-97.mypinata.cloud/ipfs/QmVupA8r6ZGq3yP8neUZ742ddMuzEReurTVHokcBYe5CUU/{id}.json") Ownable(msg.sender) {
        _setURI("https://jade-near-wasp-97.mypinata.cloud/ipfs/QmVupA8r6ZGq3yP8neUZ742ddMuzEReurTVHokcBYe5CUU/{id}.json");
    }

    event TokenURI(string uri);

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return string(abi.encodePacked(baseURI, tokenId.toString(), ".json"));
    }
    
    function metamint(address to, uint256 tokenId, uint256 quantity, bytes calldata data) external payable onlyOwner {
        _mint(to, tokenId, quantity, data);
        emit TokenURI(tokenURI(tokenId));
    }

     function burn(address from, uint256 tokenId, uint256 quantity) public onlyOwner override {
        _burn(from, tokenId, quantity);
    }
}