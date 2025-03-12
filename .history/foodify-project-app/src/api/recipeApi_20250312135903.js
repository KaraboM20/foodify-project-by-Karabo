import axios from "axios";

const API_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"; 

export const fetchRecipes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data.recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};

export const fetchRecipeDetails = async (recipeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recipes/${recipeId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
};