import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
            <li>
              <Link href='./home'>Home</link>  
            </li>
            <li>
              <a href='./recipelists'>RecipeLists</a>  
            </li>  
        </ul>
      </nav>
    </header>
  )
}

export default Header
