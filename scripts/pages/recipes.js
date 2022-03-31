const divRecipes = document.getElementById('recipes');

//displayRecipes permet d'afficher les recettes sur la page
function displayRecipes(dataRecipes){   

    for(let i=0; i < dataRecipes.length;i++){
        const recipesModel = recipesFactory(dataRecipes[i])
        const recipesDOM = recipesModel.getRecipesDOM();
        divRecipes.appendChild(recipesDOM);
    }
}