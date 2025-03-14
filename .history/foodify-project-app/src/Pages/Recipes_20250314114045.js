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
      <div className="recipes-container">
      <h2>All Recipes</h2>
      <div className="recipes-list">
        {recipes.length === 0 ? (
          <p>Loading recipes...</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <h3>{recipe.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Recipes
