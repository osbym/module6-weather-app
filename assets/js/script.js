// Get Current Weather
$(document).ready(function () {
    $(".searchBtn").on('click', function getWeather () {
        var cityName = $('cityInput').val().toUpperCase();
        // Open up Today's Date
        $('#today').text(moment().format('MMMM Do, YYYY'));
        // API for Current Weather
        var apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=5e20a8bcfbf39e871ed0d43a2ad4bfcb';

        // API for 5 Day Forecast
        var apiFore = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=5e20a8bcfbf39e871ed0d43a2ad4bfcb';


let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

var getCurrent = function() {
    fetch(apiCall).then(function(currentWeather){
        if(currentWeather.ok){
            currentWeather.json().then(function(weatherData) {
                //Get weather info
                var city = weatherData.name;
                var condition = weatherData.weather[0].icon;
                $("#city").text("The weather in " + city);
                var iconurl = "https://openweathermap.org/img/w/" + condition + ".png";
                $("#icon").attr('src', iconurl);
                var humidity = weatherData.main.humidity;
                $(".humid").text("Humidity: " + humidity + "%");
                var speed = weatherData.wind.speed;
                $(".speed").text("Wind Speed: " + speed + " MPH");
                var tempK = weatherData.main.temp;
                var tempF = Math.round((tempK - 273.15)*(9/5)+32);
                $(".temp").text("Temperature: " + tempF + "\xB0 F");

                

            }
        }
    }
}


}