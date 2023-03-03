import React from 'react';
import './App.css';
import Welcom from './welcome/Welcom';
import Registr from './registation/Registr';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
  <div className="App">
      <Routes>
        <Route path="/" element={<Welcom />} />
        <Route path="/registr" element={<Registr/>}/>     
      </Routes>
    </div>
  );
}

export default App;
