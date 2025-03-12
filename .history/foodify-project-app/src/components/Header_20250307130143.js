import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div cl>
      <nav>
        <ul>
            <li>
              <Link to='./home'>Home</Link>  
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
