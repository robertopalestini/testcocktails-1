const cargarCocktails = async() => {
    try{
        const respuesta = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a&language=es-MX');
        
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let cocktails = '';

            datos.drinks.forEach(cocktail => {
                cocktails += `
                    <div class="cocktail">
                    <img class="foto" src="${cocktail.strDrinkThumb}">

                    <div class="cuadrado">
                    <h3 class="nombre">${cocktail.strDrink}</h3>
                    </div>

                        <div class="text">

                        <p class="titulo">Glass</p>
                        <p><span class="subtitulo">${cocktail.strGlass}</span></p>

                        <p class="titulo">Category</p>
                        <p><span class="subtitulo">${cocktail.strCategory}</span></p>

                            <div class="ingredientes">
                            <p class="titulo">Ingredients
                            <p class="ingredient">${cocktail.strIngredient1}</p>
                            <p class="ingredient">${cocktail.strIngredient2}</p>
                            <p class="ingredient">${cocktail.strIngredient3}</p>
                            </p></div>

                        <p class="titulo">Instructions</p>
                        <span class="subtitulo">
                        ${cocktail.strInstructions}</span>
                        </div>
                    </div>
                    `;
            });

            document.getElementById('contenedor').innerHTML = cocktails;
            
        } else if(respuesta.status === 401){
            console.log('Error 401, pusiste mal la llave');
        } else if(respuesta.status === 404){
            console.log('el cocktail que buscas no existe')
        } else {
            console.log('error innesperado');
        }
        
    }
    catch(error) {
        console.log(error);
    }
}
cargarCocktails();
