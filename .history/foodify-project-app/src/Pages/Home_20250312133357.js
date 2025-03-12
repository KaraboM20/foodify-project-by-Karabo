import React from 'react'
import './Home.css';
import RecipeLists from './RecipeLists';
import Searchbox from '../components/Searchbox';
import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../api/recipeApi";




const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  return (
    <>
     <Searchbox /> 
    
    <div className='menu-options'>
      <ul>
        <li>All</li>
        <li>BreakFast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Dessert</li>
      </ul>   
    </div>
    <RecipeLists />
   </> 
  )
}

export default Home
