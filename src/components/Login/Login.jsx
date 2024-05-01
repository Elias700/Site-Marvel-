

import React, { useState } from 'react'
import {FaUser, FaLock} from "react-icons/fa"
import './Login.css'



const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(username);

        console.log(password);

    };



  return (

    <div className='container'>
      
        <form onSubmit={handleSubmit}>

            <h1> Acesse o sitema </h1>

                {/* Input de email */}
                <div className='input-field'>

                    <input type="email" placeholder='E-mail' required onChange={(e) => setUsername(e.target.value)}/> {/* e => evento, target => input alvo, value => valor que está sendo digitado */}
                    
                    <FaUser className='icon' />

                </ div>  

                {/* Input do password */}
                <div className='input-field'>
                    
                    <input type="password" placeholder='Senha' required onChange={(e) => setPassword(e.target.value)} />
                    
                    <FaLock className='icon' />

                </div>  

                {/* Parte: lembre de mim e esqueceu a senha */}
                <div className="reacll-forget">

                    <label> 

                        <input type="checkbox" />

                        Lembre de mim
                
                    </label>

                    <a href="#">Esqueceu a senha?</a>

                </div>


                    {/*Botão */}
                    <button type='submit'>Entrar</button>


                    {/* Final */}
                    <div className="signup-link">

                        <p>Não tem uma conta?</p>
                        <a href="#">Registrar</a>

                    </div>
      
        </form>

    </div>

  )
}

export default Login
