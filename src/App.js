import React from 'react';
import './App.css'

const App = () => {

    const styleInput = {
        cursor: 'pointer',
        padding: '10px',
        marginRight: '10px',
        borderRadius: '5px'
    }

    // ============================================
    const [coment, setComent] = React.useState([])
    const [input, setinput] = React.useState('')
    const [msg, setMsg] = React.useState('')
    const focusInput = React.useRef()
    const [ativo, setAtivo] = React.useState(false)

    function send() {
        if (input) {
            setComent([...coment, input])
            setinput('')
            focusInput.current.focus()
            setAtivo(!ativo)
        } else {
            let message = 'Adicone um valor'
            setMsg(message)
            setAtivo(!ativo)
        }
    }

    function changeValue({target}) {
        setinput(target.value)
    }

    function resetList(){
        setComent([])
    }

    function lastItem() {
        coment.pop()
        setComent([...coment])
    }

    function keyTecla(event) {
        if (event.key === 'Enter') {
            if (input) {
                setComent([...coment, input])
                setinput('')
                focusInput.current.focus()
                setAtivo(!ativo)
            } else {
                let message = 'Adicone um valor'
                setMsg(message)
                setAtivo(!ativo)
            }
        }
    }

    // ============================================

    return (
        <div className="App"> 
            <header className='App-header'>
                <h1>SEND COMMENTS TO THE LIST</h1>
                <ul>
                    {coment.map((el) =>
                        <li key={el}>{el}</li>
                    )}
                </ul>
                <input ref={focusInput} onKeyDown={keyTecla} style={styleInput} type='text' value={input} onChange={changeValue} />
                <button style={styleInput} onClick={send}>Send</button> 
                <button style={styleInput} onClick={lastItem}>Clear last item</button>
                <button style={styleInput} onClick={resetList}>Reset list</button> 
                {msg && !ativo && <p>{msg}</p>}
            </header>
        </div>
    )

}

export default App;