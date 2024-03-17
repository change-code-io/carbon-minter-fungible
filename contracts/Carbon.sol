// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
 
 contract Carbon is Ownable, ERC1155, ERC1155Burnable {
        
    string public name = "Change Code -- BCarbon | CO2";
    string public symbol = "CC-BC-CO2";
    
    uint256 public constant BCARBON_FFS = 0;

    using Strings for uint256;

    string private baseURI = "https://best-strengthening-495962.framer.app/methodologies/soil-carbon-methodology";

    constructor() ERC1155("https://best-strengthening-495962.framer.app/methodologies/soil-carbon-methodology") Ownable(msg.sender) {
        _setURI("https://best-strengthening-495962.framer.app/methodologies/soil-carbon-methodology");
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