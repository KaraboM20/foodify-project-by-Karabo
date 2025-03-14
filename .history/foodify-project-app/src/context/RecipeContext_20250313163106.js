import React, { createContext, useState } from "react";
import { fetchRecipes } from "../api/recipeApi"; 

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isSearching, setIsSearching] = useState(false); 

  
  const searchRecipes = async (query) => {
    try {
      setIsSearching(true);
      setRecipes([]);
      const results = await fetchRecipes(query);
      setRecipes(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } 
  };

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, isSearching, setIsSearching }}>
      {children}
    </RecipeContext.Provider>
  );
};