export function createWeatherBox(data, city) {
    const weatherBox = document.createElement("div")
    weatherBox.classList.add("weatherBox")

    weatherBox.innerHTML = `
        <h3 class="cityHeader">${city}</h3>
        <p class="weatherIcon">${data.ICON}</p>
        <div class="weatherInfo">
            <p class="time">kl. ${data.time.slice(11)}</p>
            <div class="degreesContainer">
                <p class="degrees">${data.temperature}</p>
                <p class="degreesIcon">°C</p>
            </div>
            <p class="weatherDescription lightText">${data.DESCRIPTION}</p>
        </div>
    `

    return weatherBox
}