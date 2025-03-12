import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with the actual API URL

export const fetchRecipes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trending`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error; // Ensure error is handled in components
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