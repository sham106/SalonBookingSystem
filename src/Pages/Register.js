import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLogo from "../images/google.png"

const Register = () => {
  return (
    <div id="login-box">
    <div className="left">
      <h1>Sign up</h1>
      
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="password2" placeholder="Retype password" />
      
      <input type="submit" name="signup_submit" value="Sign me up" />
    </div>
    
    <div className="right">
      <span className="loginwith">Sign in with<br />social network</span>
{/*      
      <button className="social-signin facebook">Log in with facebook</button>
      <button className="social-signin twitter">Log in with Twitter</button> */}
      <button className="social-signin google"><img className='googleLogo' src={GoogleLogo}/>Log in with Google+</button>
      <h5 style={{
        fontSize:"1.rem",
        fontFamily:"cursive"
      }}>Already have an account?<Link to={"/login"} style={{
        textDecoration:"none",
        fontSize:"1rem",
        fontFamily:"fantasy",
        paddingLeft:"0.5rem"
        }}>Login</Link> </h5>
    </div>
    <div className="or">OR</div>
  </div>
  )
}

export default Register