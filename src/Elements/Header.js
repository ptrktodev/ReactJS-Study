import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Header.css'
import logo from '../img/logo.svg'

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img src={logo} />
        <h3>Sweetie</h3>
      </div>
      <div className="Header-div">
        {' '}
        <Link to="/">
          {' '}
          <button className="motion-words">Home</button>
        </Link>
        <Link to="login">
          {' '}
          <button className="motion-words">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
