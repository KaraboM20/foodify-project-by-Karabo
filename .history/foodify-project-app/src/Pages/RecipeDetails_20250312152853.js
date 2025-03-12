import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../api/recipeApi"; 


const RecipeDetails = () => {
const { id } = useParams(); 
const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
  const loadRecipeDetails = async () => {
    try {
      if (!id) {
        console.error("No ID found");
        return;
      }

      const data = await fetchRecipeDetails(id);
      console.log("Fetched Data:", data); // Debugging

      if (!data) {
        console.error("Recipe not found!");
        return;
      }

      setRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };
  
      loadRecipeDetails();
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
