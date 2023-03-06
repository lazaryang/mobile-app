import React from 'react';
import './App.css';
import Welcom from './welcome/Welcom';
import Registr from './registation/Registr';
import {Routes,Route} from 'react-router-dom';
import Registr2 from './registation/Registr2';


function App() {
  return (
  <div className="App">
      <Routes>
        <Route path="/" element={<Welcom />} />
        <Route path="/registr" element={<Registr/>}/>     
        <Route path='/registr2' element={<Registr2/>}/>
      </Routes>
    </div>
  );
}

export default App;
