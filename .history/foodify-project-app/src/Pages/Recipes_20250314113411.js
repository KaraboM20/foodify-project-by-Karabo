import React from 'react';
import { useEffect, useContext } from 'react';
import { RecipeContext } from "../context/RecipeContext";
import { fetchRecipes } from "../api/recipeApi";
import "./Recipes.css"; 

const Recipes = () => {
    const { recipes, setRecipes } = useContext(RecipeContext);

    useEffect(() => {
        const loadAllRecipes = async () => {
          const data = await fetchRecipes("");  // Fetch all recipes
          setRecipes(data);
        };
    
        if (recipes.length === 0) {
          loadAllRecipes();
        }
      }, [recipes.length, setRecipes]);
 
  return (
    <div>
      
    </div>
  )
}

export default Recipes
