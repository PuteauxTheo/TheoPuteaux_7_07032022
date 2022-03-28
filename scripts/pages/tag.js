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

function addTag(ingredient, appareil, ustensil){

    ingredient.forEach( el => {
        const tag = tagFactory(el)
        sortIngredientsData.appendChild(tag);
    })

    appareil.forEach( el => {
        const tag = tagFactory(el)
        sortAppareilsData.appendChild(tag);
    })

    ustensil.forEach( el => {
        const tag = tagFactory(el)
        sortUstensilesData.appendChild(tag);
    })

    
}

// filterTab permet d'enlever les doublons dans les tags
function isUniqueValue(ele, pos, tagTab){
    return tagTab.indexOf(ele) === pos;
}


