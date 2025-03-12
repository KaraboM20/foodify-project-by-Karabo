import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
            <li>
              <NavLink activeClassName="active" to='./home'>Home</NavLink>  
            </li>
            <li>
              <Link activeClassName="active" to='./recipelists'>RecipeLists</Link>  
            </li>  
        </ul>
      </nav>
    </header>
  )
}

export default Header
