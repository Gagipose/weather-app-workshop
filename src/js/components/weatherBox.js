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

/*
// Mall för att skapa väderbox med hjälp av data
export function createWeatherBox(data, city) {

    console.log("WEATHER DATA I CREATEWEATHERBOX:", data);

    const weatherBox = document.createElement("div");
    weatherBox.classList.add("weatherBox");

    // Stad
    weatherBox.appendChild(createNewElement("h3", city, "cityHeader"));

    // Ikon (fallback ☀️)
    const icon = data.icon ?? "☀️";
    weatherBox.appendChild(createNewElement("p", icon, "weatherIcon"));

    // Container för information
    const weatherInfo = createNewElement("div", "", "weatherInfo");
    weatherBox.appendChild(weatherInfo);

    // Tid (slice skyddad)
    const timeString = data.time?.slice?.(11) ?? "--:--";
    weatherInfo.appendChild(createNewElement("p", timeString, "time"));

    // Temperatur (skydd mot NaN)
    const tempValue = Number(data.temperature);
    const safeTemp = isNaN(tempValue) ? "-" : Math.round(tempValue);

    const degreesContainer = createNewElement("div", "", "degreesContainer");
    weatherInfo.appendChild(degreesContainer);

    degreesContainer.appendChild(
        createNewElement("p", `${safeTemp}`, "degrees")
    );
    degreesContainer.appendChild(
        createNewElement("p", "°C", "degreesIcon")
    );

    // Beskrivning
    const description = data.description ?? "Okänt väder";
    const weatherDescription = createNewElement("p", description);
    weatherDescription.classList.add("weatherDescription", "lightText");

    weatherInfo.appendChild(weatherDescription);

    return weatherBox;
}


// -----------------
// EXTENDED WEATHER
// -----------------
export function createExtendedWeatherBox(data, city) {

    const weatherBox = createWeatherBox(data, city);

    const extendedInfo = createNewElement("div", "", "extendedInfo");
    weatherBox.appendChild(extendedInfo);

    // Vind (km/h → m/s) med säkerhet
    const windValue = Number(data.windSpeed);
    const windMS = isNaN(windValue) ? "-" : Math.round(windValue * 0.278);

    extendedInfo.appendChild(
        createNewElement("p", `Vindstyrka: ${windMS} m/s`)
    );

    // Luftfuktighet i %
    const humidityValue = Number(data.humidity);
    const safeHumidity = isNaN(humidityValue) ? "-" : humidityValue;

    extendedInfo.appendChild(
        createNewElement("p", `Luftfuktighet: ${safeHumidity} %`)
    );

    return weatherBox;
} */