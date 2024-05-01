

import React, { useState } from 'react'
import {FaUser, FaLock} from "react-icons/fa"
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(username);

        console.log(password);

    };

    const Forgot = () => {

        if(username == handleSubmit){
            alert(`Um email foi enviado para ${username} para criar uma nova senha`) //pensar em uma lógica pra essa parte
        } else {
            alert('Usuário não identificado')
        }

    }

    const navigate = useNavigate();
    

    

  return (


    <div> 

        <div className="marvelMovies">
            <h1 className='title'>Marvel Movies </h1>
        </div>

        <br /> <br /> <br />

        <div className='container'>

            
            <form onSubmit={handleSubmit}>

                <h1> Login </h1>

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

                        <a href="#" value={username} onClick={() => setUsername(Forgot())}>Esqueceu a senha?</a>

                    </div>


                        {/*Botão */}
                        <button type='submit'>Entrar</button>


                        {/* Final */}
                        <div className="signup-link">

                        <p>Não tem uma conta?</p>
                        <a onClick={() => navigate('/registrar')} href="#">Cadastrar</a>

                    </div>
            
                </form>

            </div>

    </div>  

  )
}

export default Login
