const apiKey = process.env.API_KEY;

const searchRecipes = (searchTerm: string, page: number) => {
    if(!apiKey) {
        console.log("API Key not found")
    }

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const queryParams = {
        apiKey,
        query: searchTerm,
        number: "5",
        offset: (page * 5)
    }
}