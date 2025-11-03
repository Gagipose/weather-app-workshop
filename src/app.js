// data.js
let MOCK_WEATHER = {
  "Stockholm": { tempC: 7, description: "Mulet", icon: "☁️", updated: "09:00" },
  "Göteborg": { tempC: 8, description: "Lätt regn", icon: "🌧️", updated: "09:00" },
  "Malmö": { tempC: 10, description: "Klart", icon: "☀️", updated: "09:00" },
  "Uppsala": { tempC: 6, description: "Disigt", icon: "🌫️", updated: "09:00" },
  "Lund": { tempC: 9, description: "Halvklart", icon: "⛅", updated: "09:00" },
  "Örebro": { tempC: 5, description: "Regn", icon: "🌧️", updated: "09:00" },
  "Västerås": { tempC: 4, description: "Dimma", icon: "🌁", updated: "09:00" },
  "Linköping": { tempC: 8, description: "Soligt", icon: "☀️", updated: "09:00" },
  "Helsingborg": { tempC: 9, description: "Halvklart", icon: "⛅", updated: "09:00" },
  "Kiruna": { tempC: -3, description: "Snö", icon: "❄️", updated: "09:00" }
};

// helps match the object item format with user input format
function capitalizeFirstLetter(value) {
    return String(value).charAt(0).toUpperCase() + String(value).substring(1).toLocaleLowerCase();
}

// find html input items
const searchBtn = document.querySelector("#submitBtn");
const inputField = document.querySelector("#search");

// find html output items
const result = document.querySelector("#weatherResult");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const icon = document.querySelector("#icon");
const updatedTime = document.querySelector("#updatedTime");

// let user search using search button
searchBtn.addEventListener("click", () => {
    const city = capitalizeFirstLetter(inputField.value);
    if (!MOCK_WEATHER[city]) {
            console.log("Not found! format example: göteborg or Malmö")
            result.innerHTML = "<h2> Not found! format example: göteborg or Malmö </h2>";
            return;
        } // gets stuck when searching again before manual refresh
    
    
    cityName.textContent = city
    temperature.textContent = `${MOCK_WEATHER[city].tempC}°`
    description.textContent = MOCK_WEATHER[city].description
    icon.textContent = MOCK_WEATHER[city].icon
    updatedTime.textContent = MOCK_WEATHER[city].updated
    
});