const contractMethods = {
    contract: (name, symbol) => `constructor() ERC721("${name}", "${symbol}") { }`,
    baseUri: (string) => `function _baseURI() internal pure override returns (string memory) {
        return "${string}";
    }`,
    mint: () => `function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }`,
    withdraw: () => `function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }`,
    pausable: () => `function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }`,
    autoIncrementIdsFirstPart: () => `using Counters for Counters.Counter;\n
  Counters.Counter private _tokenIdCounter;`,
    autoIncrementIdsSecondPart: () => `function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }`

}

export default contractMethods;