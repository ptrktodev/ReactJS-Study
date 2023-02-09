import React from 'react'
import '../Styles/Header.css'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  /*   const location = useLocation()

  React.useEffect(() => {
    console.log('mudou de rota')
  }, [location]) */

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {' | '}
      <NavLink to="sobre">Sobre</NavLink>
      {' | '}
      <NavLink to="login">Login</NavLink>
      {' | '}
      <NavLink to="Produtos">Produtos</NavLink>
    </nav>
  )
}

export default Header
