import React from 'react'

const Profile = () => {
  return (
    <div className='container'>
        <h3 className='profile-h3'>Welcome to your CuteSalon profile page </h3>
        <div className='Account-left'>
          <div className='profile-pic'>
            <img  alt='profile pic'></img>
          </div>
          <div className='profile-details'>
            <p><b>Name:</b> Firstname Lastname</p>
            <br/>
            <p><b>Email:</b> Firstn@gmail.com</p>
            <br/>
            <p><b>Phone:</b> +254777664521</p>
          </div>
        </div>
        <div className='Account-right'>
          <h4>Your Bookings</h4>
          <div className='book-details'>
            <h5>Service name: <span>Hair styling</span></h5>
            <h5>Price: <span>Ksh. 500</span></h5>
            <h5>Date: <span>20/12/2022</span></h5>
            <h5>Time: <span>10:30am</span></h5>
          </div>
        </div>
    </div>
  )
}

export default Profile