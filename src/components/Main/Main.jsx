

import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'

const Main = () => {

  const navigate = useNavigate();

  const Filmes = [

    {id: 1, img: 'https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2022/08/22/904529/20220822165411735177e.webp',},
    {id: 2, img: 'https://hqrock.files.wordpress.com/2013/03/iron-man-3-official-poster-imax-caracters.jpg'},
    {id: 3, img: 'https://super.abril.com.br/wp-content/uploads/2018/07/cartaz-thor.jpg' },
    {id: 4, img: 'https://br.web.img3.acsta.net/pictures/14/02/03/20/36/257136.jpg' },
    {id: 5, img: 'https://br.web.img3.acsta.net/pictures/14/06/03/21/11/122582.jpg' },
    {id: 6, img: 'https://moviesense.files.wordpress.com/2018/04/avengers-infinity-war.jpg?w=1200'},
    {id: 7, img: 'https://img.elo7.com.br/product/zoom/265F120/big-poster-filme-homem-formiga-lo02-tamanho-90x60-cm-poster-cinema.jpg'},
    {id: 8, img: 'https://upload.wikimedia.org/wikipedia/pt/5/59/Captain_Marvel_%282018%29.jpg'},
    {id: 9, img: 'https://lumiere-a.akamaihd.net/v1/images/image_a2514f6d.jpeg?region=0,0,540,810'},
    {id: 10, img: 'https://lumiere-a.akamaihd.net/v1/images/unnamed_13_75a3ebb1.jpeg?region=0%2C0%2C356%2C512'},
    {id: 11, img: 'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg'},
    {id: 12, img: 'https://img.elo7.com.br/product/zoom/25E7D5A/big-poster-filme-vingadores-ultimato-lo002-tamanho-90x60-cm-poster-cinema.jpg'},
    {id: 13, img: 'https://lumiere-a.akamaihd.net/v1/images/image_94aa61e8.jpeg?region=0,0,540,810'},
    {id: 14, img: 'https://lumiere-a.akamaihd.net/v1/images/eternals_ka_mi_bra_9d31ede0.png?region=0%2C0%2C421%2C570'},
    {id: 15, img: 'https://img.elo7.com.br/product/zoom/1E3BBFE/big-poster-do-filme-deadpool-tamanho-90x-0-cm-loot-op-011-geek.jpg'},
    {id: 16, img: 'https://images.justwatch.com/poster/9635644/s718/logan.jpg'},
    {id: 17, img: 'https://play-lh.googleusercontent.com/6PafDvD-lV56dnozRYrpvT_v4D3UZ5QQNEcxWEZcTi3b7xULGQqJT5LfAl1dAeuK2HM'},
    {id: 18, img: 'https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw'},
    {id: 19, img: 'https://lumiere-a.akamaihd.net/v1/images/espetacular_homem_aranha2_a4e4c8e6.jpeg?region=0,0,750,938'},
    {id: 20, img: 'https://oregional.com.br/media/blog/d09a97509a40437ba30391086593ae9a.jpg'},
    {id: 21, img: 'https://s2-gshow.glbimg.com/gNNOTGzTHY83VKSsoZubqAT-dEM=/0x0:720x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/B/B/r6KVDMRPeSB9p1plIr3w/homem-formiga.jpg'},
    {id: 22, img: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/79/19/20163665.jpg'},
    {id: 23, img: 'https://cinepop.com.br/wp-content/uploads/2022/10/pantera-negra-2.jpg'},
    {id: 24, img: 'https://media.fstatic.com/KLfCyPP1iAp0RA-3I_fyHw2ANCY=/322x478/smart/filters:format(webp)/media/movies/covers/2023/09/cats_mhahDIJ.jpg'}
  ] 


  return (

  <div className="fundo">

 
    <div className='background'>

      <div className='header1'>

          <div className='edicaoLogo'>

            </div>

              <ul>
                  <li onClick={() => navigate('/')}>INÍCIO</li>
                  <li>PESQUISA</li>
                  <li>FILMES</li>
                  <li onClick={() => navigate('/series')}>SÉRIES</li>
              </ul>

      </div>

      <h1 className='title1'>Filmes</h1>

      {Filmes.map((filme, id) => (
        
            <div className='edicaoImg'>

              <img key={id} style={{height: '600px'}} src={filme.img} alt="" />
              
            </div>

      ))}

        <footer className='rodaPe'> 
          
          <h1 className='title2'>Marvel Movies</h1> 
      
        </footer>

        </div>

    </div>

    
    

  )
}

export default Main
