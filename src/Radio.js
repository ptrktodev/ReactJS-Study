import React from 'react'

const Radio = ({ pergunta, options, onChange, active, id, value }) => {
  if (active === false) return null
  return (
    <div className="Radio-container">
      <legend className="Radio-legend">{pergunta}</legend>
      {options.map((item) => (
        <label key={item} className="Radio-label">
          <input
            type="radio"
            id={id}
            value={item}
            checked={value === item}
            onChange={onChange}
          />
          {item}
          <br />
        </label>
      ))}
    </div>
  )
}

export default Radio
