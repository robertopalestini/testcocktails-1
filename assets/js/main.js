const cargarCocktails = async() => {
    try{
        const respuesta = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a&language=es-MX');
        
        console.log(respuesta);

        if(respuesta.status === 200){
            const { drinks } = await respuesta.json()
// console.log(drinks);
            let cocktails = '';

            for ( const [ index, value ] of drinks.entries()  )

                if ( index < 3 ) {
                
                cocktails += `
                    <div id=${index} class="cocktail">
                    <img class="foto" src="${value.strDrinkThumb}">
                    <img class="fotoprincipal" src="${value.strDrinkThumb}">

                    <div class="cuadrado-${index}">
                    <h3 class="nombre">${value.strDrink}</h3>
                    </div>

                        <div class="text">

                        <p class="titulo">Glass</p>
                        <p><span class="subtitulo">${value.strGlass}</span></p>

                        <p class="titulo">Category</p>
                        <p><span class="subtitulo">${value.strCategory}</span></p>

                            <div class="ingredientes">
                            <p class="titulo">Ingredients
                            <p class="ingredient-${index}">${value.strIngredient1}</p>
                            <p class="ingredient-${index}">${value.strIngredient2}</p>
                            <p class="ingredient-${index}">${value.strIngredient3}</p>
                            </p></div>

                        <p class="titulo">Instructions</p>
                        <span class="subtitulo">
                        ${value.strInstructions}</span>
                        </div>
                    </div>
                    `;
            };

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



