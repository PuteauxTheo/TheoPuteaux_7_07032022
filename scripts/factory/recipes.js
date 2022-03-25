function recipesFactory(data){

    const { id, name, servings, ingredients, time, description, appliance, ustensils} = data ;
    const timerPATH = `assets/clocktimer.png`;

    function getRecipesDOM(){
        const article = document.createElement('article');
        const divIMG = document.createElement('div');
        divIMG.className = "img-recipes";
        const divData = document.createElement('div');
        divData.className = "recipes-data";
        article.appendChild(divIMG);
        article.appendChild(divData);
        const divTitle = document.createElement('div');
        divTitle.className = "recipes-title"
        const titleRecipe = document.createElement('h2');
        titleRecipe.textContent = name;
        const timeRecipe = document.createElement('div');
        timeRecipe.className = " recipes-timer";
        const timer = document.createElement('div');
        const timerIMG = document.createElement('img')
        const timerText = document.createElement('p')
        timerIMG.setAttribute("src",timerPATH)
        timerText.textContent = time+" min";
        timer.appendChild(timerIMG);
        timeRecipe.appendChild(timer);
        timeRecipe.appendChild(timerText);
        divTitle.appendChild(titleRecipe);
        divTitle.appendChild(timeRecipe);
        divData.appendChild(divTitle);
        const divContent = document.createElement('div');
        divContent.className = "recipes-content";
        divData.appendChild(divContent);
        const divIngredients = document.createElement('div');
        divIngredients.className = "content-ingredients";
        ingredients.forEach( ing => {
            divIngredients.appendChild(getIngredientsInfo(ing));
        })
        const divDescription = document.createElement('div');
        divDescription.className = "content-description";
        divDescription.textContent = description;
        divContent.appendChild(divIngredients);
        divContent.appendChild(divDescription);
        divData.appendChild(divContent);

        return (article);
    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipesDOM}
}


// getIngredientsInfo permet de mettre dans une div un ingredients complet avec sa quantite et son unite  
function getIngredientsInfo(el){    

    let ingredient = ""
    let quantity = ""
    let unit = ""
    if(el.ingredient !== undefined){
        ingredient = el.ingredient
    }
    if(el.quantity !== undefined) {
        quantity = " : "+el.quantity
    }
    
    if(el.unit !== undefined) {
        unit = el.unit
    }

    const div = document.createElement('div')
    div.textContent = ingredient+quantity+" "+unit

    return (div);  
    
};

