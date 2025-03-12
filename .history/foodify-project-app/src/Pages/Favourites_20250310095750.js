import React from 'react';
import { NavLink } from 'react-router-dom';
import './Favourites.css';

const Favourites = () => {
  return (
    <div>
      <NavLink to='./home' exact ><h3>Home</h3></NavLink>
      <h1>Favourites Page</h1>
    </div>
  )
}

export default Favourites
