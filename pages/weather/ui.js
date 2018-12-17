class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
    this.forecastDay1 = document.getElementById('forecastDay1');
    this.forecastDay2 = document.getElementById('forecastDay2');
    this.forecastDay3 = document.getElementById('forecastDay3');
    this.forecastDay4 = document.getElementById('forecastDay4');
    this.forecastDay5 = document.getElementById('forecastDay5');
    this.forecastTemp1 = document.getElementById('forecastTemp1');
    this.forecastTemp2 = document.getElementById('forecastTemp2');
    this.forecastTemp3 = document.getElementById('forecastTemp3');
    this.forecastTemp4 = document.getElementById('forecastTemp4');
    this.forecastTemp5 = document.getElementById('forecastTemp5');
    this.forecastDesc1 = document.getElementById('forecastDesc1');
    this.forecastDesc2 = document.getElementById('forecastDesc2');
    this.forecastDesc3 = document.getElementById('forecastDesc3');
    this.forecastDesc4 = document.getElementById('forecastDesc4');
    this.forecastDesc5 = document.getElementById('forecastDesc5');
    this.forecastIcon1 = document.getElementById('forecastIcon1');
    this.forecastIcon2 = document.getElementById('forecastIcon2');
    this.forecastIcon3 = document.getElementById('forecastIcon3');
    this.forecastIcon4 = document.getElementById('forecastIcon4');
    this.forecastIcon5 = document.getElementById('forecastIcon5');

  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent =  weather.weather[0].description;
    this.temp.innerHTML = `${weather.main.temp}&#8457;`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind: ${weather.wind.speed}MPH`; 
  }
  fill(forecast) { 
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this.forecastDay1.innerHTML =  new Array(days[(new Date(forecast.list[2].dt_txt).getDay())], months[(new Date(forecast.list[2].dt_txt).getMonth())], (new Date(forecast.list[2].dt_txt).getDate())).toString().replace(/,/g," ");
    const ft1 = Math.round(forecast.list[2].main.temp);
    this.forecastTemp1.innerHTML = `${ft1}&#8457;`;
    this.forecastDesc1.textContent = forecast.list[2].weather[0].description;
    this.forecastIcon1.setAttribute('src', `http://openweathermap.org/img/w/${forecast.list[2].weather[0].icon}.png`);


    this.forecastDay2.innerHTML =  new Array(days[(new Date(forecast.list[10].dt_txt).getDay())], months[(new Date(forecast.list[10].dt_txt).getMonth())], (new Date(forecast.list[10].dt_txt).getDate())).toString().replace(/,/g," ");
    const ft2 = Math.round(forecast.list[10].main.temp);
    this.forecastTemp2.innerHTML = `${ft2}&#8457;`;
    this.forecastDesc2.textContent = forecast.list[10].weather[0].description;
    this.forecastIcon2.setAttribute('src', `http://openweathermap.org/img/w/${forecast.list[10].weather[0].icon}.png`);


    this.forecastDay3.innerHTML =  new Array(days[(new Date(forecast.list[18].dt_txt).getDay())], months[(new Date(forecast.list[18].dt_txt).getMonth())], (new Date(forecast.list[18].dt_txt).getDate())).toString().replace(/,/g," ");
    const ft3 = Math.round(forecast.list[18].main.temp);
    this.forecastTemp3.innerHTML = `${ft3}&#8457;`;
    this.forecastDesc3.textContent = forecast.list[18].weather[0].description;
    this.forecastIcon3.setAttribute('src', `http://openweathermap.org/img/w/${forecast.list[18].weather[0].icon}.png`);


    this.forecastDay4.innerHTML =  new Array(days[(new Date(forecast.list[26].dt_txt).getDay())], months[(new Date(forecast.list[26].dt_txt).getMonth())], (new Date(forecast.list[26].dt_txt).getDate())).toString().replace(/,/g," ");
    const ft4 = Math.round(forecast.list[26].main.temp);
    this.forecastTemp4.innerHTML = `${ft4}&#8457;`;
    this.forecastDesc4.textContent = forecast.list[26].weather[0].description;
    this.forecastIcon4.setAttribute('src', `http://openweathermap.org/img/w/${forecast.list[26].weather[0].icon}.png`);


    this.forecastDay5.innerHTML =  new Array(days[(new Date(forecast.list[34].dt_txt).getDay())], months[(new Date(forecast.list[34].dt_txt).getMonth())], (new Date(forecast.list[34].dt_txt).getDate())).toString().replace(/,/g," ");
    const ft5 = Math.round(forecast.list[34].main.temp);
    this.forecastTemp5.innerHTML = `${ft5}&#8457;`;
    this.forecastDesc5.textContent = forecast.list[34].weather[0].description;
    this.forecastIcon5.setAttribute('src', `http://openweathermap.org/img/w/${forecast.list[34].weather[0].icon}.png`);
  }
}