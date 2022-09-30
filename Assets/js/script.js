//DOM Elements
let searchButton = document.getElementById('searchButton');
let formInput = document.getElementById('formInput');
let mainWeather = document.getElementById('apiHeader');
let mainTemp = document.getElementById('temp');
let mainWind = document.getElementById('wind');
let mainHumidity = document.getElementById('humidity');
let searchHistoryContainer = document.getElementById('container');
var historyArr = [];

//do I need moment?

//Global Variables
const weatherDays = [];
let currentDay = null;


//Function
function showSearchHistory() {
    if (searchHistoryContainer.innerHTML) {
        searchHistoryContainer.innerHTML = "";
    }
    //Checking search history array for previous searches and creating the amount of buttons equal to the elements in the array
    for (var i = historyArr.length -1; i >= 0; i--) {
        console.log(i);
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'history-btn');

        btn.setAttribute('data-search', historyArr[i]);

        btn.textContent = historyArr[i];
        searchHistoryContainer.appendChild(btn);
    }
}

//Function to update the search history in local storage
function addToHistory(city) {
    //If nothing was searched return
    if(historyArr.indexOf(city) != -1){
            return;
    }
    //Push city to local storage in the history array
    historyArr.push(city);
    console.log(historyArr);
    localStorage.setItem('search-history', JSON.stringify(historyArr));
    showSearchHistory();
}

//Function to get the local storage items
function getSearches() {
    var savedHistory = localStorage.getItem('search-history');
    if (savedHistory) {
        historyArr = JSON.parse(savedHistory);
    } showSearchHistory();
}

//Function to get API
function getApi(city) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=188a51d5f423814817d69f7e3e5961b3`;
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let temp = ((data.list[0].main.temp-273.15)*1.8)+32

        console.log(data);
        console.log(data.city.name);
        //Function to push 5 day forcast to h3
sampleData.list.forEach(function (tsObj) {
    const dateNum = moment.unix(tsObj.dt)
    
    if( dateNum !== currDay && weatherDays.length < 5 ){
        weatherDays.push( tsObj )
        currDay = dateNum
      }
    
    })
        
    })
}



function searchButtonClick(event) {
   
    if (!formInput.value){
    return;
    }
    event.preventDefault();
    var city = formInput.value;
    getApi(city)
    console.log(formInput.value);
    addToHistory(city);
}

getSearches();
searchButton.addEventListener('click', searchButtonClick);






//From Gary????

    
   
//Event Listener
// searchButton.addEventListener('click', getApi)
