import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Header.css'
import logo from '../img/sale.svg'

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} />
      <div className="Header-div">
        {' '}
        <Link to="proptypes">
          {' '}
          <button className="motion-words">PropTypes</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
