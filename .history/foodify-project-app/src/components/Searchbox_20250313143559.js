import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';
import { fetchRecipes } from "../api/recipeApi";


const Searchbox = () => {
  const [query, setQuery] = useState(""); // User input
  const [recipes, setRecipes] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  
  return (
    <div className='searchbox-section'>
    <h1>Your desired dish?</h1>

     <div className="header_search">
              <input className="search-input" type= 'text' placeholder='Search...'/>
              <button className='search-button'><FaSearch /></button>
      </div> 

    <h5>Search any recipe e.g burger, pizza, sandwich, toast</h5>
    </div>
  )
}

export default Searchbox
