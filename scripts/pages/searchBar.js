const searchInput = document.querySelector('.search-input');

// permet de recherche les recettes qui correspondent a la saisie de la barre de recherche
searchInput.addEventListener('input', e => {
    divRecipes.innerHTML = "";
    sortIngredientsData.innerHTML = "";
    sortAppareilsData.innerHTML = "";
    sortUstensilesData.innerHTML = "";
    var value = e.target.value.toLowerCase();
    
    if(value.length >= 3){
        recipeFilter = []
        for(let i=0; i < recipes.length;i++){
            let flag = true;
            for(let j=0; j < recipes[i].ingredients.length; j++){
                if(flag){
                    if(recipes[i].ingredients[j].ingredient.toLowerCase().trim().includes(value) || recipes[i].description.toLowerCase().includes(value) || recipes[i].name.toLowerCase().includes(value)){
                        flag = false;
                        recipeFilter.push(recipes[i]) ;
                    }
                }
            }           
        }
        console.log(" recipesFilter apres for searchBAR : "+recipeFilter)
        console.log("RecipeFilter length searchBAR : "+recipeFilter.length)

        recipeFilter = recipeFilter.filter((el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && tagSelectedUstensils.every(tagUst => el.ustensils.some(ustensil => ustensil.toLowerCase().includes(tagUst)) ))

        displayRecipes(recipeFilter);
        addTag(tabIngredient(recipeFilter),tabAppareil(recipeFilter),tabUstensil(recipeFilter));
    }else{
        recipeFilter = recipes.filter((el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && tagSelectedUstensils.every(tagUst => el.ustensils.some(ustensil => ustensil.toLowerCase().includes(tagUst)) ))

        displayRecipes(recipeFilter);
        addTag(Ingredient,Appareil,Ustensil);

    }
})