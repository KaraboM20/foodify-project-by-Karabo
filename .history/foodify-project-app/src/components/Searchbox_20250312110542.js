import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';

const Searchbox = () => {
  return (
    <div>
        <h1></h1>
      <div className="header_search">
              <input className="header_input" type= 'text' placeholder='Search...'/>
              <button className='search-button'><FaSearch /></button>
            </div>
    </div>
  )
}

export default Searchbox
