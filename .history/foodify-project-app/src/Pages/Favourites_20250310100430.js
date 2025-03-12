import React from 'react';
import { Link } from 'react-router-dom';
import './Favourites.css';

const Favourites = () => {
  return (
    <div>
      <Link to='./home'><h3>Home</h3></Link>
      <h1>Favourites Page</h1>
    </div>
  )
}

export default Favourites
