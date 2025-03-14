import React from 'react';
import { NavLink } from 'react-router-dom';
import './Favourites.css';

const Favourites = () => {
  return (
    <div>
      <h3>You </h3>
      <NavLink to='./home'><button className='notification-button'>Continue Shopping</button></NavLink>
            
    </div>
  )
}

export default Favourites