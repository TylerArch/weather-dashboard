//DOM Elements
let searchButton = document.getElementById('searchButton');
let input = document.getElementById('formInput');
let mainWeather = document.getElementById('apiHeader');
let mainTemp = document.getElementById('temp');
let mainWind = document.getElementById('wind');
let mainHumidity = document.getElementById('humidity');


//Global Variables
const weatherDays = [];
let currentDay = null;



//Functions
//Function to get API
function getApi(event) {
    var city = input.value
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=188a51d5f423814817d69f7e3e5961b3`;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let temp = ((data.list[0].main.temp-273.15)*1.8)+32

        console.log(data);
        console.log(data.city.name);
})
}

//function to push the data to local storage


//From Gary????
// sampleData.list.forEach(function (tsObj) {
//     const dateNum = moment.unix(tsObj.dt)
//     const dateNum = dateObj.format("DDD")

//     if( dateNum !== currDay && weatherDays.length < 5 ){
//         weatherDays.push( tsObj )
//         currDay = dateNum
//       }
    
//     })
    
   
//Event Listener
searchButton.addEventListener('click', getApi)
