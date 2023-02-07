import React from 'react'
import { GlobalContext } from './Global'
import './css/Produto.css'

const Produto = () => {
  const styleButton = {
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '0px 10px',
  }

  const global = React.useContext(GlobalContext)

  return (
    <div className="Produto-container">
      <h1>Contador</h1>
      <div className="content">
        Contador: {global.contar1}
        <button style={styleButton} onClick={global.contarUm}>
          Adicionar um.
        </button>
        Contador: {global.contar2}
        <button style={styleButton} onClick={global.contarDois}>
          Adicionar dois.
        </button>
      </div>
    </div>
  )
}

export default Produto
