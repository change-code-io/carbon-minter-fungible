// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
 
 contract Carbon is Ownable, ERC1155, ERC1155Burnable {
        
    string public name = "Change Code -- Testing";
    string public symbol = "CCT";
    
    uint256 public constant Batch0 = 0;
    uint256 public constant Batch1 = 1;


    using Strings for uint256;

    string private baseURI = "https://changecode.io";

    constructor() ERC1155("https://changecode.io") Ownable(msg.sender) {
        _setURI("https://changecode.io");
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