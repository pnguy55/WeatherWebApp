var celsius;
var farenheit;

navigator.geolocation.getCurrentPosition(function(position) {

    var pos = [];
    pos[0] = position.coords.latitude;
    pos[1] = position.coords.longitude;
    var weatherAPI ="https://fcc-weather-api.glitch.me/api/current?lat=" +pos[0]+ "&lon=" + pos[1];

    $.getJSON(weatherAPI, function(data) {

      $(".weather-img").html('<img src =' +  data.weather[0].icon + '>');
      
      $(".location").html("Location: "+data.name);
       
      $(".conditions").html("Status: "+data.weather[0].main);
      
      /*Show default farenheit*/
      celsius = Math.round(data.main.temp);
      farenheit = Math.round(celsius*(9/5)+32) ;
      $(".temp").html(farenheit);
      $(".F-C").html("<a onclick='showCelsius()' class= 'farenheit' href=#><img src='https://drive.google.com/uc?id=1DfZKrxLECThsfedQ5EUkXeIoA8LtBR9-'></img></a>");
          
    });

  });

function showCelsius(){
      $(".temp").html(celsius);
      $(".F-C").html("<a onclick='showFarenheit()' class= 'farenheit' href=#><img src='https://drive.google.com/uc?id=1YEYIxFT3upCbyY1_rLIua1-hp2zab7a9'></img></a>");
    }

function showFarenheit(){
      $(".temp").html(farenheit);
      $(".F-C").html("<a onclick='showCelsius()' class= 'farenheit' href=#><img src='https://drive.google.com/uc?id=1DfZKrxLECThsfedQ5EUkXeIoA8LtBR9-'></img></a>");
}