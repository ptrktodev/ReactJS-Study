import React from 'react'
import './Style/App-section.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Elements/Home'
import Produto from './Elements/Produto'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <section className="App-section">
        {' '}
        <Header />
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="produto/:id" element={<Produto />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
