
import './Registrar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Registrar = () => {

  const navigate = useNavigate();

  return (

    <div className='fotoDeFundo'>

      <form >

          <h1>Marvel Movies</h1>

          <br /> <br />

          <div className="bodyRegistro">

              <h1 id='cadastro'>Cadastro</h1>

                <div className='input'>

                  <input type="text" placeholder='Nome' />

                </div>

                <div className="input">

                    <input type="text" placeholder='Sobrenome' />

                </div>

                <div className="input">

                    <input type="email" placeholder='E-mail' />

                </div>

                <div className="input">

                    <input type="password" placeholder='Senha' />

                </div>


                <button>Registrar</button>

                <div className='ancora'>
                  <a onClick={() => navigate('/')} href="">Voltar para login</a>
                </div>
                

          </div>

      </form>

      
    </div>

  )
}


export default Registrar

