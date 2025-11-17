//Mall för att skapa väderbox med hjälp av data
export function createWeatherBox(data, city) {

    //Lägg till väderbox på sidan
    const weatherBox = document.createElement("div")
    weatherBox.classList.add("weatherBox")

    //Ändra HTML-innehållet i boxen
    weatherBox.innerHTML = `
        <h3 class="cityHeader">${city}</h3>
        <p class="weatherIcon">${!data.ICON ? "☀️" : data.ICON}</p>
        <div class="weatherInfo">
            <p class="time">kl. ${data.time.slice(11)}</p>
            <div class="degreesContainer">
                <p class="degrees">${Math.round(data.temperature)}</p>
                <p class="degreesIcon">°C</p>
            </div>
            <p class="weatherDescription lightText">${!data.DESCRIPTION ? "Soligt" : data.DESCRIPTION}</p>
        </div>
    `

    return weatherBox
}