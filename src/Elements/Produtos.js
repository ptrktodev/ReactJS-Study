import React from 'react'
import { Link } from 'react-router-dom'

const Produtos = () => {
  return (
    <div>
      {' '}
      <h1>Produtos</h1>
      <ul>
        <Link to="produto/Iphone 8">Iphone 8</Link>
        <br />
        <Link to="produto/Iphone 7">Iphone 7</Link>
        <br />
        <Link to="produto/Samsung">Samsung</Link>
        <br />
        <Link to="produto/Motorola">Motorola</Link>
        <br />
        <Link to="produto/Xiaomi">Xiaomi</Link>
        <br />
        <Link to="produto/Lenovo">Lenovo</Link>
      </ul>
    </div>
  )
}

export default Produtos
