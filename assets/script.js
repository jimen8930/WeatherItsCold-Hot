const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-history');
const currentCity = document.getElementById('current-city');
const currentTemperature = document.getElementById('temperature');
const currentHumidty= document.getElementById('humidity');
const currentWSpeed= document.getElementById('wind-speed');
let city =""

document.getElementById('search-button').addEventListener('click', function(){
    console.log(searchBar.value);
})
document.getElementById('clear-history').addEventListener('click', function(){
    console.log(searchBar.value);
})
let sCity=[];