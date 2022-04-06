// OPEN CLOSE LIST

const sortClose = document.querySelectorAll('.close');


sortClose.forEach( sort => {
   sort.addEventListener('click', () => {

        sort.style.display = "none";
        sort.parentElement.childNodes[3].style.display = "flex"
        sort.parentElement.childNodes[5].style.display = "grid"
   })
})

const sortOpen = document.querySelectorAll('.open');

sortOpen.forEach( sort => {
    sort.addEventListener('click', () => {
        sort.style.display = "none";
        sort.parentElement.childNodes[1].style.display = "flex"
        sort.parentElement.childNodes[5].style.display = "none"
    })
 })

// ADD TAG 
const sortIngredientsData = document.querySelector('.sort-ingredients-data')
const sortAppareilsData = document.querySelector('.sort-appareils-data');
const sortUstensilesData = document.querySelector('.sort-ustensiles-data');

// addTag permet d'ajouter pour chaque categorie la liste d'element qui lui correspond                   
function addTag(ingredient, appareil, ustensil){

    for(let i=0; i < ingredient.length;i++){
        const tag = tagFactory(ingredient[i],"ingredient")
        sortIngredientsData.appendChild(tag)
    }
    for(let i=0; i < appareil.length;i++){
        const tag = tagFactory(appareil[i],"appareil")
        sortAppareilsData.appendChild(tag)
    }
    for(let i=0; i < ustensil.length;i++){
        const tag = tagFactory(ustensil[i],"ustensil")
        sortUstensilesData.appendChild(tag)
    }
}

// filterTab permet d'enlever les doublons dans les tags
function isUniqueValue(ele, pos, tagTab){
    return tagTab.indexOf(ele) === pos;
}

// displayTag permet d'afficher un tag 
function displayTag(data, cat){
    const tag = document.querySelector('.tag');
    const divTag = document.createElement('div');
    const imgCross = document.createElement('img')

    divTag.className = "tag-"+cat;
    divTag.textContent = data;

    imgCross.className = "img-cross"
    imgCross.setAttribute('src','assets/cross.png');
    imgCross.setAttribute('alt','Permet de supprimer le tag selectionné');
    imgCross.addEventListener('click', () => {
        deleteTag(imgCross)
    })

    divTag.appendChild(imgCross);
    tag.appendChild(divTag)
}

// deleteTag permet de supprimer le tag 
function deleteTag(tag){
    //tag.parentElement.remove();
    if(tag.parentElement.className == "tag-ingredient"){
        tagSelectedIngredients.forEach(function(item, index, object){
            if(item == tag.parentElement.textContent){
               object.splice(index, 1);

            }
        })
        //tagSelectedIngredients.filter(ingredient => !ingredient.includes(tag.parentElement.textContent))
    }
    if(tag.parentElement.className == "tag-appareil"){
        tagSelectedAppareils.forEach(function(item, index, object){
            if(item == tag.parentElement.textContent){
                object.splice(index, 1);
            }
        })
    }
    if(tag.parentElement.className == "tag-ustensil"){
        tagSelectedUstensils.forEach(function(item, index, object){
            if(item == tag.parentElement.textContent){
                object.splice(index, 1);
            }
        })
    }

    filterTag();
}

var tagSelectedIngredients = [];
var tagSelectedAppareils = [];
var tagSelectedUstensils = [];

function addTagSelected(data, cat){
    if(cat == "ingredient"){
        if(!tagSelectedIngredients.includes(data)){
            tagSelectedIngredients.push(data);
        }
    }

    if(cat == "appareil"){
        if(!tagSelectedAppareils.includes(data)){
            tagSelectedAppareils.push(data);
        }
    }

    if(cat == "ustensil"){
        if(!tagSelectedUstensils.includes(data))
        tagSelectedUstensils.push(data);
    }

    filterTag();
}

const tag = document.querySelector('.tag');

function filterTag(){

    tag.innerHTML = ""

    tagSelectedIngredients.forEach( tagIngredient => {
        displayTag(tagIngredient,"ingredient");
    })

    tagSelectedAppareils.forEach( tagAppareil => {
        displayTag(tagAppareil,"appareil");
    })

    tagSelectedUstensils.forEach( tagUstensil => {
        displayTag(tagUstensil,"ustensil");
    })

    researchWithTag()

}

// var recipeFilter = recipes;
var recipeFilter = [];

function researchWithTag(){
    console.log(" tag selected ingredient taille : "+tagSelectedIngredients.length)
    console.log(" tag selected ingredient : "+tagSelectedIngredients)

    console.log(" tag selected appareil taille : "+tagSelectedAppareils.length)
    console.log(" tag selected appareil : "+tagSelectedAppareils)

    console.log(" tag selected ustensil taille : "+tagSelectedUstensils.length)
    console.log(" tag selected ustensil : "+tagSelectedUstensils)

    if(tagSelectedAppareils.length == 0 && tagSelectedIngredients.length == 0 && tagSelectedUstensils.length == 0 ){
        recipeFilter = recipes;
    }else{
        console.log(" Avant d'etre filtre : "+recipeFilter)
        for(let i=0; i < 50;i++){
            console.log(" recipe length : "+recipes.length)
            let flag = true;
            // for(let j=0; j < recipe[i].ingredients.length; j++){
            //     for(let m=0; m < tagSelectedIngredients.length; m++){
            //         console.log(" i : "+i+" j : "+j+" m : "+m)
            //         if(recipe[i].ingredients[j].ingredient.toLowerCase().trim() == tagSelectedIngredients[m] ){
            //             flag = false;
            //         }
            //     }
            // }
            if(tagSelectedAppareils === 0){
                for(let a=0; a < tagSelectedAppareils.length; a++){
                    if(recipes[i].appliance.toLowerCase().trim() == tagSelectedAppareils[a]){
                        flag = false;
                    }
                }
            }
            
            // for(let k=0; k < recipe[i].ustensils.length; k++){
            //     for(let l=0; l < tagSelectedUstensils.length; l++){
            //         if(recipe[i].ustensils[k].toLowerCase().trim() == tagSelectedUstensils[l]){
            //             flag = false;
            //         }                    
            //     }
            // }
            if(flag){
                recipeFilter.push(recipes[i]);
            }
        }           
    }
    
    
    //const recipeFilterTag = test.filter((el) => el.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(tagSelectedIngredients)))
    console.log(" Nb recette au debut "+recipes.length)
    console.log(" Recettes affiche "+recipeFilter.length+"  "+recipeFilter)
    
    if(recipeFilter.length > 0 ){
        divRecipes.innerHTML = "";
        displayRecipes(recipeFilter);
    }
    if(recipeFilter.length === 0){
        divRecipes.innerHTML = " Aucune recette correspond ... ";
    }

}