// Global Variables 
var searchEl = document.getElementById("search-button");
var inputEl = document.getElementById("city-input");
var nameEl = document.getElementById("city-name");
var clearEl = document.getElementById("clear-history");
var currentPicEl = document.getElementById("current-pic");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEl = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");
var historyEl = document.getElementById("history");

// API key - https://home.openweathermap.org/api_keys 
var apiKey = "f49f37f87b0f4b82ac0459bf392a3020";
var apiInfo = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"
var apiResponse = "api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test"

//  Search city name;
var formSubmitCity = function (event) {
    event.preventDefault();

    var cityName = inputEl.value.trim();

    if(cityName){
        getapiInfo(cityName);

        nameEl.textContent= " ";
        inputEl.value = " ";
    } else { 
        alert("Please enter a city name");
    }
};

searchEl.addEventListener("click", formSubmitCity);


// Get API info to display current weather condition

var apiResponse = function (lat,lon,city) {

    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${apiKey}&units=imperial`

  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            document.getElementById("city-name").innerText=city
            document.getElementById("temperature").innerText=data.current.temp
            document.getElementById("humidity").innerText=data.current.humidity
            document.getElementById("wind-speed").innerText=data.current.wind_speed
            document.getElementById("UV-index").innerText=data.current.uvi
            document.getElementById("current-pic").setAttribute("src",` https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`)


        
            // displayRepos(data, user);
          });
        } else {
          console.log('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('xxxx');
      });
  };
  

  function getapiInfo(city){
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            var lat = data.coord.lat
            var lon = data.coord.lon
            apiResponse(lat,lon,city)
          });
        } else {
          console.log('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('xxxxx');
      });
  }