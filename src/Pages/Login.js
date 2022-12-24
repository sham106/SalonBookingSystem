import React from 'react'
import { Link } from 'react-router-dom'
import Googleicon from '../images/google.png'

const Login = () => {
  return (
	<div className="container-login">
      <form className="form-1">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
        <span>Forgot Password</span>
		<h6 className='direct-signup'>New to us?
		<Link to={'/register'}><span>SignUp</span></Link></h6>
        <button>Login</button>
        <p>Or SignUp Using</p>
        <div className="icons">

          <a href="" target="blank"
            ><img src={Googleicon} alt="googleicon"></img></a>
        </div>
      </form>
    </div>
  )
}

export default Login
  




