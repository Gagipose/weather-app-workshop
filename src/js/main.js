import { getWeather } from "./services/api.js";
import { createWeatherBox, createExtendedWeatherBox } from "./components/WeatherBox.js";
import { getDayName, getMonthName } from "./services/time.js";
import { createNewElement } from "./components/createElement.js";
import { searchCity } from "./components/searchInput.js";
import { searchHistory, addSearchedItem } from "./components/SearchHistory.js";

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
        addSearchedItem(data, city)
        console.log(searchHistory)
        landingSection.innerHTML = ""


        searchHistory.forEach(searchItem => {
            let newWeatherBox = createWeatherBox(searchItem.apiDataObject, searchItem.city)
            console.log(searchItem.apiDataObject)
            console.log(searchItem.city)
            landingSection.appendChild(newWeatherBox)
        })
        // make for loop: 
            // for each item in searchistory, createweatherbox
        // let len = searchHistory.length
        // for (let i = 0; i < len; i++) {
        //     searchHistory.forEach(city)
        //     console.log(searchHistory[0])
        //     let newWeatherBox = createWeatherBox(searchHistory[i].apiDataObject, city)
        //     landingSection.appendChild(newWeatherBox);
        // };


    } catch(error) {
        document.getElementById("container").textContent = "Staden finns inte...";
    }
};


const searchBtn = document.getElementById("searchIcon");
const searchbar = document.getElementById("search")


function handleSearch() {
    //searchString comes from the funktion being built by ahm

    // 1. press enter on input
    searchbar.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            // kör ahms funktion (tar input och konverterar)
            const userSearch = searchCity()
            displaySearchedWeather(userSearch)
        }
    });
    // 2. press search icon
    searchBtn.addEventListener("click", e => {
        const userSearch = searchCity()
        displaySearchedWeather(userSearch)
    }) 
};


// ---- Run functions: ----
init()
handleSearch()