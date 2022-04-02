const searchInput = document.querySelector('.search-input');

// permet de recherche les recettes qui correspondent a la saisie de la barre de recherche
searchInput.addEventListener('input', e => {
    divRecipes.innerHTML = "";
    sortIngredientsData.innerHTML = "";
    sortAppareilsData.innerHTML = "";
    sortUstensilesData.innerHTML = "";
    const value = e.target.value.toLowerCase();

    if(value.length >= 3){
        const recipeFilter = recipes.filter(word => word.name.toLowerCase().includes(value) || word.description.toLowerCase().includes(value) /* || ingredients */);
        // for ici filtre recipes et tag en meme temps
        displayRecipes(recipeFilter);
        addTag(tabIngredient(recipeFilter),tabAppareil(recipeFilter),tabUstensil(recipeFilter));
    }else{
        displayRecipes(recipes);
        addTag(Ingredient,Appareil,Ustensil);

    }
})