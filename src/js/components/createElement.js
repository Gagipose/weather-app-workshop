//Mall för att skapa nytt element
export function createNewElement(element, text, className) {
    let newElement = document.createElement(element)
    newElement.textContent = text
    if(className) {
        newElement.classList.add(className)
    }

    return newElement
}