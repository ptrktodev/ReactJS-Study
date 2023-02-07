import React from 'react'
import {GlobalContext} from './Global'


const Api = () => {


    const global = React.useContext(GlobalContext)



    if (global.dados === null) {
        return  null
    } else {
        return (
        <div> 
            <ul>
                {global.dados.map(el => <li key={el}>{el}</li>)}
            </ul>
        </div>
        )
    }

    
        }
export default Api
