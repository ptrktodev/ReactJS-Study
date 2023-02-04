import React from 'react'

const Contador = ({Ativo, setAtivo}) => {

    let [item, setItem] = React.useState(['item'])
    let [cont, setCont] = React.useState(0)

    function AddCount() {
        /*         setCont((cont)=> {
            return cont + 1
        }) */
        setCont(cont +1)
        let x = setItem((item) => [...item, 'item ' + (cont + 1)])
    }
    function ExcCount() {
        // setCont(cont-1)
        item.pop()
        setCont((cont)=> {
            if (cont >= 1) {
                return cont - 1 
            } else {
                return 0
        }
        })
    }
    if (Ativo) {
        return (
            <div>
                    <button onClick={AddCount}>+</button>
                    <button>{cont}</button>
                    <button onClick={ExcCount}>-</button>
                    <span> Adicione ou remova items para a Lista</span>
                    <ul>{item.map((item)=> (
                        <li key={item}>{item}</li>
                    ))}
                    </ul>
            </div>
          )
    } else {
        return null
    }

}

export default Contador
