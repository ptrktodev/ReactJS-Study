import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Targaryen from './Targaryen'
import Stark from './Stark'
import Tully from './Tully'
import Lannister from './Lannister'
import TargaryenImg from '../img/tar.jpeg'
import StarkImg from '../img/stark.png'
import TullyImg from '../img/tully.png'
import LannisterImg from '../img/lan.png'
import '../Style/About.css'

const About = () => {
  return (
    <div className="About">
      <h1>Clique sobre o nome da House e descubra uma história.</h1>
      <div className="About-div1">
        <div className="About-div1-img">
          <img src={TargaryenImg} />
          <Link to="house-targaryen">House Targaryen</Link>
        </div>
        <div className="About-div1-img">
          <img src={StarkImg} />
          <Link to="house-stark">House Stark</Link>
        </div>{' '}
        <div className="About-div1-img">
          <img src={TullyImg} style={{ minWidth: '28px', width: '23%' }} />
          <Link to="house-tully">House Tully</Link>
        </div>{' '}
        <div className="About-div1-img">
          <img src={LannisterImg} />
          <Link to="house-lannister">House Lannister</Link>
        </div>
      </div>
      <div className="About-div2">
        <Routes>
          <Route path="house-targaryen" element={<Targaryen />} />
          <Route path="house-stark" element={<Stark />} />
          <Route path="house-tully" element={<Tully />} />
          <Route path="house-lannister" element={<Lannister />} />
        </Routes>
      </div>
    </div>
  )
}

export default About
