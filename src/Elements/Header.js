import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Header.css'
import logo from '../img/got.png'

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} />
      <div>
        {' '}
        <Link to="/">
          {' '}
          <span className="motion-words">Home</span>
        </Link>
        {' | '}
        <Link to="about">
          {' '}
          <span className="motion-words">Houses</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
