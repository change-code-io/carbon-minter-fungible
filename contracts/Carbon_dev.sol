// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
 
 contract Carbon_dev is Ownable, ERC1155, ERC1155Burnable {
        
    string public name = "Change Code -- Carbon";
    string public symbol = "CC-CO2";
    
    uint256 public constant CARBON_BUFFER = 0;
    uint256 public constant CARBON_CCO001 = 1;
    uint256 public constant CARBON_CCO002 = 2;
    uint256 public constant CARBON_CCO003 = 3;

    using Strings for uint256;

    string private baseURI = "https://jade-near-wasp-97.mypinata.cloud/ipfs/QmZXxKCJfhVqCTiydHdqyhWbQ2SGXrdWHLvnU9J3D7XndJ/";

    constructor() ERC1155("https://jade-near-wasp-97.mypinata.cloud/ipfs/QmZXxKCJfhVqCTiydHdqyhWbQ2SGXrdWHLvnU9J3D7XndJ/{id}.json") Ownable(msg.sender) {
        _setURI("https://jade-near-wasp-97.mypinata.cloud/ipfs/QmZXxKCJfhVqCTiydHdqyhWbQ2SGXrdWHLvnU9J3D7XndJ/{id}.json");
    }

    event TokenURI(string uri);

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return string(abi.encodePacked(baseURI, tokenId.toString(), ".json"));
    }
    
    function mint_plus(address to, uint256 tokenId, uint256 quantity, bytes calldata data) external payable onlyOwner {
        _mint(to, tokenId, quantity, data);
        emit TokenURI(tokenURI(tokenId));
    }


    // requires private key of sender (instead of contract owner)
    function transfer_plus(address from, address to, uint256 tokenId, uint256 quantity, bytes calldata data) external payable {
        safeTransferFrom(from, to, tokenId, quantity, data);
        emit TokenURI(tokenURI(tokenId));
    }
    
    // uses private key of contract owner regardless of token holder
     function burn(address from, uint256 tokenId, uint256 quantity) public onlyOwner override {
        _burn(from, tokenId, quantity);
    }
}