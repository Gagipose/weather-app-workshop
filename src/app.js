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

// find html items
const searchBtn = document.querySelector("#submitBtn");
const inputField = document.querySelector("#search");
const weatherDisplay = document.querySelector("#weatherResult");

console.log(MOCK_WEATHER.Göteborg.description);

// let user search using search button
searchBtn.addEventListener("click", () => {
    const city = capitalizeFirstLetter(inputField.value);
    // if (city !== MOCK_WEATHER[city]) {
    //     console.log("finns ej")
    // }

    console.log(city);
    console.log(MOCK_WEATHER[city]);
});