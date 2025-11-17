import { getWeather } from "./services/api.js";
import { createWeatherBox } from "./components/WeatherBox.js";
import { getDayName, getMonthName } from "./services/time.js";
import { createNewElement } from "./components/createElement.js";

//Behöver läggas till sökfunktion !!! Vi behöver veta format

//Körs när sidan laddats
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

//Hämtar från API och lägger till väderkorten på sidan
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

// remove landingsection and replace with correct contents
async function displaySearchedWeather(city) {

    const landingSection = document.querySelector("#container")

    try {
        landingSection.innerHTML = "";  // empty out #container after every search
        let data = await getWeather(city);
        let newWeatherBox = createWeatherBox(data, city);
        landingSection.appendChild(newWeatherBox);

        console.log(data);
        console.log(newWeatherBox);

    } catch(error) {
        console.error(`Ett fel uppstod ${error.message}`)
    }
};

setInterval(() => {
    displaySearchedWeather("Stockholm")
}, 60000); // update every 60 seconds
