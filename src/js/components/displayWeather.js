// import { MOCK_WEATHER } from "../services/data.js";

// const city = document.querySelector("#city");
// const temp = document.querySelector("#temp");
// const icon = document.querySelector("#icon");
// const description = document.querySelector("#description");


// export function changeCity(cityName){
//     city.textContent = cityName;
// }

// export function changeTemp(cityName){
//     temp.textContent = MOCK_WEATHER[cityName].tempC;
// }

// export function changeDescription(cityDescription){
//     description.textContent = cityDescription;
// }

// export function changeIcon(cityIcon){
//     icon.textContent = cityIcon;
// }


export function findCity() {

    const searchField = document.querySelector("input");
    
    searchField.addEventListener("keydown", (event) => {
        if(event.key === "Enter") {
            const search = searchField.value;
            const searchModify = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase() //Formaterar till stor första bokstav resten små

            if(searchModify === CITIES[city]) {
                console.log("hej")
            }
        }
    })
}