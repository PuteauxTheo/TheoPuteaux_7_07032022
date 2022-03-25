const ingredients =  document.querySelector(".sort-ingredients");

let tabDataAppareil = [];
let tabDataUstensil = [];


console.log(" tab ustensil "+tabDataUstensil)
// for(let y =0; y < recipes.length; y++){
//     for(let i =0;i < recipes[y].ingredients.length;i++){
        
//         tabIngredients.push(recipes[y].ingredients[i].ingredient) 
//         // console.log(" tab a chaque fois "+tabIngredients)

//     }
// }

// tabDataTag permet de creer les tableaux pour les filtres 

/*  voir si creer les tags au chargement de la page pas plus interessant */
function tabIngredient(data){
    let tabDataIngredients = [];

    data.forEach( el => {
        el.ingredients.forEach( ing => {
            tabDataIngredients.push(ing.ingredient.toLowerCase())
        })
    })
    console.log(" tab data filter "+tabDataIngredients.filter(isUniqueValue))
    return (tabDataIngredients.filter(isUniqueValue))
}

let Ingredient = tabIngredient(recipes);

function tabAppareil(data){
     let tabDataAppareils = []
    data.forEach( el => {
            tabDataAppareils.push(el.appliance.toLowerCase())
    })
    return (tabDataAppareils.filter(isUniqueValue))
}

let Appareil = tabAppareil(recipes);

function tabUstensil(data){
    let tabDataUstensils = []
    data.forEach( el => {
        el.ustensils.forEach( ust => {
            tabDataUstensils.push(ust.toLowerCase())
        })
        
    })
    return (tabDataUstensils.filter(isUniqueValue))
}

let Ustensil = tabUstensil(recipes);

// filterTab permet d'enlever les doublons 
function isUniqueValue(ele, pos, tagTab){
        return tagTab.indexOf(ele) === pos;
}


// TAG 

// INGREDIENT LIST

const sortIngredientsClose = document.querySelector('.sort-ingredients-close');
const sortIngredientsOpen = document.querySelector('.sort-ingredients-open');
const sortIngredientsData = document.querySelector('.sort-ingredients-data');

sortIngredientsClose.addEventListener('click', () =>{

    sortIngredientsClose.style.display = "none";
    sortIngredientsOpen.style.display = "flex";
    sortIngredientsData.style.display = "grid";
})

sortIngredientsOpen.addEventListener('click', () => {
    sortIngredientsClose.style.display = "flex";
    sortIngredientsOpen.style.display = "none";
    sortIngredientsData.style.display = "none";
})

// APPAREIL LIST 

const sortAppareilsClose = document.querySelector('.sort-appareils-close');
const sortAppareilsOpen = document.querySelector('.sort-appareils-open');
const sortAppareilsData = document.querySelector('.sort-appareils-data');

sortAppareilsClose.addEventListener('click', () =>{

    sortAppareilsClose.style.display = "none";
    sortAppareilsOpen.style.display = "flex";
    sortAppareilsData.style.display = "grid";
})

sortAppareilsOpen.addEventListener('click', () => {
    sortAppareilsClose.style.display = "flex";
    sortAppareilsOpen.style.display = "none";
    sortAppareilsData.style.display = "none";
})

// USTENSILES LIST

const sortUstensilesClose = document.querySelector('.sort-ustensiles-close');
const sortUstensilesOpen = document.querySelector('.sort-ustensiles-open');
const sortUstensilesData = document.querySelector('.sort-ustensiles-data');

sortUstensilesClose.addEventListener('click', () =>{

    sortUstensilesClose.style.display = "none";
    sortUstensilesOpen.style.display = "flex";
    sortUstensilesData.style.display = "grid";
})

sortUstensilesOpen.addEventListener('click', () => {
    sortUstensilesClose.style.display = "flex";
    sortUstensilesOpen.style.display = "none";
    sortUstensilesData.style.display = "none";
}) 


// ADD TAG 

function addTag(ingredient, appareil, ustensil){

    ingredient.forEach( el => {
        const b = tagFactory(el)
        sortIngredientsData.appendChild(b);
    })

    appareil.forEach( el => {
        const b = tagFactory(el)
        sortAppareilsData.appendChild(b);
    })

    ustensil.forEach( el => {
        const b = tagFactory(el)
        sortUstensilesData.appendChild(b);
    })

    
}

// MAIN SEARCH BAR
const searchInput = document.querySelector('.search-input');
const divRecipes = document.getElementById('recipes');

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
        
        //addTag(IngredientFilter);
    }else{
        displayRecipes(recipes);
        addTag(Ingredient,Appareil,Ustensil);

    }
})

function displayRecipes(dataRecipes){

    dataRecipes.forEach( el => {
        const a = recipesFactory(el)
        const recipesDOM = a.getRecipesDOM();
        divRecipes.appendChild(recipesDOM);
    })   
}

console.log(" test "+recipes[0])
addTag (Ingredient,Appareil,Ustensil);
displayRecipes(recipes);

