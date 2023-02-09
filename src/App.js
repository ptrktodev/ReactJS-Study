import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Elements/Home'
import Sobre from './Elements/Sobre'
import Header from './Elements/Header'
import Footer from './Elements/Footer'
import Notfound from './Elements/Notfound'
import Login from './Elements/Login'
import Produto from './Elements/Produto'
import Produtos from './Elements/Produtos'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="produtos/produto/:id/*" element={<Produto />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
