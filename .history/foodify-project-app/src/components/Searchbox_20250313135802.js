import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbox.css';
import React, { useState, FormEvent } from "react";
import { fetchRecipes } from '../api/recipeApi'


const Searchbox = () => {
  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { results } = await searchRecipes(searchTerm, 1);
      setRecipes(results);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className='searchbox-section'>
    <h1>Your desired dish?</h1>

      {/* {/* <div className="header_search">
              <input className="search-input" type= 'text' placeholder='Search...'/>
              <button className='search-button'><FaSearch /></button>
      </div> */}



    <h5>Search any recipe e.g burger, pizza, sandwich, toast</h5>
    </div>
  )
}

export default Searchbox
