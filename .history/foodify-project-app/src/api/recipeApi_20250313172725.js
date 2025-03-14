import axios from "axios";

// Fetch Recipes API
const API_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey"; 
const API_KEY = '68202824a497437486aca6cdc0e522da';

export const fetchRecipes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`, {
            params: {
                apiKey: API_KEY,
                number: 12, 
            },
        });

        console.log("Fetched recipes:", response.data); 
        return response.data.results; 
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};

