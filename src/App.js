import React from 'react';
import './App.css'
import {GlobalStorage} from './Global';
import Produto from './Produto';
import Api from './Api';

const App = () => {

    return (
        <GlobalStorage>
            <Produto />
            <Api />
        </GlobalStorage>
    )

}

export default App;