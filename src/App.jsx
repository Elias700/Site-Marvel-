
import './App.css'
import React from 'react';
import Login from './components/Login/Login'
import Registrar from './components/Registrar/Cadastro';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './components/Main/Main';
import Series from './components/Series/Series';



function App() {
  

  return (
    <>

    <div className="App">

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/registrar' element={< Registrar />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/series' element={<Series />}/>
      </Routes>
          
    </div>

      
    </>
  )
}

export default App
