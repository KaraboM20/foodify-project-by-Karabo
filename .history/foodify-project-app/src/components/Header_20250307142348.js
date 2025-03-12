import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaRegHeart } from 'react-icons/fa';  // Import Heart icon
import { IoMdNotificationsOutline } from 'react-icons/io'; // Import Notification icon
import { IoCartOutline } from 'react-icons/io5'; // Import Cart icon

const Header = () => {
  return (
    <div className='header'>
      {/* Logo */}
        <img 
      className='header_logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP36DaEnA76M-Y2L_VyAHqiLdvUGmNwxAFUA&s' alt="Foodify logo" />

      {/* Search bar */}
      <div className="header_search">
        <input className="header_input" type= 'text' placeholder='Search...'/>
      </div>

      {/* Header-icons */}
      <div className="header_option">
          <span className='header-option1'><FaRegHeart title="Favorite" />Fva</span>
          <span className='header-option2'><IoMdNotificationsOutline title="notification"/></span>
          <span className='header-option3'><IoCartOutline title="cart"/></span>  
    </div>
  );
};

export default Header
