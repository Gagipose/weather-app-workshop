/* 
//Placeholder städer
const CITIES = {
	"Stockholm": { country: "SE", lat: 59.3293, lon: 18.0686 },
	"Göteborg": { country: "SE", lat: 57.7089, lon: 11.9746 },
	"Malmö": { country: "SE", lat: 55.6050, lon: 13.0038 },
	"Uppsala": { country: "SE", lat: 59.8586, lon: 17.6389 },
	"Lund": { country: "SE", lat: 55.7047, lon: 13.1910 }
};

//hämta väderinformation från API med hjälp av latitud och longitud
export async function getWeather(city) {

    //hämta lat och lon från placeholder information
    const lat = CITIES[city].lat
    const lon = CITIES[city].lon

    //skapa url med utbytbara lat och lon
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    
    //hämta från API
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        return data.current_weather //returns object so you can use .properties

    } catch(error) {
        console.error(`Ett fel uppstod: ${error}`)
    };
}; */

// Open Meteos weather codes med ikoner och description
const WEATHER_MAP = {
    // 0–3: Klart till mulet
    0:  { desc: "Klart", icon: "☀️" },
    1:  { desc: "Mestadels klart", icon: "🌤️" },
    2:  { desc: "Delvis molnigt", icon: "⛅" },
    3:  { desc: "Mulet", icon: "☁️" },

    // 45–48: Dimma
    45: { desc: "Dimma", icon: "🌫️" },
    48: { desc: "Frostdimma", icon: "🌫️❄️" },

    // 51–55: Duggregn
    51: { desc: "Lätt duggregn", icon: "🌦️" },
    53: { desc: "Måttligt duggregn", icon: "🌧️" },
    55: { desc: "Tätt duggregn", icon: "🌧️🌧️" },

    // 56–57: Underkylt duggregn
    56: { desc: "Lätt underkylt duggregn", icon: "🌧️❄️" },
    57: { desc: "Tätt underkylt duggregn", icon: "🌧️❄️❄️" },

    // 61–65: Regn
    61: { desc: "Lätt regn", icon: "🌦️" },
    63: { desc: "Regn", icon: "🌧️" },
    65: { desc: "Kraftigt regn", icon: "🌧️🌧️" },

    // 66–67: Underkylt regn
    66: { desc: "Lätt underkylt regn", icon: "🌧️❄️" },
    67: { desc: "Kraftigt underkylt regn", icon: "🌧️❄️❄️" },

    // 71–75: Snöfall
    71: { desc: "Lätt snöfall", icon: "🌨️" },
    73: { desc: "Snöfall", icon: "❄️" },
    75: { desc: "Kraftigt snöfall", icon: "❄️❄️" },

    // 77: Snökorn
    77: { desc: "Snökorn", icon: "🌨️🧊" },

    // 80–82: Regnskurar
    80: { desc: "Lätta regnskurar", icon: "🌦️" },
    81: { desc: "Regnskurar", icon: "🌧️" },
    82: { desc: "Kraftiga regnskurar", icon: "🌧️🌧️" },

    // 85–86: Snöskurar
    85: { desc: "Lätta snöskurar", icon: "🌨️" },
    86: { desc: "Kraftiga snöskurar", icon: "❄️❄️" },

    // 95: Åska
    95: { desc: "Åska", icon: "⛈️" },

    // 96–99: Åska med hagel
    96: { desc: "Åska med lätt hagel", icon: "⛈️🌨️" },
    99: { desc: "Åska med kraftigt hagel", icon: "⛈️❄️" }
};

const BASE_URL = "http://kontoret.onvo.se:10180/api/v1";

export async function getWeather(city) {
    try {
        const geoResponse = await fetch (`${BASE_URL}/geo?city=${encodeURIComponent(city)}`);
        const geo = await geoResponse.json();

        if (!geo || !geo.latitude || !geo.longitude) {
            return { error: "Staden kunde inte hittas." };
        }

        const gwdResponse = await fetch (`${BASE_URL}/gwd?lat=${geo.latitude}&lon=${geo.longitude}`);
        const gwd = await gwdResponse.json();

        if (!gwd || !gwd.current) {
            return { error: "Ingen väderdata hittades." };
        }

        const current = gwd.current;
        const weatherInfo = WEATHER_MAP[current.weather_code] || { desc: "Okänt", icon: "❓" };
        
        return {
            city: city,
            time: current.time,
            temperature: current.temperature_2m,
            code: current.weather_code,
            description: weatherInfo.desc,
            icon: weatherInfo.icon,
        };
    } catch (error) {
        console.error('Det funkar inte!', error);
        return { error: "API-förfrågan misslyckades." };
    }
}
