import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Header = () => {
  return (
    <div className='header-wraper'>

      <div className='main-info'>
        <div className='container header-text'>
        <h4>CuteSalon Is Ready To Transform Your LOOKS</h4>
        <h1>Lighten Up and Enjoy </h1>
        <h1>Our Verious Service</h1>
        <p>We have  Good workers who are profesionals<br/> and have the 
          right skills to give you the exact <br/>service that you want.</p>
          <button className='explore' href="#services">Explore Our Services </button>
        <i className="bi bi-caret-down-fill"></i>
          </div>
         
       
      </div>
        

    </div>
  )
}

export default Header