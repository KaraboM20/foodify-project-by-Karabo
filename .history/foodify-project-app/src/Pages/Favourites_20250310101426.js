import React from 'react';
import { Link } from 'react-router-dom';
import './Favourites.css';

const Favourites = () => {
  return (
    <div>
      <h3>Your Favourites Page is Empty</h3>
      <Link to='./home'><button><h3>Continue Shopping</button></Link>
      
    </div>
  )
}

export default Favourites
