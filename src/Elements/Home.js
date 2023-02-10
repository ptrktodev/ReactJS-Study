import React from 'react'
import '../Style/Home.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({ title }) => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    document.title = title
  }, [title])

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setDados(json))
  }, [])

  if (dados === null) return null
  return (
    <div className="Home">
      {dados.map((el) => (
        <div className="imagens">
          <img src={el.fotos[0].src} />
          <Link to={`produto/${el.id}`}>
            <button>{el.nome}</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
