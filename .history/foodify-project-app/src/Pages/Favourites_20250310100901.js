import React from 'react';
import { Link } from 'react-router-dom';
import './Favourites.css';

const Favourites = () => {
  return (
    <div>
      <h4>Your Favourites is e</h4>
      <Link to='./home'><h3>Home</h3></Link>
      <h1>Favourites Page</h1>
    </div>
  )
}

export default Favourites
