import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    
<div className="nav-scroller bg-light shadow-sm ml-auto navbar-expand-lg">
<div className='container' >
  <nav className="nav nav-underline navbar-fixed-top "  aria-label="Secondary navigation navbar-fixed-top">
   <ul className='navbar-nav2 ms-auto mb-2 mb-lg-0 .flex-row'>
    
    <Link to={"/services"} class="nav-link" >Our Services</Link>
    <Link to={"/register"} class="nav-link" href="#">Register</Link>
    <Link to={"/login"} className="nav-link nav-login" >Login</Link>
    <a class="nav-link" href="#"></a>
   </ul>
  </nav>
</div>
</div>
  )
}

export default Navbar2