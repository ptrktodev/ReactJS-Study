import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {

  const arr = ['item 1', 'item 2']

  return (
    <div>
      <p>
          <Input id='email' label="Nome:" required/>
      </p>
      <p>
          <Input id='pass' label="Senha:" type='password' required/>
      </p>
      <Button items={arr}/>
    </div>
  )
}

export default Form
