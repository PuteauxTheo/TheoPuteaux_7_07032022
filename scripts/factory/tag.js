function tagFactory(data, cat){

    const span = document.createElement('span')
    span.className = "tag-list"
    span.textContent = data;
    span.addEventListener('click', () => {
        displayTag(data, cat)
    })

    return (span)
}