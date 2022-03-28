function homePage() {
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
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);

    var APIKey = "f49f37f87b0f4b82ac0459bf392a3020";