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
Key Fixes & Enhancements
✅ Error handling: Displays an error message if fetching fails.
✅ Loading state: Shows a proper loading message before data is ready.
✅ Null safety: Handles cases where recipe.instructions or recipe.image is missing.

Optional: Using useContext for Recipe Data

If your app stores recipes globally (e.g., in a RecipeContext), you can replace useState and useEffect with useContext(RecipeContext). Let me know if you need this setup! 🚀






You said:
this is what spponacular is saying 
Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc.

GET https://api.spoonacular.com/recipes/{id}/information
Headers
Response Headers:

Content-Type: application/json
Parameters
Name	Type	Example	Description
id	number	716429	The id of the recipe.
includeNutrition	boolean	false	Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.
addWinePairing	boolean	false	Add a wine pairing to the recipe.
addTasteData	boolean	false	Add taste data to the recipe.
Example Request and Response
GET https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

and here is my recipedetailsApi page 
import axios from "axios";

const API_BASE_URL2 = "https://api.spoonacular.com/recipes/{id}/information"; 
const API_KEY = '68202824a497437486aca6cdc0e522da';

export const fetchRecipeDetails = async (recipeId) => {
    try {
        const response = await axios.get(${API_BASE_URL2}/${recipeId}/information, {
            params: { apiKey: API_KEY }, 
        });

        console.log("Fetched recipe details:", response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
};
ChatGPT said:
Your fetchRecipeDetails function has an issue in the URL formatting. The API_BASE_URL2 already contains {id}/information, and you're appending /${recipeId}/information, which results in an incorrect URL.

Here’s how to fix it:

Fixed recipedetailsApi.js
javascript
Copy code
import axios from "axios";

const API_BASE_URL = "https://api.spoonacular.com/recipes"; 
const API_KEY = '68202824a497437486aca6cdc0e522da';

export const fetchRecipeDetails = async (recipeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${recipeId}/information`, {
            params: { apiKey: API_KEY }, 
        });

        console.log("Fetched recipe details:", response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
};







