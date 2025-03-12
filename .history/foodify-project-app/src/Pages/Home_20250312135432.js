import React from 'react'
import './Home.css';
import RecipeLists from './RecipeLists';
import Searchbox from '../components/Searchbox';
import { useState, useEffect } from "react";
import { fetchRecipes } from "../api/recipeApi";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();

        setRecipes(data); 
      } catch (err) {
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

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
    <RecipeLists recipes={recipes} />
   </> 
  )
}

export default Home
