import React from 'react';
import Button from './Button';
import Content from './Content';

const App = () => {

    // Hook = Open / CLose

    let [Ativo, setAtivo] = React.useState(true) 

    return (
        <div>   
            <Button Ativo={Ativo} setAtivo={setAtivo}/>
            <Content Ativo={Ativo}/>
        </div>
    )

}

export default App;