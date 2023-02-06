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

    function operLenta() {
        let c;
        for (let i = 0; i < 1000000; i++) {
            c = i + i / 9028
        }
        return c
    }

    const [cont , setCont] = React.useState(0)

    // 
    const useMemo = React.useMemo(() => operLenta(), [])

    //
    const handleClick = React.useCallback(() => {
        setCont((cont) => cont + 1)
    }, [])

    return (
        <div className="App"> 
            <header className='App-header'>
                <button style={styleButton} onClick={handleClick}>Contador: {cont} </button>
                <p>ms: {useMemo}</p>
            </header>
        </div>
    )

}

export default App;