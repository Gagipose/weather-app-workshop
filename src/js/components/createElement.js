//Mall för att skapa nytt element
export function createNewElement(element, text, className) {
    let newElement = document.createElement(element)
    newElement.textContent = text
    newElement.classList.add(className)

    return newElement
}