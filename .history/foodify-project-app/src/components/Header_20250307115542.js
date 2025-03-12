import React from 'react'
import {Link}

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
            <li>
              <a href='./home'>Home</a>  
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
