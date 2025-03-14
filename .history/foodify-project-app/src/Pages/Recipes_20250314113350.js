import React from 'react';
import { useEffect, useContext } from 'react';
import { RecipeContext } from "../context/RecipeContext";
import { fetchRecipes } from "../api/recipeApi";
import "./Recipes.css"; 

const Recipes = () => {
 const { recipes, setRecipes } = useContext(RecipeContext);
 
  return (
    <div>
      
    </div>
  )
}

export default Recipes
