import React from 'react'
import {Link} from 'react-router-dom'

const Notifications = () => {
  return (
    <div>
      <h3>You currently dont have Notifications</h3>
      <Link to='./home'><button className='Notification'>Continue Shopping</button></Link>
      
    </div>
  )
}

export default Notifications
