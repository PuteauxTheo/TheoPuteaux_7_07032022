const divRecipes = document.getElementById('recipes');

//displayRecipes permet d'afficher les recettes sur la page
function displayRecipes(dataRecipes){

    dataRecipes.forEach( el => {
        const a = recipesFactory(el)
        const recipesDOM = a.getRecipesDOM();
        divRecipes.appendChild(recipesDOM);
    })   
}