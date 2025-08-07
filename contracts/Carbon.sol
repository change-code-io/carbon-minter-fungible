// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./TokenConfig.sol";
 
 contract Carbon is Ownable, ERC1155Burnable {
        
    TokenConfig private tokenConfig = new TokenConfig();
    string public name = tokenConfig.NAME();
    string public symbol = tokenConfig.SYMBOL();
    
    using Strings for uint256;

    string private baseURI = tokenConfig.URI();

    constructor() ERC1155(tokenConfig.URI()) Ownable(msg.sender) {
        _setURI(tokenConfig.URI());
    }
    
    function mint_plus(address to, uint256 tokenId, uint256 quantity, bytes calldata data, string memory bid, string memory ipfs_data) external payable onlyOwner {
        _mint(to, tokenId, quantity, data);
    }

    // requires private key of sender (instead of contract owner)
    function transfer_plus(address from, address to, uint256 tokenId, uint256 quantity, bytes calldata data, string memory bid, string memory ipfs_data) external payable {
        safeTransferFrom(from, to, tokenId, quantity, data);
    }
    
    // uses private key of contract owner regardless of token holder
     function burn_plus(address from, uint256 tokenId, uint256 quantity, string memory bid, string memory ipfs_data) public onlyOwner {
        _burn(from, tokenId, quantity);
    }
}