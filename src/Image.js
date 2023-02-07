import React from 'react'
import './css/Image.css'
import svg1 from './img-svg/reactjs.svg'
import foto1 from './img-svg/hands-piano.jpg'

const Image = () => {
  return (
    <div className="Image-container">
      <h1>Imagens</h1>
      <img src={foto1} />
      <img src={svg1} />
    </div>
  )
}

export default Image
