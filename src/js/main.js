// import {MOCK_WEATHER} from "./services/data.js";

// import * as change from "./components/displayWeather.js";

// console.log(MOCK_WEATHER);

// change.changeCity("Göteborg");

// change.changeTemp("Göteborg");

// change.changeDescription(MOCK_WEATHER.Göteborg.description);
 
// change.changeIcon(MOCK_WEATHER.Göteborg.icon);

// import {search} from "./utils/apelsin.js";
// search();

import * as api from "./services/api.js";
import { findCity } from "./components/displayWeather.js";

api.getLink("Lund")
api.getWeather()
findCity()