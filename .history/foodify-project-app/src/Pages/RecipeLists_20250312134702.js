import React from 'react'


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
          </div>
        ))
      )}
    </div>
  );
}
  


export default RecipeLists
