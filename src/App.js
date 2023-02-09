import React from 'react'
import './Style/App-section.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Elements/Home'
import About from './Elements/About'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <section className="App-section">
        {' '}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/*" element={<About />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
