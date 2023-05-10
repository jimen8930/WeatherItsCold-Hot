
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-history');
const currentCity = document.getElementById('current-city');
const currentTemperature = document.getElementById('temperature');
const currentHumidty= document.getElementById('humidity');
const currentWSpeed= document.getElementById('wind-speed');
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
  }
  
  function onClear() {
     searchBar.value = '';
   }
  
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
  
  function displayWeather(data) {
    currentCity.textContent = data.name;
    currentTemperature.textContent = data.main.temp + '°C';
    currentHumidty.textContent = data.main.humidity + '%';
    currentWSpeed.textContent = data.wind.speed + ' m/s';
  }




 


    

