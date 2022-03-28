// for(let y =0; y < recipes.length; y++){
//     for(let i =0;i < recipes[y].ingredients.length;i++){
        
//         tabIngredients.push(recipes[y].ingredients[i].ingredient) 
//         // console.log(" tab a chaque fois "+tabIngredients)

//     }
// }

// tabDataTag permet de creer les tableaux pour les filtres 


function tabIngredient(data){
    let tabDataIngredients = [];

    data.forEach( el => {
        el.ingredients.forEach( ing => {
            tabDataIngredients.push(ing.ingredient.toLowerCase())
        })
    })
    return (tabDataIngredients.filter(isUniqueValue))
}


function tabAppareil(data){
     let tabDataAppareils = []
    data.forEach( el => {
            tabDataAppareils.push(el.appliance.toLowerCase())
    })
    return (tabDataAppareils.filter(isUniqueValue))
}

function tabUstensil(data){
    let tabDataUstensils = []
    data.forEach( el => {
        el.ustensils.forEach( ust => {
            tabDataUstensils.push(ust.toLowerCase())
        })
        
    })
    return (tabDataUstensils.filter(isUniqueValue))
}

var Ingredient = tabIngredient(recipes);
var Appareil = tabAppareil(recipes);
var Ustensil = tabUstensil(recipes);


addTag (Ingredient,Appareil,Ustensil);
displayRecipes(recipes);

