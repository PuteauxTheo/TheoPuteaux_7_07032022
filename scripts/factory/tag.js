/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// tagFactory permet de renvoyer un span avec les informations pour un tag
function tagFactory(data, cat){

    const span = document.createElement('span')
    span.className = "tag-list"
    span.textContent = data;
    span.addEventListener('click', () =>{
        addTagSelected(data, cat);
    })

    return (span)
}