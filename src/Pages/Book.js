import React from 'react'

const Book = () => {
  return (
    <div className='booknow'>
      <div className='container '>
        <div className='show-complete'>
          <h5>1.Service</h5>
          <div className=' display-color'></div>
          <h5>2.Details</h5>
          <div className='display-color'></div>
          <h5>3.Time</h5>
          <div className='display-color'></div>
          <h5>4.Payment</h5>
          <div className='display-color'></div>
          <h5>5.Done</h5>
          <div className='display-color'></div>
        </div>

        <div className='book-services'>
          <div className='select-category'>
            <label for="salon-services" className='book-labels'> Services:</label>
            <form>
              <select className='salon-services' id="salon-services">
                <option>Hair styling</option>
                <option>Nail care</option>
                <option>body massage</option>
                <option>facials and skin care</option>
                <option>treatements</option>
              </select>
            </form>
            <button className='services-btn'>NEXT</button>
          </div>
          <div className='enter-details'>
          <label for="salon-services" className='book-labels'> Enter your details:</label>
            <form>
              <label>First Name</label>
              <input type='text'></input>
              <label>Last Name</label>
              <input type='text'></input>
              <label>email</label>
              <input type='email'></input>
              <label>First Name</label>
              <input type='text'></input>
            </form>
            <button className='services-btn'>NEXT</button>
          </div>
          <div className='select-date'>
          <label for="salon-services" className='book-labels'> Enter date :</label>
            <form className='selectd'>
              <label>
                <input type='date'></input>
              </label>
            </form>
            <button className='services-btn'>NEXT</button>

          </div>
          <div className='make-payment'>
          </div>
        </div>       
      </div>
    </div>
    
  )
}

export default Book