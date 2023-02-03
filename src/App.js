import React from 'react';
import Controller from './controller';
import Home from './Home';
import Produtos from './Produtos';


const App = () => {

    let Pagina;
    if (window.location.pathname === '/') {
        Pagina = Home
    } else {
        Pagina = Produtos
    }

    return (
        <>
            <Controller/>
            <Pagina />
        </>
    )
}

export default App;