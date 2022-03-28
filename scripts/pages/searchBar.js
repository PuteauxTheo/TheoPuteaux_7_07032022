const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', e => {
    divRecipes.innerHTML = "";
    sortIngredientsData.innerHTML = "";
    sortAppareilsData.innerHTML = "";
    sortUstensilesData.innerHTML = "";
    const value = e.target.value.toLowerCase();
    console.log(" length "+value.length)
    if(value.length >= 3){
        const recipeFilter = recipes.filter(word => word.name.toLowerCase().includes(value) || word.description.toLowerCase().includes(value) /* || ingredients */);
        //const IngredientFilter = Ingredient.filter( word => word.toLowerCase().includes(value))
        displayRecipes(recipeFilter);
        addTag(tabIngredient(recipeFilter),tabAppareil(recipeFilter),tabUstensil(recipeFilter));
    }else{
        displayRecipes(recipes);
        addTag(Ingredient,Appareil,Ustensil);

    }
})