/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// OPEN CLOSE LIST

const sortClose = document.querySelectorAll('.close');


sortClose.forEach( sort => {
   sort.addEventListener('click', () => {
    
        sort.parentElement.style.width = "33%";
        sort.parentElement.style.borderRadius = "5px 5px 0px 0px"
        sort.style.display = "none";
        sort.parentElement.childNodes[3].style.display = "flex"
        sort.parentElement.childNodes[5].style.display = "grid"
   })
})

const sortOpen = document.querySelectorAll('.open');

sortOpen.forEach( sort => {
    sort.childNodes[3].addEventListener('click', () => {
        sort.parentElement.style.width = "13%";
        sort.parentElement.style.borderRadius = "5px"
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

    const searchIngredient = document.getElementById('sort-search-ingredient');
    const searchAppareil = document.getElementById('sort-search-appareil');
    const searchUstensile = document.getElementById('sort-search-ustensile');
    searchBarTag(searchIngredient,sortIngredientsData,ingredient,'ingredient');
    searchBarTag(searchAppareil,sortAppareilsData,appareil,"appareil");
    searchBarTag(searchUstensile,sortUstensilesData,ustensil,"ustensil");
    
}

// searchBarTag permet de faire une recherche dans la barre des tags 
function searchBarTag(searchType,sortData,tab,type){
    searchType.addEventListener('input', e => {
        sortData.innerHTML = "";
        let valueInput = e.target.value.toLowerCase()
        if(valueInput.length > 0){
            const tabFilter = tab.filter( el => el.toLowerCase().includes(valueInput));
            tabFilter.forEach( el => {
                const tag = tagFactory(el,type)
                sortData.appendChild(tag);
        })}else{
            tab.forEach( el => {
                const tag = tagFactory(el,type)
                sortData.appendChild(tag);
            })
        }
    })
    tab.forEach( el => {
        const tag = tagFactory(el,type)
        sortData.appendChild(tag);
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
    imgCross.setAttribute('alt','Permet de supprimer le tag selectionn??');
    imgCross.addEventListener('click', () => {
        deleteTag(imgCross)
    })

    divTag.appendChild(imgCross);
    tag.appendChild(divTag)
}

// deleteTag permet de supprimer le tag selectionner 
function deleteTag(tag){
    if(tag.parentElement.className == "tag-ingredient"){
        tagSelectedIngredients.forEach(function(item, index, object){
            if(item == tag.parentElement.textContent){
               object.splice(index, 1);
            }
        })
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

// initialisation des tableaux de chaque categorie des tags selectionn??s
var tagSelectedIngredients = [];
var tagSelectedAppareils = [];
var tagSelectedUstensils = [];

// addTagSelected permet d'ajouter le text du tag selectionne dans un tableau 
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

//filterTag permet d'afficher les tags qui sont selectionn?? et appel researchWithTag pour affiche les recettes
function filterTag(){

    tag.innerHTML = ""
    const sortIngredientsData = document.querySelector('.sort-ingredients-data')
    const sortAppareilsData = document.querySelector('.sort-appareils-data');
    const sortUstensilesData = document.querySelector('.sort-ustensiles-data');
    sortIngredientsData.innerHTML = ""
    sortAppareilsData.innerHTML = ""
    sortUstensilesData.innerHTML = ""

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

var recipeFilter = recipes;



// researchWithTag permet d'afficher les recettes qui correspondent soit au ingredient, appareil ou ustensile selectionn??
function researchWithTag(){
    // recipeFilter filtre les recettes si les elements choisit dans les tags sont present dans les recettes 
    let valueTag = searchInput.value.toLowerCase();
    if(valueTag.length >= 3){
        recipeFilter = recipes.filter(word => word.name.toLowerCase().includes(valueTag) || word.description.toLowerCase().includes(valueTag) || word.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(valueTag)));
        recipeFilter = recipeFilter.filter((el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && tagSelectedUstensils.every(tagUst => el.ustensils.some(ustensil => ustensil.toLowerCase().includes(tagUst)) ))

    }else{
        recipeFilter = recipes.filter((el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && tagSelectedUstensils.every(tagUst => el.ustensils.some(ustensil => ustensil.toLowerCase().includes(tagUst)) ))

    }


    console.log("RecipeFilter content "+recipeFilter)
    if(recipeFilter.length > 0 ){
        divRecipes.innerHTML = "";
        addTag(tabIngredient(recipeFilter),tabAppareil(recipeFilter),tabUstensil(recipeFilter));
        displayRecipes(recipeFilter);
    }
    if(recipeFilter.length === 0){
        divRecipes.innerHTML = " Aucune recette correspond ... ";
    }

}
