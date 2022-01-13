import ContractForm from './Components/ContractForm';
import ContractOutput from './Components/ContractOutput';
import './styles/index.scss';
import React, { useState } from 'react';

export const Context = React.createContext();

function App() {

  const [state, setState] = useState(null);

  const handleInputsChange = (e) => {
    if (e.target.type === 'checkbox') {
      e.target.id === 'autoIncrementId'
        ? setState({ ...state, [e.target.name]: e.target.checked, 'mintable': true })
        : setState({ ...state, [e.target.name]: e.target.checked });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }
 
  return (
    <div className="App custom-app">
      <Context.Provider value={{ handleInputsChange, state }}>
        <div className="panel-wrapper">
          <h1 className="app-name">Create Contract for ERC721 token</h1>
          <div className="panel-inner-wrapper">
            <ContractForm />
            <ContractOutput />
          </div>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
