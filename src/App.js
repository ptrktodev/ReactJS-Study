import React from 'react'
import Radio from './Radio'
import './App.css'
const perguntas = [
  {
    pergunta: 'Qual é o meu nome?',
    options: ['Patrick', 'Julio', 'Kásia'],
    resposta: 'Patrick',
    id: 'p1',
  },
  {
    pergunta: 'Qual é a minha idade?',
    options: ['19', '20', '21'],
    resposta: '20',
    id: 'p2',
  },
  {
    pergunta: 'Qual é o meu Hobbie?',
    options: ['Skate', 'Piano', 'Basquete'],
    resposta: 'Piano',
    id: 'p3',
  },
  {
    pergunta: 'Qual área quero seguir..?',
    options: ['Medicina', 'Música', 'Tecnologia'],
    resposta: 'Tecnologia',
    id: 'p4',
  },
]

const App = () => {
  const [res, setResp] = React.useState({ p1: '', p2: '', p3: '', p4: '' })
  const [cont, setCont] = React.useState(0)

  function click({ target }) {
    setResp({ ...res, [target.id]: target.value })
    console.log(res)
  }
  function next() {
    setCont(cont + 1)
    console.log(res)
  }

  if (cont < 4) {
    return (
      <section className="App-container">
        <div className="App-sup">sss</div>
        <form onSubmit={(event) => event.preventDefault()} className="App-Form">
          {perguntas.map((elementos, index) => (
            <Radio
              active={cont === index}
              {...elementos}
              key={elementos.id}
              value={res[elementos.id]}
              onChange={click}
            />
          ))}
        </form>
        <button onClick={next}>Next</button>
      </section>
    )
  } else {
    const resUser = Object.values(res)
    const resCorrect = perguntas.map((el) => {
      return el.resposta
    })

    function verify(x, y) {
      return JSON.stringify(x) === JSON.stringify(y)
    }

    const resFinal = verify(resUser, resCorrect)

    if (resFinal === true) {
      return (
        <p className="App-container" style={{ color: 'green' }}>
          Acertou
        </p>
      )
    } else {
      return (
        <p className="App-container" style={{ color: 'red' }}>
          Errou
        </p>
      )
    }
  }
}

export default App
