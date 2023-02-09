import React from 'react'
import Loading from './Loading'
import svg1 from './svgs/loveBronk.svg'
import svg2 from './svgs/love.svg'

const After = ({ response, load }) => {
  if (response === true) {
    return (
      <div className="App-container">
        {load ? (
          <Loading />
        ) : (
          <div className="App-emoji">
            <img src={svg2} style={{ width: '60%' }} />
            <h1 style={{ fontWeight: 'bold', color: 'red', marginTop: '10px' }}>
              Acertou
            </h1>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className="App-container">
        {load ? (
          <Loading />
        ) : (
          <div className="App-emoji">
            <img src={svg1} style={{ width: '60%' }} />
            <h1 style={{ fontWeight: 'bold', color: 'red', marginTop: '10px' }}>
              Errou
            </h1>
          </div>
        )}
      </div>
    )
  }
}

export default After
