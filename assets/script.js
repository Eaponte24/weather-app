var weather = {
    "apiKey": "b4487a30c014c23acd75ea48fb5430b8",

    fetchWeather: function(city) {

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json() )
        .then((data) =>  this.displayWeather(data));
    },

    displayWeather: function(data) {
       var {name} = data; 
       var {icon, description} = data.weather[0];
       var {temp, humidity } = data.main;
       var {speed} = data.wind

       console.log(name, icon, description, temp, humidity, speed)

       document.querySelector(".city").innerText = "Weather in " + name;
       document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
       document.querySelector(".description").innerText = description;
       document.querySelector(".temp").innerText = temp + "˚F";
       document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
       document.querySelector(".windspeed").innerText = "Wind Speed: " + speed + "Mph";
       
    },
   
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
  };

  document.querySelector(".search button").addEventListener('click', function(){
    weather.search();

  });

