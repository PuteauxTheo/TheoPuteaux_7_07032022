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

    ingredient.forEach( el => {
        const tag = tagFactory(el,"ingredient")
        sortIngredientsData.appendChild(tag);
    })

    appareil.forEach( el => {
        const tag = tagFactory(el, "appareil")
        sortAppareilsData.appendChild(tag);
    })

    ustensil.forEach( el => {
        const tag = tagFactory(el, "ustensil")
        sortUstensilesData.appendChild(tag);
    })
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
        console.log(" test "+tagSelectedIngredients)
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

    filterTag(recipes);
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

    filterTag(recipes);
}

const tag = document.querySelector('.tag');

function filterTag(data){

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

    researchWithTag(data)

}

function researchWithTag(recipe){
    console.log(" tag selected ingredient : "+tagSelectedIngredients)
    console.log(" tag selected appareil : "+tagSelectedAppareils)
    console.log(" tag selected ustensil : "+tagSelectedUstensils)

    const recipeFilterTag = recipe.filter((el) => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagSelectedIngredients)) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && el.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tagSelectedUstensils) ))
    //const recipeFilterTag = test.filter((el) => el.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(tagSelectedIngredients)))
    console.log(" testtest "+recipeFilterTag)
    if(recipeFilterTag.length > 0 ){
        divRecipes.innerHTML = "";
        displayRecipes(recipeFilterTag);
    }
    if(recipeFilterTag.length === 0){
        divRecipes.innerHTML = " Aucune recette correspond ... ";
    }

}
