import React from 'react'
import { NavLink } from 'react-router-dom'
import './Notifications.css';

const Notifications = () => {
  return (
    <div>
      <h3>You currently dont have Notifications</h3>
      <NavLink to='./home'><button className='notification-button'>Continue Shopping</button></Link>
      
    </div>
  )
}

export default Notifications