// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
 
 contract Carbon is Ownable, ERC1155, ERC1155Burnable {
        
    string public name = "Change Code -- BCarbon | CO2";
    string public symbol = "CC-BC-CO2";
    
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

    using Strings for uint256;

    string private baseURI = "https://bcarbon.changecode.io/methodologies/soil-carbon-methodology";

    constructor() ERC1155("https://bcarbon.changecode.io/methodologies/soil-carbon-methodology") Ownable(msg.sender) {
        _setURI("https://bcarbon.changecode.io/methodologies/soil-carbon-methodology");
    }
    
    function mint_plus(address to, uint256 tokenId, uint256 quantity, bytes calldata data, string memory mint_metadata) external payable onlyOwner {
        _mint(to, tokenId, quantity, data);
    }

    // requires private key of sender (instead of contract owner)
    function transfer_plus(address from, address to, uint256 tokenId, uint256 quantity, bytes calldata data, string memory transfer_metadata) external payable {
        safeTransferFrom(from, to, tokenId, quantity, data);
    }
    
    // uses private key of contract owner regardless of token holder
     function burn_plus(address from, uint256 tokenId, uint256 quantity, string memory burn_metadata) public onlyOwner {
        _burn(from, tokenId, quantity);
    }
}