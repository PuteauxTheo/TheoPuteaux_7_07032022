// tabIngredient renvoie le tableau de tous les ingredients sans doublons 
function tabIngredient(data){
    let tabDataIngredients = [];

    data.forEach( el => {
        el.ingredients.forEach( ing => {
            tabDataIngredients.push(ing.ingredient.toLowerCase())
        })
    })
    return (tabDataIngredients.filter(isUniqueValue))
}

// tabAppareil renvoie le tableau de tous les ingredients sans doublons 

function tabAppareil(data){
     let tabDataAppareils = []
    data.forEach( el => {
            tabDataAppareils.push(el.appliance.toLowerCase())
    })
    return (tabDataAppareils.filter(isUniqueValue))
}

// tabUstensil renvoie le tableau de tous les ingredients sans doublons 

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

