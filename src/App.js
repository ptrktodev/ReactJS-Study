import React from 'react';

const titulo = <h1><b>TITULO</b></h1>

const App = () => {

  const cliente01 = {
    nome: 'Luana',
    idade: 34,
    carrinho: [
      {nome: 'Fone', valor: 48},
      {nome: 'monitor', valor: 382}
    ],
    situacao: true
  }

   const cliente02 = {
    nome: 'Pedro',
    idade: 24,
    carrinho: [
      {nome: 'Pc Gamer', valor: 8438},
      {nome: 'Cadeira Gamer', valor: 2629}
    ],
    situacao: false
  }  

  let dados = cliente02

  const totalCompras = dados.carrinho
        .map((el)=> { return el.valor })
        .reduce((acc, atual)=> acc + atual)

  // ======================
  return (
    <div className="App">
      <div> 
        <p>Nome: {dados.nome}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: {' '}
          <span style={{color: dados.situacao ? 'green' : 'red'}}>
            {dados.situacao ? "Ativa" : "Inativo"}
          </span>
        </p>
        <p>Total Gasto: R$ {totalCompras}</p>
        <p style={{color: 'red'}}>{totalCompras > 10000 ? "Você esta gastando muito!" : ''}</p>
      </div>
    </div>
  )
}

export default App;