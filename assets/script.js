
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-history');
const currentCity = document.getElementById('current-city');
const currentTemperature = document.getElementById('temperature');
const currentHumidty= document.getElementById('humidity');
const currentWSpeed= document.getElementById('wind-speed');
const searchHistory=document.getElementById('search-history');
let APIKey = "95719a559a5afa0b90a3b42001df26ad"

 document.getElementById('search-button').addEventListener('click', function(){
     console.log(searchBar.value);
 })
 document.getElementById('clear-history').addEventListener('click', function(){
    console.log(searchBar.value);
})


//  function onClick() {
   
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=" + searchBar.value + "&appid=" + APIKey).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data);
//     console.log(data.coord.lat);
//     displayWeather(data);
// }).catch(function(err){
//     console.log(err);
// })
    
    
//  }
function onClick() {
    const city = searchBar.value.trim();
    if (city !== '') {
      fetchWeather(city);
      searchBar.value = '';
    }
    var values = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id')
    localStorage.setItem(city, values)
  }
  
  // function onClear() {
  //    searchBar.value = '';
  //  }
  
  function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
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
  
    for (let i = 1; i < forecastElements.length + 1; i++) {
      const forecast = data.list[i * 8];
      const forecastDateElement = document.getElementById(`fDate${i - 1}`);
      const forecastImgElement = document.getElementById(`fImg${i - 1}`);
      const forecastTempElement = document.getElementById(`fTemp${i - 1}`);
      const forecastHumidityElement = document.getElementById(`fHumidity${i - 1}`);
      const forecastWindElement = document.getElementById(`fWind${i - 1}`);
  
      forecastDateElement.textContent = forecast.dt_txt.substring(0, 10);
      forecastImgElement.innerHTML = `<img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">`;
      forecastTempElement.textContent = forecast.main.temp + '°F';
      forecastHumidityElement.textContent = forecast.main.humidity + '%';
      forecastWindElement.textContent = forecast.wind.speed + ' m/s';
    }
  }
  
 
  




 


    

