import React, { createContext, useState } from "react";
import { fetchRecipes } from "../api/recipeApi"; 

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  
  const searchRecipes = async (query) => {
    try {
      const results = await fetchRecipes(query);
      setRecipes(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, searchRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};