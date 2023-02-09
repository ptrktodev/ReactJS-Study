import React from 'react'
import Loading from './Loading'
import svg1 from './svgs/loveBronk.svg'
import svg2 from './svgs/love.svg'
import Trybutton from './Trybutton'

const After = ({ response, load, lengthRes }) => {
  if (response === true) {
    return (
      <div className="App-container">
        {load ? (
          <Loading />
        ) : (
          <div className="App-emoji">
            <img src={svg2} style={{ width: '60%' }} />
            <h1
              style={{ fontWeight: 'bold', color: 'green', marginTop: '10px' }}
            >
              Acertou todas!
            </h1>
          </div>
        )}
      </div>
    )
  } else {
    console.log('2', lengthRes)
    return (
      <div className="App-container">
        {load ? (
          <Loading />
        ) : (
          <div className="App-emoji">
            <img src={svg1} style={{ width: '40%' }} />
            {lengthRes.length - 1 < 1 ? (
              <h2
                style={{ fontWeight: 'bold', color: 'red', marginTop: '10px' }}
              >
                Nenhuma correta
              </h2>
            ) : (
              <h2
                style={{ fontWeight: 'bold', color: 'red', marginTop: '10px' }}
              >
                Apenas <b>{lengthRes.length}</b> correta.
              </h2>
            )}
            <Trybutton />
          </div>
        )}
      </div>
    )
  }
}

export default After
