function tagFactory(data){

    const span = document.createElement('span')
    span.className = " ingredients-tag"
    span.textContent = data;

    return (span)
}