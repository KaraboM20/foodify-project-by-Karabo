import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../api"; 


const RecipeDetails = () => {
  const { id } = useParams(); // Extracts recipeId from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
      } catch (err) {
        setError("Failed to fetch recipe details");
      } finally {
        setLoading(false);
      }
    };

    getRecipeDetails();
  }, [id]);

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div style={{ padding: "20px" }}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} style={{ width: "300px", borderRadius: "10px" }} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
      
    </div>
  )
}

export default RecipeDetails
