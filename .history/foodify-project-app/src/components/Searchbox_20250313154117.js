import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';
import { useState, useContext } from "react";
import { fetchRecipes } from "../api/recipeApi";
import { RecipeContext } from "../context/RecipeContext";


const Searchbox = () => {
  const { recipes, setRecipes } = useContext(RecipeContext); 
  const [query, setQuery] = useState(""); 
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

    {/* Loading and Error Handling */}
    {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      Display Recipes
      <div className="recipe-results">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))
        ) : (
          !loading && <p>No recipes found. Try a different search!</p>
        )}
      </div>
    </div>
  );
};

export default Searchbox
