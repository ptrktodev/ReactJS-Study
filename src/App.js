import React from 'react';
import Button from './Button';
import Contador from './Contador';
import Content from './Content';

const App = () => {

    // Hook = Open / CLose

    let [Ativo, setAtivo] = React.useState(true) 
    let [item, setItem] = React.useState(true)

    function fun() {
        setItem((item) => !item)
        // setItem(!item)
    }


    return (
        <section>   
            <button onClick={fun}>{item ? 'word' : 'palavra'}</button>
            <Button Ativo={Ativo} setAtivo={setAtivo}/>
            <Content Ativo={Ativo}/>
            <Contador Ativo={Ativo} setAtivo={setAtivo}/>
        </section>
    )

}

export default App;