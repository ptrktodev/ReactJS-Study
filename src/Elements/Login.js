import React from 'react'
import '../Style/Card.css'
import Button from './Button'

const Login = () => {
  return (
    <div class="card">
      <h2>Login</h2>
      <div className="card-dados">
        <div class="input-group">
          <label class="label">Email address</label>
          <input
            autocomplete="off"
            name="Email"
            id="Email"
            class="input"
            type="email"
          />
          <div></div>
        </div>
        <div class="input-group">
          <label class="label">Password</label>
          <input
            autocomplete="off"
            name="Email"
            id="Email"
            class="input"
            type="email"
          />
          <div className="card-dados-pass"> Forgot password?</div>
        </div>
        <div className="card-dados-reg">or Create register</div>
        <Button />
      </div>
    </div>
  )
}

export default Login
