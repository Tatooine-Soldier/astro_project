import { ref } from "vue"

export async function getUserCoordinates() {
    return new Promise((resolve, reject) => {
        var lat =  ref(null)
        var lng = ref(null)

        setTimeout(() => {
            if ("geolocation" in navigator) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(
                function(position) {
                // Retrieve the latitude and longitude coordinates
                lat.value = position.coords.latitude;
                lng.value = position.coords.longitude;

                // Do something with the coordinates
                console.log("Latitude: " + lat.value);
                console.log("Longitude: " + lng.value);

                resolve({lat: lat.value, lng: lng.value})
                },
                function(error) {
                // Handle any errors that occur while retrieving the position
                console.log("Error getting location: " + error.message);
                }
            );
            } else {
                // Geolocation is not supported by the browser
                console.log("Geolocation is not supported by this browser.");
                resolve({lat: 0, lng: 0})
            }
        }, 1000)
    })
}