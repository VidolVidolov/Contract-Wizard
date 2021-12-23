import { useContext } from 'react';
import { Context } from '../../../App';

import './DefaultSettings.scss';

const DefaultSettings = () => {

    const { handleInputsChange } = useContext(Context);

    return (<div className="default-settings-wrapper">
        <h3 className="contract-from-section-heading">Settings</h3>
        <div className="input-wrapper">
            <label htmlFor="name">Name:</label>
            <br></br>
            <input id="name" className="def-settings-input" name="name" onChange={(e) => handleInputsChange(e)} />
        </div>
        <div className="input-wrapper">
            <label htmlFor="symbol">Symbol:</label>
            <br></br>
            <input id="symbol" className="def-settings-input" name="symbol" onChange={(e) => handleInputsChange(e)} />
        </div>
        <div className="input-wrapper">
            <label htmlFor="baseUri">Base URI:</label>
            <br></br>
            <input id="baseUri" className="def-settings-input" name="baseUri" onChange={(e) => handleInputsChange(e)} />
        </div>
    </div>
    )
}

export default DefaultSettings;