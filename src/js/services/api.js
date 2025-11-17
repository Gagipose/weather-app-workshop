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
};