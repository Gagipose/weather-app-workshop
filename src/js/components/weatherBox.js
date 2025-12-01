import { createNewElement } from "./createElement.js"

//Mall för att skapa väderbox med hjälp av data
export function createWeatherBox(data, city) {

    //Skapa weatherbox
    const weatherBox = document.createElement("div")
    weatherBox.classList.add("weatherBox")

    //Lägg till rubrik och ikon
    weatherBox.appendChild(createNewElement("h3", `${city}`, "cityHeader"))
    weatherBox.appendChild(createNewElement("p", `${!data.ICON ? "☀️" : data.ICON}`, "weatherIcon"))

    //Skapa weatherInfo
    const weatherInfo = createNewElement("div", "", "weatherInfo")
    weatherBox.appendChild(weatherInfo)

    //Lägg till tid
    weatherInfo.appendChild(createNewElement("p", `${data.time.slice(11)}`, "time"))
    
    //Lägg till temperatur
    const degreesContainer = createNewElement("div", "", "degreesContainer")
    weatherInfo.appendChild(degreesContainer)

    degreesContainer.appendChild(createNewElement("p", `${Math.round(data.temperature)}`, "degrees"))
    degreesContainer.appendChild(createNewElement("p", `°C`, "degreesIcon"))

    //Lägg till beskrivning i weatherInfo
    const weatherDescription = createNewElement("p", `${!data.DESCRIPTION ? "Soligt" : data.DESCRIPTION}`)
    weatherDescription.classList.add("weatherDescription", "lightText")
    weatherInfo.appendChild(weatherDescription)

    return weatherBox
}

export function createExtendedWeatherBox(data, city) {
    
    //Kör tidigare funktion först
    const weatherBox = createWeatherBox(data, city)

    //Skapa extendedInfo container
    const extendedInfo = createNewElement("div", "", "extendedInfo")
    weatherBox.appendChild(extendedInfo)

    //Lägg till vindstyrka och luftfuktighet
    extendedInfo.appendChild(createNewElement("p", `Vindstyrka: ${Math.round(data.windspeed * 0.278)} m/s`))
    extendedInfo.appendChild(createNewElement("p", `Luftfuktighet: ${Math.round(data.LUFTFUKTIGHET * 0.278)} ENHET`))

    return weatherBox
}