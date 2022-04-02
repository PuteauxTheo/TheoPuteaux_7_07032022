// tabIngredient renvoie le tableau de tous les ingredients sans doublons 

function tabIngredient(data){
    let tabDataIngredients = []

    for(let i=0; i < data.length; i++){
        for(let j=0; j < data[i].ingredients.length; j++){
            let flag = true;
            for(let k=0; k < tabDataIngredients.length;k++){
                if(data[i].ingredients[j].ingredient.toLowerCase().trim() == tabDataIngredients[k])
                    flag = false;
            }
            if(flag)
                tabDataIngredients.push(data[i].ingredients[j].ingredient.toLowerCase());
        }
    }
    return (tabDataIngredients)
}

// tabAppareil renvoie le tableau de tous les ingredients sans doublons 

function tabAppareil(data){
    let tabDataAppareils = [];

    for(let i = 0; i < data.length; i++){
        let flag = true;
        for(let j=0; j < tabDataAppareils.length; j++){
            if(data[i].appliance.toLowerCase().trim() == tabDataAppareils[j]){
                flag = false;
            }
        }
        if(flag){
            tabDataAppareils.push(data[i].appliance.toLowerCase());
        }
    }
    return (tabDataAppareils)
}

// tabUstensil renvoie le tableau de tous les ingredients sans doublons 

function tabUstensil(data){
    let tabDataUstensils = []
    for(let i=0; i < data.length; i++){
        for(let j=0; j < data[i].ustensils.length; j++){
            let flag = true;
            for(let m=0; m < tabDataUstensils.length; m++){        
                if(data[i].ustensils[j].toLowerCase().trim() == tabDataUstensils[m]){
                    flag = false;
                }
            }
            if(flag){
                tabDataUstensils.push(data[i].ustensils[j].toLowerCase().trim());
            }
        }    
    }
    return (tabDataUstensils)

}


var Ingredient = tabIngredient(recipes);
var Appareil = tabAppareil(recipes);
var Ustensil = tabUstensil(recipes);


addTag (Ingredient,Appareil,Ustensil);
displayRecipes(recipes);

