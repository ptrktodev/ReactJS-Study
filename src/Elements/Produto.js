import React from 'react'
import { useParams } from 'react-router-dom'
import '../Style/Produto.css'
import Head from './Head'

const Produto = () => {
  const [data, setData] = React.useState(null)
  const [load, setLoad] = React.useState(false)
  const [erro, setErro] = React.useState(null)
  const TimeoutRef = React.useRef()
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchProd(url) {
      try {
        setLoad(true)
        setTimeout(async () => {
          const res = await fetch(url)
          const json = await res.json()
          setData(json)
          setLoad(false)
        }, 1000)
      } catch (error) {
        setErro('deu merda')
      }
    }
    fetchProd(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (load) return <div class="spinner"></div>
  if (erro) return <div>{erro}</div>
  if (data === null) return null
  return (
    <div className="Produto">
      <Head title={data.nome} />
      <div className="Produto-img">
        {data.fotos.map((foto) => (
          <img src={foto.src} />
        ))}
      </div>
      <div className="Produto-descr">
        <h2>{data.nome}</h2>
        <span>R$ {data.preco}</span>
        <p>{data.descricao}</p>
      </div>
    </div>
  )
}

export default Produto
