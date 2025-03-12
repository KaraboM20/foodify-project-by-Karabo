const apiKey = process.env.API_KEY;

const searchRecipes = (searchTerm: String, page:number) => {
    if(!apiKey) {
        console.log("API Key not found")
    }

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const queryParams
}