const ingredients =  document.querySelector(".sort-ingredients");
const ingredientsData = document.querySelector(".sort-ingredients-data");

// ingredients.addEventListener("click", function(){
//     addDataIngredients();
// })

function addDataIngredients(){
    
}

let tabIngredients = []
for(let y =0; y < recipes.length; y++){
    for(let i =0;i < recipes[y].ingredients.length;i++){
        
        tabIngredients.push(recipes[y].ingredients[i].ingredient) 
        // console.log(" tab a chaque fois "+tabIngredients)

    }
}

const tabIngredientsFiltered = tabIngredients.filter(function(ele , pos){
    return tabIngredients.indexOf(ele) == pos;
})

console.log("tab filtrer a la fin "+tabIngredientsFiltered)

function ingredientSortDOM(){

    for(let j=0; j < tabIngredientsFiltered.length; j++){
        const div = document.createElement('div')
        div.textContent = tabIngredientsFiltered[j];
        ingredientsData.appendChild(div)
    }
}

ingredientSortDOM();

