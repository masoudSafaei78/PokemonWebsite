import React from 'react'
import '../../Styles/SignUpStyle.css'

function SignUp() {
    return (
<div class='container'>
  <div class='window'>
    <div class='overlay'></div>
    <div class='content'>
      <div class='welcome'>Hello There!</div>
      <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>
      <div class='input-fields'>
        <input type='text' placeholder='Username' class='input-line full-width'></input>
        <input type='email' placeholder='Email' class='input-line full-width'></input>
        <input type='password' placeholder='Password' class='input-line full-width'></input>

      </div>
      <div class='spacing'>or continue with <span class='highlight'>Facebook</span></div>
      <div><button class='ghost-round full-width'>Create Account</button></div>
    </div>
  </div>
</div>
    )
}

export default SignUp
