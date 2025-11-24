import { getWeather } from "./services/api.js";
import { createWeatherBox, createExtendedWeatherBox } from "./components/WeatherBox.js";
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
        console.log(landingSection)
        let data = await getWeather(city); // api.js returns object?
        let newWeatherBox = createExtendedWeatherBox(data, city); //
        landingSection.replaceChildren(newWeatherBox) // empty out #container after every search

    } catch(error) {
        console.error(`Ett fel uppstod ${error.message}`)
    }
};




// **** REPLACE WITH SEARCH FUNKTION/MODULE LATER ****
function placeHolderFunction() {
    return "Göteborg"
}
const searchBtn = document.getElementById("searchIcon");
const searchbar = document.getElementById("search")


function handleSearch() {
    //searchString comes from the funktion being built by ahm

    // 1. press enter on input
    searchbar.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            // kör ahms funktion (tar input och konverterar)
            const userSearch = placeHolderFunction()
            displaySearchedWeather(userSearch)
        }
    });
    // 2. press search icon
    searchBtn.addEventListener("click", e => {
        const userSearch = placeHolderFunction()
        displaySearchedWeather(userSearch)
    }) 
};


// ---- Run functions: ----
init()
handleSearch()