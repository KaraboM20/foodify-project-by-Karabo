import React from 'react';
import { Link } from 'react-router-dom';
import 

const Header = () => {
  return (
    <header>
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
