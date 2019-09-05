import React from 'react';
import './App.scss';
import { Calculator } from './Calculator/Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-heading">
          Calculator
        </h1>
        <Calculator></Calculator>
      </header>
    </div>
  );
}

export default App;
