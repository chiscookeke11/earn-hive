import React from 'react'
import "./loginForm.css"

const LoginForm = () => {
  return (
    <form action="" className='login-form'>


         <div className='input-holder'>
    <label htmlFor="Email">Email <span className='asterisk'> *</span></label>
    <input type="email" id="Email" name="Email"  placeholder='Enter Email'/>
  </div>

  <div className='input-holder'>
    <label htmlFor="Password">Password<span className='asterisk'> *</span></label>
    <input type="password" id="Password" name="Password"  placeholder='Enter Password'/>
  </div>

  <div className='terms'>
    <input type="checkbox" id='checkbox' name='checkbox' />
    <label htmlFor="checkbox">Accept Terms and conditions</label>
  </div>


  <button disabled >
    Sign In
  </button>

 <div className='text-[#5D7186]' >
 Don't have an account?  <a href="#" className='text-[#E2AE22] font-bold'>Sign up</a>
 </div>

    </form>
  )
}

export default LoginForm