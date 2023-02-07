import React from 'react'
import './css/App.css'
import Footer from './Footer'
import { globalStorage } from './Global'
import Interface from './Interface'
import Main from './Main'

const App = () => {
  return (
    <globalStorage>
      <header className="App-container">
        <Interface />
        <Main />
        <Footer />
      </header>
    </globalStorage>
  )
}

export default App
