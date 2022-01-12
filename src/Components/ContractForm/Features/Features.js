import { Context } from '../../../App';
import { useContext } from 'react';
import './Features.scss';

const Features = () => {
    const { handleInputsChange } = useContext(Context);

    return <div>
        <h3 className="contract-from-section-heading">Features</h3>
        <div className="checkbox-wrapper">
            <input type="checkbox" name="mintable" className="checkbox-input" id="mintable" onChange={(e) => handleInputsChange(e)} />
            <label htmlFor="mintable">Mintable</label>
        </div>
        <div className="checkbox-wrapper">
            <input type="checkbox" name="withdraw" className="checkbox-input" id="withdraw" onChange={(e) => handleInputsChange(e)} />
            <label htmlFor="withdraw">Withdraw</label>
        </div>
        <div className="checkbox-wrapper">
            <input type="checkbox" name="pausable" className="checkbox-input" id="pausable" onChange={(e) => handleInputsChange(e)} />
            <label htmlFor="pausable">Pausable</label>
        </div>
    </div>
}

export default Features;