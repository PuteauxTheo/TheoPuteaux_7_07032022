/* eslint-disable no-undef */
const searchInput = document.querySelector('.search-input');

// permet de recherche les recettes qui correspondent a la saisie de la barre de recherche
searchInput.addEventListener('input', e => {
    divRecipes.innerHTML = "";
    sortIngredientsData.innerHTML = "";
    sortAppareilsData.innerHTML = "";
    sortUstensilesData.innerHTML = "";
    var value = e.target.value.toLowerCase();

    if(value.length >= 3){
        recipeFilter = recipes.filter(word => word.name.toLowerCase().includes(value) || word.description.toLowerCase().includes(value) || word.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(value)));
        recipeFilter = recipeFilter.filter((el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && tagSelectedUstensils.every(tagUst => el.ustensils.some(ustensil => ustensil.toLowerCase().includes(tagUst)) ))
        displayRecipes(recipeFilter);
        addTag(tabIngredient(recipeFilter),tabAppareil(recipeFilter),tabUstensil(recipeFilter));
    }else{
        value = "";
        recipeFilter = recipes.filter(word => word.name.toLowerCase().includes(value) || word.description.toLowerCase().includes(value) || word.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(value)));
        recipeFilter = recipeFilter.filter((el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && tagSelectedUstensils.every(tagUst => el.ustensils.some(ustensil => ustensil.toLowerCase().includes(tagUst)) ))
        displayRecipes(recipeFilter);
        addTag(Ingredient,Appareil,Ustensil);
    }
})