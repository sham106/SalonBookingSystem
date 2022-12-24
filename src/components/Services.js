import React from 'react'

const services = () => {
  return (
    <div className='container services-display' id='services'>
      <div className="col-lg-4 shadow-sm" id="col-lg-4 ">
        
        <img src={require('../images/hair.jpeg')} alt="hair style1"/>
        <div className='box-element p-2 services'>
        <h5 style={{
          fontSize:"1.3rem",
          color:"green",
          fontFamily:"",
          fontStyle:"italic"
        }}>Slots available <span style={{
          paddingLeft:"1rem",
          backgroundColor:"pink",
          color:"black",
          textAlign:"center",
          width:"3rem",
          borderRadius:"2rem",
          padding:"0.2rem"
          
        }}>4</span></h5>
       
        <h4 style={{paddingLeft:"5rem", color:"GrayText",fontSize:"1.5rem"}}>ksh.500</h4>
        </div>
        <div>
        <h4 style={{color: "blue", fontStyle:"revert", display:"block",
        fontFamily:"fantasy", alignItems:"center", textAlign:"center"}}>Service name</h4>

        </div>
        
    </div>
    
   
</div>



    
  )
}

export default services