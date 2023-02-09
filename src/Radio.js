import React from 'react'

const Radio = ({ pergunta, options, onChange, active, id, value, on }) => {
  if (active === false) return null
  return (
    <div className="Radio-container">
      <h1 className="Radio-legend">{pergunta}</h1>
      <div className="Radio-div">
        {options.map((item) => (
          <label key={item} className="Radio-label">
            <input
              type="checkbox"
              id={id}
              value={item}
              checked={value === item}
              onChange={onChange}
              style={{ margin: '10px' }}
              className="Radio-Input"
            />
            {item}
          </label>
        ))}
      </div>
      {on ? <p>{value}</p> : ''}
    </div>
  )
}

export default Radio
