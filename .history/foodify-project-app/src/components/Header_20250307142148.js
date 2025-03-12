import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <div className='header'>
        <img 
      className='header_logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP36DaEnA76M-Y2L_VyAHqiLdvUGmNwxAFUA&s' alt="Foodify logo" />
      
      <div className="header_search">
        <input className="header_input" type= 'text' placeholder='Search...'/>
      </div>

      <div className="header_option">
          <span className='header-option1'><FaRegHeart title="Favorite" />Fva</span>
          <span className='header-option2'><IoMdNotificationsOutline title="notification"/></span>
          <span className='header-option3'><IoCartOutline title="cart"/></span>  
    </div>
  );
};

export default Header
