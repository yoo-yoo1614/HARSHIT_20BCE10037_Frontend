import './App.css';
import React, { useState } from 'react';
import Fields from './components/Fields';
import Dropdown from './components/Dropdown';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
    <div className='main'>
      <div className='main-content'>
        <Dropdown onSelect={handleSelect}/>
        <Fields/>
      </div>
    </div>
    </>
  );
}

export default App;
