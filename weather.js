function getWeather(){
    let cityName = $('#cityName').val()
    let apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=91006de1fd7d51243a4c1d1d86224798&lang=it`
    
    $.getJSON(apiWeather, weatherCallback);
    function weatherCallback(weatherData) {
      let cityName = weatherData.name;
      let weatherMain = weatherData.weather[0].main;
      let weatherDescr = weatherData.weather[0].description;
      let weatherTemp =  (weatherData.main.temp - 273.15).toFixed(1);
      let weatherWind = weatherData.wind.speed;
      let weatherHum = weatherData.main.humidity;
      let weatherIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
          console.log(weatherData);

          $('#city').html(cityName.toUpperCase());
          //$('#main').html(weatherMain.toUpperCase());
          $('#descr').html(weatherDescr.toUpperCase());
          $('#temp').html(`${weatherTemp.toUpperCase()}°C`);
          $('#icon').attr('src', weatherIcon);
          $('#vento').html(`${weatherWind} m/s`);
          $('#hum').html(`${weatherHum}%`);
        
          
    }  

  }

 