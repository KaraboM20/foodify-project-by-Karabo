import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';

const Searchbox = () => {
  return (
    <div className='searchbox-section'>
    <p>Your desired dish?</p>

      <div className="header_search">
              <input className="header_input" type= 'text' placeholder='Search...'/>
              <button className='search-button'><FaSearch /></button>
            </div>

    <h5>Search any recipe e.g burger, pizza, sandwich, toast</h5>
    </div>
  )
}

export default Searchbox
