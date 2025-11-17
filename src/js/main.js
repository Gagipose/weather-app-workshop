import { getWeather } from "./services/api.js";
import { createWeatherBox } from "./components/WeatherBox.js";
import { getDayName, getMonthName } from "./services/time.js";
import { createNewElement } from "./components/createElement.js";
// import { findCity } from "./components/displayWeather.js";

// async function getCity(/*INPUTVÄRDET*/) {
//     //Sökfunktion och returna staden??
// }

function init() {

    //Skapa underrubrik
    const today = new Date()
    let text = `${getDayName(today)} ${today.getDate()} ${getMonthName(today)}`
    const headingsContainer = document.querySelector("#headings")
    const subHeading = createNewElement("h2", text, "lightText")
    headingsContainer.appendChild(subHeading)
    
    //Skapa default väderkorten
    displayWeather("Stockholm")
    displayWeather("Göteborg")
    displayWeather("Malmö")
}

init()


async function displayWeather(city) {
    const landingSection = document.querySelector("#container")

    try {
        let data = await getWeather(city)
        let newWeatherBox = createWeatherBox(data, city)
        landingSection.appendChild(newWeatherBox)

    } catch(error) {
        console.error(`Ett fel uppstod ${error.message}`)
    }
}