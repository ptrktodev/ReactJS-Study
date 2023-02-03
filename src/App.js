import React from 'react';

const App = () => {

    // Hook 

    let [ativo, setAtivo] = React.useState(true) // [true, f]
    let [dados, setDados] = React.useState({nome: 'Patrick', idade: '20'})

    function clickUpdate() {
        setAtivo(!ativo)
        setDados({...dados, faculdade: 'Possui Faculdade'})
    } 

    return (
        <div>
            <p>{dados.nome}</p>
            <p>{dados.idade}</p>
            <p>{dados.faculdade}</p>
            <button onClick={clickUpdate}>{ativo ? 'Ativo' : 'Inativo'}</button>
        </div>
    )

}

export default App;