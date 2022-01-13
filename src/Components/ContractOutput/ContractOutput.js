import { useContext, useRef } from 'react';
import { Context } from '../../App';
import contractMethods from '../../Constants/methods';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';
import './ContractOutput.scss'

const ContractOutput = () => {

    const { state } = useContext(Context);
    const textToCopy = useRef();
    const { name, symbol, baseUri, mintable, withdraw, pausable, autoIncrementId } = state || {};

    const handleCopyToCLipBoard = () => {
        navigator.clipboard.writeText(textToCopy.current.textContent);
    }
    return <code className="contract-output-wrapper">
        <CopyToClipboardButton handleCopyToCLipBoard={handleCopyToCLipBoard} />
        <div ref={textToCopy}>
            <p className="license">// SPDX-License-Identifier: MIT</p>
            <p>pragma solidity ^0.8.2;</p>
            <br></br>
            <p>import "@openzeppelin/contracts/token/ERC721/ERC721.sol";</p>
            {(pausable) && <p>import "@openzeppelin/contracts/security/Pausable.sol";</p>}
            {(mintable || withdraw || pausable || autoIncrementId) && <p>import "@openzeppelin/contracts/access/Ownable.sol";</p>}
            {autoIncrementId && <p>import "@openzeppelin/contracts/utils/Counters.sol";</p>}

            <br></br>
            <div>
                {`contract ${name || 'MyToken'} is ERC721${pausable ? ', Pausable' : ''}${(mintable || withdraw || pausable) ? ', Ownable' : ''} {`}
                <br></br>

                {autoIncrementId
                    && <>
                        <pre>&emsp; {contractMethods.autoIncrementIdsFirstPart()}</pre>
                        <br></br>
                    </>
                }

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

                {
                    (autoIncrementId) ? <>
                        <pre>&emsp; {contractMethods.autoIncrementIdsSecondPart()}</pre>
                        <br></br>
                    </> : mintable
                        && <>
                            <pre>&emsp; {contractMethods.mint()}</pre>
                            <br></br>
                        </>
                }

                {withdraw
                    && <>
                        <pre>&emsp; {contractMethods.withdraw()}</pre>
                        <br></br>
                    </>}

                {pausable
                    && <>
                        <pre>&emsp; {contractMethods.pausable()}</pre>
                        <br></br>
                    </>}
                <br></br>
                {'}'}
            </div>
        </div>
    </code>
}

export default ContractOutput;