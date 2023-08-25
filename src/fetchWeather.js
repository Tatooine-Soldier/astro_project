import { getUserCoordinates } from './getUserCoordinates.js';

export function getWeather() {
  return new Promise((resolve, reject) => {
    getUserCoordinates()
      .then((coords) => {
        var locs = {
          lat: coords.lat.toString(),
          lng: coords.lng.toString()
        };
        var lat = locs.lat;
        var lng = locs.lng;

        var url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lng + "&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum,precipitation_hours&timezone=GMT";
        
        fetch(url)
          .then((dailyData) => dailyData.json())
          .then((data) => {
            resolve(data); 
          })
          .catch((error) => {
            reject(error); 
          });
      })
      .catch((error) => {
        reject(error); // Reject the promise if an error occurs while getting user coordinates
      });
  });
}
