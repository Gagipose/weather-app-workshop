// search history + local storage

// ---- STATE ----
let searchHistory = [];

// ---- CLASS ----
class SearchedItem {
    
    constructor(apiDataObject, city) {
        this.city = city;
        this.apiDataObject = apiDataObject;
        this.id = crypto.randomUUID(); // assign unique id for targeting
        console.log(city)
        this.time = apiDataObject.time
        this.temp = apiDataObject.temperature
    };
};

// ---- FUNCTIONS ----

const MAXSEARCHHISTORY = 4;

function addSearchedItem(apiDataObject, city) {
    if(searchHistory.length >= MAXSEARCHHISTORY) {
        searchHistory.pop(); //remove first element
    }
    const newItem = new SearchedItem(apiDataObject, city);
    searchHistory.unshift(newItem);
}

// ---- TESTS ----

// const testObject = `test`


// console.log(searchHistory);
// addSearchedItem(testObject);
// console.log(searchHistory);


// ---- EXPORTS ----

export {addSearchedItem, searchHistory};