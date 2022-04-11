const searchInput = document.querySelector('.search-input');

// permet de recherche les recettes qui correspondent a la saisie de la barre de recherche
searchInput.addEventListener('input', e => {
    divRecipes.innerHTML = "";
    sortIngredientsData.innerHTML = "";
    sortAppareilsData.innerHTML = "";
    sortUstensilesData.innerHTML = "";
    var value = e.target.value.toLowerCase();

    if(value.length >= 3){
        recipeFilter = recipeFilter.filter(word => word.name.toLowerCase().includes(value) || word.description.toLowerCase().includes(value) || word.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(value)));
        //researchWithTag();
        displayRecipes(recipeFilter);
        addTag(tabIngredient(recipeFilter),tabAppareil(recipeFilter),tabUstensil(recipeFilter));
    }else{
        value = "";
        recipeFilter = recipeFilter.filter(word => word.name.toLowerCase().includes(value) || word.description.toLowerCase().includes(value) || word.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(value)));
        //researchWithTag();
        displayRecipes(recipeFilter);
        addTag(Ingredient,Appareil,Ustensil);

    }
})