import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';

const Searchbox = () => {
  return (
    <div>
    <h1>Your desired dish?</h1>
      <div className="header_search">
              <input className="header_input" type= 'text' placeholder='Search...'/>
              <button className='search-button'><FaSearch /></button>
            </div>
    <h5>Search any recipe e.g burger</h5>
    </div>
  )
}

export default Searchbox
