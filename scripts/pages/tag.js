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
    searchIngredient.addEventListener('input', e => {
        sortIngredientsData.innerHTML = "";
        let valueInput = e.target.value.toLowerCase()
        if(valueInput.length > 0){
            const ingredientFilter = ingredient.filter( ing => ing.toLowerCase().includes(valueInput));
            ingredientFilter.forEach( el => {
                const tag = tagFactory(el,"ingredient")
                sortIngredientsData.appendChild(tag);
        })}else{
            ingredient.forEach( el => {
                const tag = tagFactory(el,"ingredient")
                sortIngredientsData.appendChild(tag);
            })
        }
    })
    ingredient.forEach( el => {
        const tag = tagFactory(el,"ingredient")
        sortIngredientsData.appendChild(tag);
    })

    // const openTagList = document.querySelectorAll('.open');

    // openTagList.childNodes[1].addEventListener('input', e => {
    //     if(e.id = "sort-ingredient-open"){
    //         const tab = ingredient;
    //         let typeTag = "ingredient"
    //     }
    //     e.parentElement.parentElement.childNodes[5].innerHTML = "";
    //     let valueInput = e.target.value.toLowerCase()
    //     if(valueInput.length > 0){
    //         const tabFilter = tab.filter( el => el.toLowerCase().includes(valueInput));
    //         tabFilter.forEach( el => {
    //             const tag = tagFactory(el,typeTag)
    //             sortIngredientsData.appendChild(tag);
    //     })}else{
    //         ingredient.forEach( el => {
    //             const tag = tagFactory(el,"ingredient")
    //             sortIngredientsData.appendChild(tag);
    //         })
    //     }

    // })
    
    const searchAppareil = document.getElementById('sort-search-appareil');
    searchAppareil.addEventListener('input', e => {
        sortAppareilsData.innerHTML = "";
        let valueInput = e.target.value.toLowerCase()
        if(valueInput.length > 0){
            const appareilFilter = appareil.filter( appa => appa.toLowerCase().includes(valueInput));
            appareilFilter.forEach( el => {
                const tag = tagFactory(el,"appareil")
                sortAppareilsData.appendChild(tag);
        })}else{
            appareil.forEach( el => {
                const tag = tagFactory(el,"appareil")
                sortAppareilsData.appendChild(tag);
            })
        }
    })
    appareil.forEach( el => {
        const tag = tagFactory(el, "appareil")
        sortAppareilsData.appendChild(tag);
    })

    const searchUstensile = document.getElementById('sort-search-ustensile');
    searchUstensile.addEventListener('input', e => {
        sortUstensilesData.innerHTML = "";
        let valueInput = e.target.value.toLowerCase()
        if(valueInput.length > 0){
            const ustensilFilter = ustensil.filter( ust => ust.toLowerCase().includes(valueInput));
            ustensilFilter.forEach( el => {
                const tag = tagFactory(el,"ustensil")
                sortUstensilesData.appendChild(tag);
        })}else{
            ustensil.forEach( el => {
                const tag = tagFactory(el,"ustensil")
                sortUstensilesData.appendChild(tag);
            })
        }
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

//filterTag permet d'afficher les tags qui sont selectionné et appel researchWithTag pour affiche les recettes
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

var recipeFilter = recipes;



// researchWithTag permet d'afficher les recettes qui correspondent soit au ingredient, appareil ou ustensile selectionné
function researchWithTag(){
    console.log(" tag selected ingredient : "+tagSelectedIngredients)
    console.log(" tag selected appareil : "+tagSelectedAppareils)
    console.log(" tag selected ustensil : "+tagSelectedUstensils)

    recipeFilter = recipeFilter.filter((el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))) && el.appliance.toLowerCase().includes(tagSelectedAppareils) && tagSelectedUstensils.every(tagUst => el.ustensils.some(ustensil => ustensil.toLowerCase().includes(tagUst)) ))
    // recipeFilter = recipe.filter( (el) => tagSelectedIngredients.every(tagIng => el.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tagIng))));
    //const recipeFilterTag = test.filter((el) => el.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(tagSelectedIngredients)))
    console.log(" testtest "+recipeFilter)
    if(recipeFilter.length > 0 ){
        divRecipes.innerHTML = "";
        displayRecipes(recipeFilter);
    }
    if(recipeFilter.length === 0){
        divRecipes.innerHTML = " Aucune recette correspond ... ";
    }

}
