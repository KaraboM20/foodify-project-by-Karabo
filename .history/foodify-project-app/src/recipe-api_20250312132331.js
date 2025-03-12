import axios from "axios";
const fetchRecipes = async () => {
    try {
        const response = await axios.get("https://api.example.com/trending");
        setRecipes(response.data);
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
};