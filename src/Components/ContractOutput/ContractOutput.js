import { useContext } from 'react';
import { Context } from '../../App';

import './ContractOutput.scss'

const contractMethods = {
    contract: (name, symbol) => `constructor() ERC721("${name}", "${symbol}") { }`,
    baseUri: (string) => `function _baseURI() internal pure override returns (string memory) {
        return "${string}";
    }`,
    mint: () => `function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }`

}


const ContractOutput = () => {

    const { state } = useContext(Context);
    const { name, symbol, baseUri, mintable, withdraw } = state || {};

    return <code className="contract-output-wrapper">
        <p className="license">// SPDX-License-Identifier: MIT</p>
        <p>pragma solidity ^0.8.2;</p>
        <br></br>
        <p>import "@openzeppelin/contracts/token/ERC721/ERC721.sol";</p>
        {mintable && <p>import "@openzeppelin/contracts/access/Ownable.sol";</p>}
        <br></br>
        <div>
            {`contract ${name || 'MyToken'} is ERC721 {`}
            <br></br>

            {(name && symbol)
                && <>
                    <pre>&emsp; {contractMethods.contract(name, symbol)}</pre>
                    <br></br>
                </>
            }

            {baseUri
                && <>
                    <pre>&emsp; {contractMethods.baseUri(baseUri)}</pre>
                    <br></br>
                </>}

            {mintable
                && <>
                    <pre>&emsp; {contractMethods.mint()}</pre>
                    <br></br>
                </>}

            <br></br>
            {'}'}
        </div>
    </code>
}

export default ContractOutput;