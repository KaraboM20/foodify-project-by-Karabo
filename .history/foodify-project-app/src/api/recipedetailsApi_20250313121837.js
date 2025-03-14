import axios from "axios";

const API_BASE_URL2 = "https://api.spoonacular.com/recipes/{id}/information"; 
const API_KEY = '68202824a497437486aca6cdc0e522da';

export const fetchRecipeDetails = async (recipeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${recipeId}/information`, {
            params: { apiKey: API_KEY }, 
        });

        console.log("Fetched recipe details:", response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
};