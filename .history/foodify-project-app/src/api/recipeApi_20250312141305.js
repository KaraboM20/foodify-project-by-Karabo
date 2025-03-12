import axios from "axios";

const API_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch?"; 
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchRecipes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`, {
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
        
            params: { apiKey: API_KEY }, 
        });

        console.log("Fetched recipe details:", response.data); // Debugging
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
};