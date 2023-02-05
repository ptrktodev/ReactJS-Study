import React from 'react';
import './App.css'

const App = () => {

    const styleButton = {
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        cursor: 'pointer'
    }

    const sucess = {
        color: 'green'
    }

    // ==============================

    const [cont , setCont] = React.useState(0)
    const [msg , setMsg] = React.useState(null)
    const TimeoutRef = React.useRef()

    function contar() {
        setCont(cont + 1)
        setMsg(['Item adicionadoc'])
        clearTimeout(TimeoutRef.current)
        TimeoutRef.current = setTimeout(()=>{
            setMsg(null)
        }, 2500)
        console.log(TimeoutRef.current)
    }

    return (
        <div className="App"> 
            <header className='App-header'>
                {msg && <p>{cont} {msg} <b style={sucess}>com sucesso</b>.</p>} 
                <button style={styleButton} onClick={contar}>Contador: {cont} </button>
            </header>
        </div>
    )

}

export default App;