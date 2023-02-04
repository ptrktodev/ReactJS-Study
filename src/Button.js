import React from 'react'

const Button = ({Ativo, setAtivo}) => {
  return (<button onClick={() => setAtivo(!Ativo)}>{Ativo ? 'Abrir' : 'Fechar'}</button>)
}

export default Button
