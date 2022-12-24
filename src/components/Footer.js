import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">

    <div className="container text-center text-md-left">
  
      <div className="row text-center text-md-left">
  
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">CuteSalon</h5>
          <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            ital consectetur lorem ipsum dolor sit amet adipisicing elit.</p>
          
        </div>
  
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Services</h5>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}> TheProviders</a>
        </p>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}> Creativity</a>
        </p>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}> SourceFiles</a>
        </p>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}> bootstrap 5 alpha</a>
        </p>
  
        </div>
  
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}> Your Account</a>
        </p>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}> Become an Affiliates</a>
        </p>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}>Shipping Rates</a>
        </p>
        <p>
          <a href="#" className="text-white" style={{textDecoration:"none"}}> Help</a>
        </p>
        </div>
  
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning" >Contact</h5>
          <p>
            <i className="fas fa-home mr-3"></i>Bungoma, nyaki street, Kenya
          </p>
          <p>
            <i className="fas fa-envelope mr-3"></i>cutesalon@gmail.com
          </p>
          <p>
            <i className="fas fa-phone mr-3"></i>+254795463210
          </p>
        </div>
        
      </div>
  
      <hr className="mb-4"></hr>
  
      <div className="row align-items-center">
  
        <div className="col-md-7 col-lg-8">
          <p>	Copyright ©2020 All rights reserved by:
            <a href="#" style={{textDecoration:"none"}}>
              <strong className="text-warning">The Providers</strong>
            </a></p>
          
        </div>
  
        <div className="col-md-5 col-lg-4">
          <div className="text-center text-md-right">
  
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{fontSize:"23px"}}><i className="fab fa-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{fontSize:"23px"}}><i className="fab fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-google-plus"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-youtube"></i></a>
              </li>
            </ul>
            
          </div>
          
        </div>
        
      </div>
  
    </div>
    
  </footer>
  
  )
}

export default Footer