var weatherForecast = {
    "apiKey": "b4487a30c014c23acd75ea48fb5430b8",

    fetchForecast: function(city) {

        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json() )
        .then((data) => this.displayForecast(data));
    }, 
        // this is displaying the forecast ont he right 
        displayForecast: function(data) {
        
        var {icon, description} = data.list[0].weather[0];
        var {temp, humidity } = data.list[0].main;
        var {speed} = data.list[0].wind;

        
 
        console.log(day, icon, description, temp, humidity, speed)
 
        document.querySelector(".icon-a").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description-a").innerText = description;
        document.querySelector(".temp-a").innerText = temp + "˚F";
        document.querySelector(".humidity-a").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".windspeed-a").innerText = "Wind Speed: " + speed + "Mph";
        
        var {icon, description} = data.list[1].weather[0];
        var {temp, humidity } = data.list[1].main;
        var {speed} = data.list[1].wind;

        document.querySelector(".icon-b").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description-b").innerText = description;
        document.querySelector(".temp-b").innerText = temp + "˚F";
        document.querySelector(".humidity-b").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".windspeed-b").innerText = "Wind Speed: " + speed + "Mph";

        var {icon, description} = data.list[2].weather[0];
        var {temp, humidity } = data.list[2].main;
        var {speed} = data.list[2].wind;

        document.querySelector(".icon-c").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description-c").innerText = description;
        document.querySelector(".temp-c").innerText = temp + "˚F";
        document.querySelector(".humidity-c").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".windspeed-c").innerText = "Wind Speed: " + speed + "Mph";

        var {icon, description} = data.list[3].weather[0];
        var {temp, humidity } = data.list[3].main;
        var {speed} = data.list[3].wind;

        document.querySelector(".icon-d").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description-d").innerText = description;
        document.querySelector(".temp-d").innerText = temp + "˚F";
        document.querySelector(".humidity-d").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".windspeed-d").innerText = "Wind Speed: " + speed + "Mph";

        var {icon, description} = data.list[4].weather[0];
        var {temp, humidity } = data.list[4].main;
        var {speed} = data.list[4].wind;

        document.querySelector(".icon-e").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description-e").innerText = description;
        document.querySelector(".temp-e").innerText = temp + "˚F";
        document.querySelector(".humidity-e").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".windspeed-e").innerText = "Wind Speed: " + speed + "Mph";
     },
    
     search: function(){
         this.fetchForecast(document.querySelector('.search-bar').value)
     }
   };
 
   document.querySelector(".search button").addEventListener('click', function(){
     weatherForecast.search();
 
   });
   
