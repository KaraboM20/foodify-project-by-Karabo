const apiKey = process.env.API_KEY;

exportconst searchRecipes = async (searchTerm: string, page: number) => {
    if(!apiKey) {
        console.error("API Key not found")
    }

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const queryParams = {
        apiKey,
        query: searchTerm,
        number: "6",
        offset: (page * 6).toString()
    }

    url.search = new URLSearchParams(queryParams).toString()

    try {
        const searchResponse = await fetch(url);
        const resultJson = await searchResponse.json();
        return resultJson;
    } catch (error) {
        console.log(error);
    }
};