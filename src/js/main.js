import  {getWeather} from "./services/api.js";
import { createWeatherBox } from "./components/WeatherBox.js";


// async function getCity(/*INPUTVÄRDET*/) {
//     //Sökfunktion och returna staden??
// }

async function displayWeather(city) {

    const landingSection = document.querySelector("#container")

    try {
        let data = await getWeather(city)
        let newWeatherBox = createWeatherBox(data)
        landingSection.appendChild(newWeatherBox)

        console.log(data)
        console.log(newWeatherBox)

    } catch(error) {
        console.error(`Ett fel uppstod ${error.message}`)
    }
}

displayWeather("Göteborg")