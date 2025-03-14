import React from 'react';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../api/recipedetailsApi"; 


const RecipeDetails = () => {
  const { id } = useParams(); 
  console.log("Recipe ID:", id);

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadRecipeDetails = async () => {
      try {
        console.log("Fetching recipe for ID:", id); 
        const data = await fetchRecipeDetails(id);
        console.log("Fetched Recipe Data:", data);
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setError("Failed to load recipe details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) loadRecipeDetails();
  }, [id]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!recipe) {
    return <p>No recipe details available.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
      <h2>Instructions</h2>
      {recipe.instructions ? (
        <p>{recipe.instructions}</p>
      ) : (
        <p>No instructions available.</p>
      )}
    </div>
  );
};

export default RecipeDetails;
