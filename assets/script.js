const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const clearHistory = document.getElementById('clear-history');

document.getElementById('search-button').addEventListener('click', function(){
    console.log(searchBar.value);
})
document.getElementById('clear-history').addEventListener('click', function(){
    console.log(searchBar.value);
})
