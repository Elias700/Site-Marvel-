
import './Series.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Series = () => {

  const navigate = useNavigate();

  const series = [

    {id: 1, img: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/13/she-hulk-rh4yoqztxues.jpg'},
    {id: 2 , img: 'https://tm.ibxk.com.br/2021/04/26/26173204780390.jpeg'},
    {id: 3 , img: 'https://www.centralcomics.com/wp-content/uploads/2022/03/MoonKnight_Digital_Teaser3_v4_lg.jpg'},
    {id: 4 , img: 'https://lumiere-a.akamaihd.net/v1/images/poster_14121583.png'},
    {id: 5 , img: 'https://imgsrc.cineserie.com/2018/12/1629177-1.jpg?ver=1'},
    {id: 6 , img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjAUPGEzJ-JY8kIJJgvv7sOX4hGXbBNh4847OQjx_O41VfvysNu_b9ZR-jWedw1tZUa6CyVlz8sqZHlCXnN7Tl3TPDVV_ltI3qCS0nhUc5O1C8gooOQ-Exmh_cYzdL19PW1Jyapd8eLrR5njcOwDqLNs8hzJKlPexTFfZpQzWBlYjwhwQxkAQ'},
    {id: 7 , img: 'https://images.justwatch.com/poster/306096999/s332/temporada-1'},
    {id: 8 , img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/061E991CB75683DB8FE984B7E5884E5913E569386CA881A7C221BBF3F03C4E5B/scale?width=506&amp;aspectRatio=2.00&amp;format=webp'},
    {id: 9 , img: 'https://hqrock.files.wordpress.com/2015/04/daredevil-tv-red-suit.jpg'},
    {id: 10 , img: 'https://cinema10.com.br/upload/series/series_1014_psher.jpg'},
    {id: 11, img: 'https://www.chroniquedisney.fr/imgFiliale/marvel/ironfistS2/2018-iron-fist-S2-00.jpg'},
    {id: 12 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlxhPV1VY2RUuKBWhzCk63PS6_nx58Fn0MVf_i9Y5dA&s'},
    {id: 13 , img: 'https://br.web.img2.acsta.net/pictures/16/08/08/16/28/541752.jpg'},
    {id: 14, img: 'https://oregional.com.br/media/blog/3d3cdd43d9b1e77452a508d6a411d27f.jpg'},
    {id: 15, img: 'https://media.fstatic.com/uUiDYcWFk_IQlvq_v39rzBMqDTg=/210x312/smart/filters:format(webp)/media/movies/covers/2017/08/pkltksfbqdno6mepunlu.jpg'},
    {id: 16, img: 'https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Fseries%2Fseries_3314_fyro8gmwaaekql0-easy-resize.com.jpg'}
  ]

  return (

    <div className='fundo1'>

      <div className='background1'>
      
        <div className='cabeçalho'>

          <ul>
            <li onClick={() => navigate('/')}>INÍCIO</li>
            <li>PESQUISA</li>
            <li onClick={() => navigate('/main')}>FILMES</li>
            <li>SÉRIES</li>
          </ul>

        </div>

        </div>

        <h1 className='titulo'>Séries</h1>

        {series.map((serie, id) => (

          <div className="edicaoImg2">

            <img key={id} style={{height: '600px'}} src={serie.img} alt="" />

          </div>

        ))}

        <footer className='rodaPe'>

          <h1 className='title2'>Marvel Movies</h1>

        </footer>

    </div>

  )
}

export default Series
