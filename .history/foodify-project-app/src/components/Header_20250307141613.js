import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaRegHeart } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className='header'>
      <nav>
        {/* <ul>
            <li>
              <NavLink activeClassName="active" to='./home'>Home</NavLink>  
            </li>
            <li>
              <NavLink activeClassName="active" to='./recipelists'>RecipeLists</NavLink>  
            </li>  
        </ul> */}
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
      </nav>
    </header>
  )
}

export default Header
