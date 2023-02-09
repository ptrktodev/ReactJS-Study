import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  function click() {
    console.log('login')
    navigate('/sobre')
    // navigate('sobre') -> page-not-found
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={click}>Login</button>
    </div>
  )
}

export default Login
