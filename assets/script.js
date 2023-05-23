
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-history');
const currentCity = document.getElementById('current-city');
const currentTemperature = document.getElementById('temperature');
const currentHumidty = document.getElementById('humidity');
const currentWSpeed = document.getElementById('wind-speed');
const searchHistorys = document.getElementById('search-history');
let APIKey = "95719a559a5afa0b90a3b42001df26ad"

 document.getElementById('search-button').addEventListener('click', function(){
     console.log(searchBar.value);
 })
 document.getElementById('clear-history').addEventListener('click', function(){
    console.log(searchBar.value);
})


// Retrieving search history from local storage
const searchHistory = JSON.parse(localStorage.getItem('searchHistory'));

// Accessing the <ul> element
const historyList = document.getElementById('history-list');

// Clearing the existing list items
historyList.innerHTML = '';

// Generating list items for each search history entry
if (searchHistory.length > 0) {
  searchHistory.forEach(function (item) {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
} else {
  const li = document.createElement('li');
  li.textContent = 'No search history';
  historyList.appendChild(li);
}

function onClick() {
    const city = searchBar.value.trim();
    if (city !== '') {
      fetchWeather(city);
      searchBar.value = '';
    }
    
  }
  // Update search history and retrieve data from seacrch history
    searchHistory.push(city);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));



  
  function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayWeather(data);
        console.log(data);
      })
      .catch(function(error) {
        console.log('Error fetching weather data:', error);
      });
  }
  
  
  function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayWeather(data);
      })
      .catch(function(error) {
        console.log('Error fetching weather data:', error);
      });
  }
  
  function displayWeather(data) {
    currentCity.textContent = data.city.name;
    currentTemperature.textContent = data.list[0].main.temp + '°F';
    currentHumidty.textContent = data.list[0].main.humidity + '%';
    currentWSpeed.textContent = data.list[0].wind.speed + ' m/s';
  
    const forecastElements = document.getElementsByClassName('forecast');
  
    for (let i = 0; i < forecastElements.length; i++) {
      const forecast = data.list[i * 8];
      const forecastDateElement = document.getElementById(`fDate${i}`);
      const forecastImgElement = document.getElementById(`fImg${i}`);
      const forecastTempElement = document.getElementById(`fTemp${i}`);
      const forecastHumidityElement = document.getElementById(`fHumidity${i}`);
      const forecastWindElement = document.getElementById(`fWind${i}`);
    
      forecastDateElement.textContent = forecast.dt_txt.substring(0, 10);
      forecastImgElement.innerHTML = `<img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">`;
      forecastTempElement.textContent = forecast.main.temp + '°F';
      forecastHumidityElement.textContent = forecast.main.humidity + '%';
      forecastWindElement.textContent = forecast.wind.speed + ' m/s';
    }
    
  }
  //clear history button
  let clearHistory = document.getElementById('clear-history');
  clearHistory.onClick =function() {
    localStorage.clear();
    clearSearchHistoryUI();
  }
   function clearSearchHistoryUI() {
    let cityElements =[cityOne, cityTwo, cityThree, cityFour, cityFive, citySix, citySeven, cityEight];
    cityElements.forEach((city)=>{
      city.textContent = "";
    });
   }
  
 
  




 


    

