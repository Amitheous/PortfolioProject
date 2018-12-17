// Init Storage
const storage = new Storage();
  // Get Stored Location data
const weatherLocation = storage.getLocationData();
// Init weather Object
const weather = new Weather(weatherLocation.zip);
// Init UI Object
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const zip = document.getElementById('zip').value;

  weather.changeLocation(zip);

  storage.setLocationData(zip);

  // Get Weather Updated
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));

    weather.getForecast()
      .then(results => ui.fill(results)); 
}