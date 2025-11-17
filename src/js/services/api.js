
// import {MOCK_WEATHER as weatherData} from "./data.js";

// console.log(weatherData);

const CITIES = {
	"Stockholm": { country: "SE", lat: 59.3293, lon: 18.0686 },
	"Göteborg": { country: "SE", lat: 57.7089, lon: 11.9746 },
	"Malmö": { country: "SE", lat: 55.6050, lon: 13.0038 },
	"Uppsala": { country: "SE", lat: 59.8586, lon: 17.6389 },
	"Lund": { country: "SE", lat: 55.7047, lon: 13.1910 }
};


export async function getWeather(city) {
    const lat = CITIES[city].lat
    const lon = CITIES[city].lon
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        // console.log(data.current_weather)
        return data.current_weather 
        // console.log(url)

    } catch(error) {
        console.error(`Ett fel uppstod: ${error}`)
    };

};