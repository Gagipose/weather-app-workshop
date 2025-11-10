import { MOCK_WEATHER } from "../services/data.js";

const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const icon = document.querySelector("#icon");
const description = document.querySelector("#description");


export function changeCity(cityName){
    city.textContent = cityName;
}

export function changeTemp(cityName){
    temp.textContent = MOCK_WEATHER[cityName].tempC;
}

export function changeDescription(cityDescription){
    description.textContent = cityDescription;
}

export function changeIcon(cityIcon){
    icon.textContent = cityIcon;
}




