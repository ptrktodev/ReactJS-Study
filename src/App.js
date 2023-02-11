import React from 'react'
import './Style/App-section.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Elements/Header'
import Footer from './Elements/Footer'
import Home from './Elements/Home'
import Login from './Elements/Login'

const App = () => {
  return (
    <BrowserRouter>
      <section className="App-section">
        {' '}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
