// import {MOCK_WEATHER} from "./services/data.js";

// import * as change from "./components/displayWeather.js";

// console.log(MOCK_WEATHER);

// change.changeCity("Göteborg");

// change.changeTemp("Göteborg");

// change.changeDescription(MOCK_WEATHER.Göteborg.description);
 
// change.changeIcon(MOCK_WEATHER.Göteborg.icon);

// import {search} from "./utils/apelsin.js";
// search();


import  {getWeather} from "./services/api.js";
import { findCity } from "./components/displayWeather.js";
import { displayWeather } from "./components/displayWeather.js";    
getWeather("Lund")
findCity()
displayWeather("Lund")