import React from 'react';

const App = () => {

  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#d60404', '#00d4ff', '#38f751']
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#af04d6', '#a2ff00']
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#0328c7', '#c7c603']
    },
  ]
  
  const livros = [
    {nome: "Uma viagem", ano: 1998},
    {nome: "O Castelo", ano: 1830},
    {nome: "Filosofia da Vida", ano: 1728}
  ]

  let dadosFiltrados = produtos.filter(({preco})=> 
      Number(preco.replace('R$', '')) > 1600
    )

  return (
    <div>
      <section>
            {dadosFiltrados
              .map(({id, nome, preco, cores})=> 
                <div key={id}>
                  <h1>{nome}</h1> 
                  <h3>{preco}</h3>
                  <ul>
                    {cores.map((cor)=> 
                      <li key={cor} style={{backgroundColor: cor}}>
                        {cor}
                      </li>
                    )}
                  </ul>
                </div>
              )}

      </section>
    </div>
  )
}

export default App;