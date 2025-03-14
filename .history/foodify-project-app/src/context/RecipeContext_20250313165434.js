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
    } finally {
      setIsSearching(false); 
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, isSearching, setIsSearching, searchRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};