import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
            <li>
              <Link href='./home'>Home</Link>  
            </li>
            <li>
              <Link href='./recipelists'>RecipeLists</Link>  
            </li>  
        </ul>
      </nav>
    </header>
  )
}

export default Header
