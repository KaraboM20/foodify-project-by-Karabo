import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../api/recipeApi"; 


const RecipeDetails = () => {
    const { id } = useParams(); // Get recipe ID from URL
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      const loadRecipeDetails = async () => {
        try {
          const data = await fetchRecipeDetails(id);
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
  
    </div>
  );
};

export default RecipeDetails
