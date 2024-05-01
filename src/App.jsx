
import Login from './components/Login/Login'
import Registrar from './components/Registrar/Registrar';
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react';
import './App.css'

function App() {
  

  return (
    <>

    <div className="App">

  

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/registrar' element={< Registrar />}/>
      </Routes>
          
      
  
    </div>

      
    </>
  )
}

export default App
