import React from 'react'
import './App.css'
import After from './After'
import Radio from './Radio'
import Ball from './Ball'

const perguntas = [
  {
    pergunta: 'Qual é o meu nome?',
    options: ['Patrick', 'Julio', 'Kásio'],
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
  {
    pergunta: 'Qual genêro muscial gosto muito?',
    options: ['Pagode', 'Eletrônica', 'Clássicas'],
    resposta: 'Pagode',
    id: 'p5',
  },
]

const App = () => {
  const [res, setResp] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
  })
  const [cont, setCont] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const TimeoutRef = React.useRef()
  const [hability, setHability] = React.useState(false)
  const [messageoff, setmessageoff] = React.useState(null)
  const [onmsgof, setonmsgoff] = React.useState(false)
  const [num, setnum] = React.useState(0)

  const resUser = Object.values(res)
  const resCorrect = perguntas.map((el) => {
    return el.resposta
  })

  function quantityCorrect(correct, user) {
    const newArray = correct.concat(user)
    let ressEnd = []
    newArray.forEach((element, index) => {
      if (
        newArray.indexOf(element) !== index &&
        ressEnd.indexOf(element) === -1
      ) {
        ressEnd.push(element)
      }
    })
    return ressEnd
  }

  const correctArrayLength = quantityCorrect(resCorrect, resUser)

  function verify(x, y) {
    return JSON.stringify(x) === JSON.stringify(y)
  }

  let resFinal = verify(resUser, resCorrect)

  React.useEffect(() => {
    clearTimeout(TimeoutRef.current)
    if (loading === true) {
      TimeoutRef.current = setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [loading])

  function click({ target }) {
    setResp({ ...res, [target.id]: target.value })
  }
  function next() {
    if (num > 0) {
      setCont(cont + 1)
      setLoading(true)
      setHability(true)
    } else {
      setmessageoff(['Selecione alguma das opções.'])
      setonmsgoff(true)
    }
  }

  function prev() {
    if (cont < 1) {
      setHability(false)
    } else {
      setCont(cont - 1)
      setLoading(true)
    }
  }
  //
  if (cont < 5) {
    return (
      <section className="App-container">
        <Ball />
        <div className="App-sup">
          <h1 style={{ fontSize: '2rem' }} className="App-h1">
            QUIZ DO RODRIGUEZ
          </h1>
        </div>
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
        {onmsgof ? <span>{messageoff}</span> : ''}
        <div className="App-Button-1">
          {hability ? (
            <button onClick={prev} className="App-Button">
              Prev
            </button>
          ) : (
            ''
          )}
          <button ref={TimeoutRef} onClick={next} className="App-Button">
            Next
          </button>
        </div>
      </section>
    )
  } else {
    return (
      <After
        response={resFinal}
        load={loading}
        lengthRes={correctArrayLength}
      />
    )
  }
}

export default App
