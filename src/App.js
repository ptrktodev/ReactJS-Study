import React from 'react'
import './css/App.css'
import { GlobalStorage } from './Global'
import Produto from './Produto'
import Api from './Api'
import Image from './Image'

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Api />
      <Image />
    </GlobalStorage>
  )
}

export default App
