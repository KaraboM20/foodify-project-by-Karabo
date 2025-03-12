import axios from "axios";

const API_BASE_URL = "https://api.spoonacular.com/recipes"; 
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchRecipes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY, // Add API key as a query parameter
                number: 10, // Fetch 10 recipes (optional)
            },
        });

        console.log("Fetched recipes:", response.data); // Debugging
        return response.data.results; 
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