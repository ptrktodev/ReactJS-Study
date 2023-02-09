import React from 'react'
import '../Style/Home.css'
import poster from '../img/poster.jpg'
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-div1">
        <img src={poster} />
      </div>
      <div className="Home-div2">
        <h1>Uma jornada congelante</h1>
        <p>
          Inspirado na coletânea "As Crônicas de Gelo e Fogo" de George R. R.
          Martin, o seriado mostra a disputa por poder em Westeros, continente
          fictício que comporta 7 poderosas famílias. Após uma rebelião que
          tirou a dinastia Targaryen do poder, o reino se dobra agora ao Rei
          Robert Baratheon, que governa graças a intricados acordos que lhe
          garantem o poder.
        </p>
        <p>
          No entanto, quando o Rei morre sem deixar herdeiros, a disputa pelo
          Trono de Ferro se reinicia. À base de espadas, acordos, mentiras ou
          armações, Arryn, Frey, Stark, Martell, Lannister, Greyjoy e Baratheon
          seguirão uma única regra: no jogo dos tronos, ou você ganha ou você
          morre.
        </p>
        <h1>... em um mar de fogo.</h1>
        <p>
          Do outro lado do oceano, uma herdeira Targaryen tenta reunir forças
          para vir atrás do que considera ser seu por direito. Para isso, ela
          terá que reunir pessoas à sua causa, crescendo em poder e sabedoria
          para um dia retomar o poder que sua famíia possu
        </p>
      </div>
    </div>
  )
}

export default Home
