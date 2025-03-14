import React from 'react';
import { useContext, useEffect } from 'react';
import './RecipeLists.css';
import { Link } from "react-router-dom"; 
import { FaRegHeart } from 'react-icons/fa'; 
import { RecipeContext } from '../context/RecipeContext';
import { fetchRecipes } from '../api/recipeApi';

const RecipeLists = () => {
  const { recipes, setRecipes, isSearching } = useContext(RecipeContext);

  useEffect(() => {
    const loadRecipes = async () => {
      if
      const data = await fetchRecipes("popular"); 
      setRecipes(data);
    };

    if (!isSearching && recipes.length === 0) {
      loadRecipes(); 
    }
  }, [isSearching, recipes, setRecipes]);

  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes found. Try searching for a dish above.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h3>{recipe.title}</h3>
            <span className='recipe-icons'>
            <Link to={`/recipe/${recipe.id}`}>
            <button className="recipe-link">View Details</button>
            </Link>
            <Link to='/favourites' className="recipe-icon">
            <FaRegHeart  />
            </Link>
            </span>
          </div>
        ))
      )}
    </div>
  );
}
  


export default RecipeLists
