// tabIngredient renvoie le tableau de tous les ingredients sans doublons 

function tabIngredient(data){
    let tabDataIngredients = []

    for(let i=0; i < data.length; i++){
        for(let j=0; j < data[i].ingredients.length; j++){
            tabDataIngredients.push(data[i].ingredients[j].ingredient.toLowerCase());
        }
    }
    //cette boucle permet d'enlever les doublons 
    for(let l=0; l < tabDataIngredients.length; l++){
        for(let m=0; m < tabDataIngredients.length; m++){
            if(tabDataIngredients[l] == tabDataIngredients[m]){
                tabDataIngredients.splice(l,1);
            }
        }
    }
    return (tabDataIngredients)
}

// tabAppareil renvoie le tableau de tous les ingredients sans doublons 

function tabAppareil(data){
    let tabDataAppareils = [];

    for(let i = 0; i < data.length; i++){
        tabDataAppareils.push(data[i].appliance.toLowerCase())
    }
    // cette boucle permet d'enlever les doublons 
    for(let l=0; l < tabDataAppareils.length; l++){
        for(let m=0; m < tabDataAppareils.length; m++){
            if(tabDataAppareils[l] == tabDataAppareils[m]){
                tabDataAppareils.splice(l,1);
            }
        }
    }

    return (tabDataAppareils)
}

// tabUstensil renvoie le tableau de tous les ingredients sans doublons 

function tabUstensil(data){
    let tabDataUstensils = []
    console.log("tabDataUs 2"+tabDataUstensils)
    for(let i=0; i < data.length; i++){
        for(let j=0; j < data[i].ustensils.length; j++){   
            if(tabDataUstensils.length < 1){
                tabDataUstensils.push(data[i].ustensils[j].toLowerCase());

            }else{
                let flag = true;
                for(let m=0; m < tabDataUstensils.length; m++){
                    console.log(" data "+data[i].ustensils[j])
                    console.log(" data 561 "+tabDataUstensils[m])

                    if(data[i].ustensils[j] == tabDataUstensils[m]){
                        flag = false
                    }

                }
                if(flag){
                tabDataUstensils.push(data[i].ustensils[j].toLowerCase());
                }
            }       
                
        }    
    }
    // cette boucle permet d'enlever les doublons 
    // for(let l=0; l < tabDataUstensils.length; l++){
    //     for(let m=0; m < tabDataUstensils.length; m++){
    //         if(tabDataUstensils[l] == tabDataUstensils[m]){
    //             tabDataUstensils.splice(l,1);
    //         }
    //     }
    // }
    return (tabDataUstensils)

}


var Ingredient = tabIngredient(recipes);
var Appareil = tabAppareil(recipes);
var Ustensil = tabUstensil(recipes);


addTag (Ingredient,Appareil,Ustensil);
displayRecipes(recipes);

