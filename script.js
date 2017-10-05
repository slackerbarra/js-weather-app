$(document).ready(function(){
  var sForm = document.getElementById('simple');
  var state;
$(sForm.lastElementChild).mousedown(function(){
  $(".merlin-icon").addClass('.flipped');
$(sForm.lastElementChild).mouseup(function(){
  $(".merlin-icon").removeClass('.flipped');
  console.log(sForm.val())
  if(sForm.city.value){
      var cities =  sForm.city.value;
  }
  console.log('stored var', cities)
//   //retrieve our location info
   var locationData = $.get('https://ipapi.co/json/');
    var temp = document.querySelector(".temp");
    var myCity = document.querySelector(".city");
    var myState = document.querySelector(".state");
    var merlinIcon = document.querySelector(".merlin-icon");
   console.log(locationData);

//   //Make sure to declare variables to store data

    locationData.then(function(locationAPI, status){
     console.log(locationAPI.city);
    let lat = locationAPI.latitude;
    let lon = locationAPI.longitude;
    let city = cities;
    getWeatherData(lat, lon, city, state);

    console.log(`The longitude is: ${lat}`);

  // Declare location variables (lat, lon, city, state) then activate api call
   });

  function getWeatherData(lat, lon, city, state) {
    var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
    var apiKEY = 'ac3aaf635fa8ccdf51fac960eec79daf';
    var weatherData = $.getJSON(`${weatherAPI}q=${city}&appid&APPID=${apiKEY}`);


    weatherData.then(function(response, status){
      let myTemp = response.main.temp;
      temp.textContent = Math.round(myTemp * (9/5) - 459.67);
      myCity.innerHTML = response.name;
      console.log(myCity.innerHTML)
      myState.innerHTML = response.sys.country;


      // Insert your data into the html! hint: log the api response and see what data is available.
      console.log('RESPONSE',response);
    });
  }
    });
  });
});
