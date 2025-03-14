import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';
import { fetchRecipes } from "../api/recipeApi";


const Searchbox = () => {
  const [query, setQuery] = useState(""); 
  const [recipes, setRecipes] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSearch = async () => {
    if (!query.trim()) return; 
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchRecipes(query); 
      setRecipes(data);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to fetch recipes. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className='searchbox-section'>
    <h1>Your desired dish?</h1>

     <div className="header_search">
        <input 
        className="search-input" 
        type= 'text' 
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-button'onClick={handleSearch}><FaSearch /></button>



      </div> 

    <h5>Search any recipe e.g burger, pizza, sandwich, toast</h5>
    </div>
  )
}

export default Searchbox
