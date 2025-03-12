import axios from "axios";

const API_BASE_URL = "https://api.spoonacular.com/recipes"; 
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchRecipes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY,
                number: 10, 
            },
        });

        console.log("Fetched recipes:", response.data); 
        return response.data.results; 
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};

export const fetchRecipeDetails = async (recipeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${recipeId}/information`, {
            params: { apiKey: API_KEY }, // Include API key
        });

        console.log("Fetched recipe details:", response.data); // Debugging
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
};