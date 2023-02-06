import React from 'react';
import './App.css'
import {GlobalStorage} from './Global';
import Produto from './Produto';

const App = () => {

    return (
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    )

}

export default App;