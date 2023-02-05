import React from 'react';
import './App.css'
import Produto from './Produto'

const App = () => {

    const style = {
        background: 'black',
        margin: '5px',
        borderRadius: '5px',
        padding: '8px',
        color: 'white',
        cursor: 'pointer',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

    const display = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

    // ============================================

    let [produto, setProduto] = React.useState(null)
    let [item, SetItem] = React.useState(null)

    // ============================================

    function click({target}) {
        setProduto(target.innerText)
    }

    React.useEffect(() => {
        if (produto !== null) {
            window.localStorage.setItem('produto', produto)
        }
    }, [produto])

    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem('produto')
        if (produtoLocal != null) {
            setProduto(produtoLocal)
        }
    })

    // ============================================

    return (
        <div className="App"> 
        <header className='App-header'>
            <h2>FETCH, USE-EFFECT(localStorage) and STATES</h2>
                <div>
                    <h3 style={display}>CLIQUE E ARMAZENE INFORMAÇÕES</h3>
                    <buttton onClick={click} style={style} id='1'>Tablet</buttton>
                    <buttton onClick={click} style={style} id='1'>Celular</buttton>
                    { produto &&<p><b>Preferência:</b>    {produto}</p>}
                </div>
                <div>
                    <h3 style={display}>CLIQUE E RECEBA & ARMAZENE INFORMAÇÕES</h3>
                    <Produto style={display} produto={item}/>
                </div>
        </header>
        </div>
    )

}

export default App;