import React from 'react'
import Titulo from './Titulo'

const Produtos = () => {

    const notebook = [
        {color: 'green',nome: 'Acer', propriedades: ['16GB Ram', '512GB'], ano: '2019', processador: 'i3'},
        {color: 'blue', nome: 'Positivo', propriedades: ['32GB Ram', '252GB'], processador: 'i5'},
        {color: 'red' ,nome: 'Dell', propriedades: ['8GB Ram','8GB Ram', '512GB'], processador: 'i7'}
    ]

    const css = {
        border: '2px solid black',
        marginTop: '10px',
        paddingLeft: '10px',
        borderRadius: '12px'
    }

    return (
        <section>
            <Titulo text='Produtos'/>
            {notebook.map(({color, nome, propriedades, ano, processador}) => 
                <div style={css}>
                    <h1 style={{color: color}}>{nome}</h1>
                    <ul>
                        {propriedades.map((item)=> 
                            <li>Propriedades: {item}.</li>
                    )}
                            <li>Ano: {ano? ano : 'Não especificado'}.</li>
                            <li>Processador: {processador? processador : 'Não especificado'}.</li>
                    </ul>
                </div>
            )}
        </section>
    )
}

export default Produtos