import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';

const Searchbox = () => {
  return (
    <div className='searchbox-section'>
    <h1>Your desired dish?</h1>

      <div className="header_search">
              <input className="searchinput" type= 'text' placeholder='Search...'/>
              <button className='search-button'><FaSearch /></button>
      </div>

    <h5>Search any recipe e.g burger, pizza, sandwich, toast</h5>
    </div>
  )
}

export default Searchbox
