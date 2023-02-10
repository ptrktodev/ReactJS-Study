import React from 'react'
import './Style/App-section.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Elements/Header'
import Footer from './Elements/Footer'
import PropTypes from './Elements/PropTypes'

const App = () => {
  return (
    <BrowserRouter>
      <section className="App-section">
        {' '}
        <Header />
        <Routes>
          <Route path="proptypes" element={<PropTypes />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
