import ContractForm from './Components/ContractForm';
import ContractOutput from './Components/ContractOutput';
import React, { useState, useRef } from 'react';
import './styles/index.scss';

export const Context = React.createContext();

function App() {

  const [state, setState] = useState(null);
  const textToCopy = useRef();
  const handleInputsChange = (e) => {
    if (e.target.type === 'checkbox') {
      e.target.id === 'autoIncrementId'
        ? setState({ ...state, [e.target.name]: e.target.checked, 'mintable': true })
        : setState({ ...state, [e.target.name]: e.target.checked });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  const handleCompileContract = () => {
    const text = {
      text: textToCopy.current.innerText,
    }
    // const textForContract = new Blob(JSON.stringify(text, null, 2), { type: 'application/json' });
    // console.log(textForContract);
  }
  return (
    <div className="App custom-app">
      <Context.Provider value={{ handleInputsChange, state }}>
        <div className="panel-wrapper">
          <h1 className="app-name">Create Contract for ERC721 token</h1>
          <button className='compile-button' onClick={handleCompileContract}>Compile Contract</button>
          <div className="panel-inner-wrapper">
            <ContractForm />
            <ContractOutput textToCopy={textToCopy} />
          </div>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
