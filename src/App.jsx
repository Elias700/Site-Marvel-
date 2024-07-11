
import './App.css'
import React from 'react';
import Login from './components/Login/Login'
import Registrar from './components/Registrar/Cadastro';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './components/Main/Main';




function App() {
  

  return (
    <>

    <div className="App">

      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/registrar' element={< Registrar />}/>
          <Route path='/main' element={<Main />}/>
      </Routes>
          
    </div>

      
    </>
  )
}

export default App
