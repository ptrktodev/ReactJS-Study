import React from 'react'

const Input = ({id, label, ...props}) => {
  return (
    <div>
      <label style={{marginRight: '10px'}} htmlFor={id}>{label}</label>
      <input id={id} type='text'{...props}/>
    </div>
)}

export default Input
