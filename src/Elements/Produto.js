import React from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import DescrProduto from './Produto/DescrProduto'
import AvaliaProduto from './Produto/AvaliaProduto'

const Produto = () => {
  const params = useParams()
  const location = useLocation() // todas as infos da rota atual

  return (
    <div>
      <h1>PRODUTO: {params.id}</h1>
      <nav>
        <Link to="">Descrição</Link> {' | '}
        <Link to="avaliacao">Avaliação</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DescrProduto />} />
        <Route path="avaliacao" element={<AvaliaProduto />} />
      </Routes>
    </div>
  )
}

export default Produto
