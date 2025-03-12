import React from 'react';
import { NavLink } from 'react-router-dom';
imp

const Favourites = () => {
  return (
    <div>
      <NavLink to='./home'><h3>Home</h3></NavLink>
      <h1>Favourites Page</h1>
    </div>
  )
}

export default Favourites
