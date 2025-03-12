const API_KEY = '68202824a497437486aca6cdc0e522da';

const searchRecipes = async (searchTerm, page) => {
    if(!API_KEY) {
        throw new Error("API Key not found")
    }

    const baseURL = "https://api.spoonacular.com/recipes/complexSearch";

    const queryParams = {
        apiKey: API_KEY,
        query: searchTerm,
        number: "6",
        offset: (page - 1)* 6,
    }

    url.search = new URLSearchParams(queryParams).toString()

    try {
        const searchResponse = await fetch(url.toString());
        
    } catch (error) {
        console.log(error);
    }
};