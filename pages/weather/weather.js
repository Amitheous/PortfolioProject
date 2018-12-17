const getZip = () => {
  if(localStorage.getItem('zip') !== null) {
    return localStorage.getItem('zip');
} else {
  return 10029;
}
}

class Weather {
  constructor() {
    this.apiKey = '304fdfd3359963ec37c38ac63b371eec';
    this.zip = getZip();
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&units=imperial&APPID=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }

  async getForecast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.zip},us&units=imperial&APPID=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }

  changeLocation(zip) {
    this.zip = zip;
  }
}