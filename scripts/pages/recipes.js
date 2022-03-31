const divRecipes = document.getElementById('recipes');

//displayRecipes permet d'afficher les recettes sur la page
function displayRecipes(dataRecipes){

    dataRecipes.forEach( el => {
        const recipesModel = recipesFactory(el)
        const recipesDOM = recipesModel.getRecipesDOM();
        divRecipes.appendChild(recipesDOM);
    })   
}