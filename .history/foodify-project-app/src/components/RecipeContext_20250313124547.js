import { createContext, useState, useContext } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState({}); // Store recipes by ID

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => useContext(RecipeContext);