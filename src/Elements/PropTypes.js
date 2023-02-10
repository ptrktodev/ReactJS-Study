import React from 'react'
import Memo from './Memo'
import '../Style/study.css'

/* USE REDUCER SWITCH */
function reducer2(num2, action) {
  switch (action) {
    case 'aumentar':
      return num2 + 1
    case 'diminuir':
      return num2 - 1
  }
}

/* USE REDUCER IF */
function reducer(num, action) {
  if (action === 'aumentar') return num + 1
  if (action === 'diminuir') return num - 1
  return null
}

/* remover item */
function reducer3(item, action) {
  switch (action.type) {
    case 'remover':
      return item.filter((item) => item !== action.content)
    case 'adicionar':
      return [...item, action.content]
    case 'removItem':
      return [item.pop()]
    default:
      throw new Error()
  }
}

const PropTypes = () => {
  const [cont, setCont] = React.useState(0)
  const [num, setNum] = React.useReducer(reducer, 0)
  const [num2, setNum2] = React.useReducer(reducer2, 0)
  const [item, setItem] = React.useReducer(reducer3, ['maça', 'uva'])

  function click() {
    setCont(cont + 1)
  }

  console.log('contador renderizou')

  return (
    <div className="Home">
      <h1 style={{ color: 'red' }}>React.Memo</h1>
      <Memo />
      <button onClick={click} style={{ padding: '1rem' }}>
        Contador: {cont}
      </button>
      <h1 style={{ color: 'red' }}>useReducer com if</h1>
      <button onClick={() => setNum('diminuir')}>-</button>
      <button onClick={() => setNum('aumentar')}>+</button>
      <p>{num}</p>
      <h1 style={{ color: 'red' }}>useReducer com switch</h1>
      <button onClick={() => setNum2('diminuir')}>-</button>
      <button onClick={() => setNum2('aumentar')}>+</button>
      <p>{num2}</p>
      <h1 style={{ color: 'red' }}>useReducer com switch</h1>
      {item.map((el) => (
        <p>{el}</p>
      ))}
      <button onClick={() => setItem({ type: 'remover', content: 'uva' })}>
        Remover Uva
      </button>
      <button
        onClick={() => setItem({ type: 'adicionar', content: 'Abacate' })}
      >
        Adicionar Abacate
      </button>
      <button onClick={() => setItem({ type: 'removItem' })}>
        remover ultimo item
      </button>
    </div>
  )
}

export default PropTypes
