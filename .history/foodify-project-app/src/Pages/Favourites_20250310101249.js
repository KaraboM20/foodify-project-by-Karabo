import React from 'react';
import { Link } from 'react-router-dom';
import './Favourites.css';

const Favourites = () => {
  return (
    <div>
      <h3>Your Favourites Page is Empty</h1>
      <Link to='./home'><h3>Continue Shopping</h3></Link>
      
    </div>
  )
}

export default Favourites
