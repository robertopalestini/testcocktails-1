import axios from "axios";

export const cocktailsService = {
    getCocktails
}

async function getCocktails() {
    return await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    
}

