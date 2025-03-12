import React from 'react';
import './RecipeLists.css';
import { Link } from "react-router-dom"; 


const RecipeLists = ({ recipes= [] }) => {
  
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h3>{recipe.title}</h3>
            <span>
            <Link to={`/recipelists/${recipe.id}`} className="recipe-link">View Details</Link>
            </span>
          </div>
        ))
      )}
    </div>
  );
}
  


export default RecipeLists
