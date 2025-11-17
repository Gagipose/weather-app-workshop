import { getWeather } from "./services/api.js";
import { createWeatherBox } from "./components/WeatherBox.js";
import { getDayName, getMonthName, getTime } from "./services/time.js";
import { createNewElement } from "./components/createElement.js";
// import { findCity } from "./components/displayWeather.js";

// async function getCity(/*INPUTVÄRDET*/) {
//     //Sökfunktion och returna staden??
// }

function init() {
    const today = new Date()
    let text = `${getDayName(today)}`
    const headingsContainer = document.querySelector("#headings")
    const subHeading = createNewElement("h2", text, "lightText")
    headingsContainer.appendChild(subHeading)
    
    displayWeather("Stockholm")
    displayWeather("Göteborg")
    displayWeather("Malmö")
}

init()



async function displayWeather(city) {

    const landingSection = document.querySelector("#container")

    try {
        let data = await getWeather(city)
        let newWeatherBox = createWeatherBox(data)
        landingSection.appendChild(newWeatherBox)

    } catch(error) {
        console.error(`Ett fel uppstod ${error.message}`)
    }
}