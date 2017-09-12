$(document).ready(function(){
//   //retrieve our location info
   let locationData = $.get('https://ipapi.co/json/');
    var temp = document.querySelector(".temp");
    var myCity = document.querySelector(".city");
    var myState = document.querySelector(".state");
    var weatherIcon = document.querySelector(".weather-icon");
   console.log(locationData);

//   //Make sure to declare variables to store data

    locationData.then(function(locationAPI, status){
//     console.log(locationAPI.city);
    let lat = locationAPI.latitude;
    let lon = locationAPI.longitude;
    let city = locationAPI.city;
    let state = locationAPI.region;
    getWeatherData(lat, lon, city, state);

    console.log(`The longitude is: ${lat}`);

  // Declare location variables (lat, lon, city, state) then activate api call
   });

  function getWeatherData(lat, lon, city, state) {
    var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
    var apiKEY = 'ac3aaf635fa8ccdf51fac960eec79daf';
    var weatherData = $.getJSON(`${weatherAPI}lat=${lat}&lon=${lon}&APPID=${apiKEY}`);


    weatherData.then(function(response, status){
      let myTemp = response.main.temp;
      temp.textContent = Math.round(myTemp);
      // Insert your data into the html! hint: log the api response and see what data is available.
      console.log(response);
    });
   }
});
