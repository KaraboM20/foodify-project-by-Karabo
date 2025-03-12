import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
            <li>
              <Link activeClassNameto='./home'>Home</Link>  
            </li>
            <li>
              <Link to='./recipelists'>RecipeLists</Link>  
            </li>  
        </ul>
      </nav>
    </header>
  )
}

export default Header
