const divRecipes = document.getElementById('recipes');

function displayRecipes(dataRecipes){

    dataRecipes.forEach( el => {
        const a = recipesFactory(el)
        const recipesDOM = a.getRecipesDOM();
        divRecipes.appendChild(recipesDOM);
    })   
}