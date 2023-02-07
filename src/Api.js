import React from 'react'
import { GlobalContext } from './Global'
import './css/Api.css'
import SvgCat from './SvgCat'

const Api = () => {
  const global = React.useContext(GlobalContext)

  if (global.dados === null) {
    return null
  } else {
    return (
      <div className="Api-container">
        <h1>Nomes de personagens Star Wars</h1>
        <ul className="Api-ul">
          {global.dados.map((el) => (
            <li key={el} className="Api-li">
              {el}
            </li>
          ))}
        </ul>
        <SvgCat width="60px" height="60px" />
      </div>
    )
  }
}
export default Api
