const searchInput = document.querySelector('.search-input');

// permet de recherche les recettes qui correspondent a la saisie de la barre de recherche
searchInput.addEventListener('input', e => {
    divRecipes.innerHTML = "";
    sortIngredientsData.innerHTML = "";
    sortAppareilsData.innerHTML = "";
    sortUstensilesData.innerHTML = "";
    const value = e.target.value.toLowerCase();

    if(value.length >= 3){
        let recipeFilter = [];
        // for ici filtre recipes et tag en meme temps
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
        
        displayRecipes(recipeFilter);
        addTag(tabIngredient(recipeFilter),tabAppareil(recipeFilter),tabUstensil(recipeFilter));
    }else{
        displayRecipes(recipes);
        addTag(Ingredient,Appareil,Ustensil);

    }
})