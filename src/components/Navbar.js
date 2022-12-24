import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Logo from '../images/Logo.jpg'

const Navbar = () => {

  const navigate = useNavigate();
  const navigateToBook = () =>{
    navigate('/book')
  }


  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm navbar-fixed-top">
    <div className="container">
      <Link to={"/"} className="navbar-brand" ><img className='Logo' src={Logo} alt='CuteSalonLogo'></img></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link  disabled" aria-current="page" href="#">
              <i className="fa-regular fa-clock fa-2x"></i>Opening Time</a>
           <span className='time'> Mon - Sat: 8:30am - 5:30pm</span>
            
          </li>
          <li className="nav-item">
            <a className="nav-link disabled"><i className="fa-solid fa-phone fa-2x"></i>Phone Number</a>
           <span className='phone'> +254795463210 </span>
          </li>
          <li className='nav-item'>
          <button onClick={navigateToBook} className="nav-link book-now active bg-pink" aria-current="page" href="#">Book Now</button>

          </li>
        </ul>
        
      </div>
     
    </div>

    
    <hr/>
  </nav>
  
  
  
  )
}

export default Navbar