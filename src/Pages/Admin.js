import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EditPic from '../images/edit.png';
import plus1Pic from '../images/plus1.png';

const Admin = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='adminArea'>
      <div className='mainMenu'>
        <div className='Authentication'>
          <h6 className='authe'>Authentication</h6>
          <span>
            <h6>Users</h6>
            <div className='adminicons'>
              <h6 onClick={()=>setShow(true)} className='adminadd'><img src={plus1Pic}></img> Add</h6>
              <h6 className='adminedit'><img src={EditPic}></img>edit</h6>
            </div>
          </span>

        </div>
        <div className='operations'>
          <h6 className='authe'>CuteSalon</h6>
          <span>
            <h6>categories</h6>
            <div className='adminicons'>
              <h6 className='adminadd'><img src={plus1Pic}></img> Add</h6>
              <h6 className='adminedit'><img src={EditPic}></img>edit</h6>
            </div>
          </span>
          <span>
            <h6>Services</h6>
            <div className='adminicons'>
              <h6 className='adminadd'><img src={plus1Pic}></img> Add</h6>
              <h6 className='adminedit'><img src={EditPic}></img>edit</h6>
            </div>
          </span>
          <span>
            <h6>Bookings</h6>
            <div className='adminicons'>
              <h6 className='adminadd'><img src={plus1Pic}></img> Add</h6>
              <h6 className='adminedit'><img src={EditPic}></img>edit</h6>
            </div>
          </span>

        </div>
      </div>
      <div className='adminRightSide'>
        {
        show?<div  className='addUserForm'>
          <form>
            <label>Username</label>
            <input type='text' required></input>
            <label for='email'>Email</label>
            <input type='text'></input>
            <label for='password'>Password</label>
            <input type='password'></input>
            <button className='adminaddbtn' onClick={()=>setShow(false)}>Add</button>
          </form>
        </div>:null
        }
        <div hidden className='addcategory'>
          <form>
            <label for='category'>Category</label>
            <input type='text'></input>
          </form>
          <button className='adminaddbtn'>Add</button>
        </div>
        <div hidden className='addService'>
          <form>
            <label>Service name</label>
            <input type='text'></input>
            <label>Slots Per Day</label>
            <input type='text'></input>
            <label>Price</label>
            <input type='text'></input>
            <label>Picture</label>
            <input></input>
          </form>
          <button className='adminaddbtn'>Add</button>
        </div>
      </div>
      <div className='admin-center-area'>
        <div className='display-user'>
          <table id="customer-table" cellspacing="0" style={{ padding: '10px', borderRadius: '20px' }}>
            <thead style={{ width: "100%" }}>
              <th >Username</th>
              <th >Email</th>
              <th >Password</th>
            </thead>
            <tbody id="customer-project-table"></tbody>
          </table>
        </div>
        <div className='display-categories'>
          <table id="customer-table" cellspacing="0" style={{ padding: '10px', borderRadius: '20px' }}>
            <thead style={{ width: "100%" }}>
              <th >Category Name</th>
            </thead>
            <tbody id="customer-project-table"></tbody>
          </table>
        </div>
        <div className='display-services'>
        <table id="customer-table" cellspacing="0" style={{ padding: '10px', borderRadius: '20px' }}>
            <thead style={{ width: "100%" }}>
              <th >Service name</th>
              <th >slots per day</th>
              <th >Price</th>
              <th >Picture</th>
            </thead>
            <tbody id="customer-project-table"></tbody>
          </table>
        </div>
        <div className='display-bookings'>
        <table id="customer-table" cellspacing="0" style={{ padding: '10px', borderRadius: '20px' }}>
            <thead style={{ width: "100%" }}>
              <th >Customer name</th>
              <th >Email</th>
              <th >Phone</th>
              <th >Service</th>
              <th >Date</th>
              <th >Time</th>
              <th >Location</th>
              <th >Amount</th>
            </thead>
            <tbody id="customer-project-table"></tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Admin