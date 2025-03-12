import React from 'react';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../api/recipeApi"; 


const RecipeDetails = () => {
const { id } = useParams(); 
const [recipe, setRecipe] = useState(null);
  
useEffect(() => {
  const loadRecipeDetails = async () => {
    try {
      console.log("Fetching recipe for ID:", id); // Debugging
      const data = await fetchRecipeDetails(id);
      console.log("Fetched Recipe Data:", data); // Debugging
      setRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  if (id) loadRecipeDetails();
}, [id]);
  
    if (!recipe) {
      return <p>Loading recipe details...</p>;
    }
  
    return (
      <div>
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.instructions}</p>
      </div>
    );
  };
  


export default RecipeDetails
