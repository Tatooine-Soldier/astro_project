<script setup>
import PlanetsInfoComponent from "../components/PlanetsInfoComponent.vue"
</script>

<template>
    Celestial chart
    <!-- <p>Celestial chartCelestial chartCelestial chartCelestial chartCelestial chartCelestial chart</p> -->
    
    <PlanetsInfoComponent :planetData="planetsProp"></PlanetsInfoComponent>
</template>

<style>
    p {
        margin: 0%;
    }

</style>

<script>
    import { ref } from 'vue'
    export default {
        data() {
            return {
                planetData: [],
                infoMetrics: {},
                planets: [],
                planetsProp: {},
            }
        }, 
        mounted() {
            this.getUserCoordinates().then((coords) => {
                var locs = coords
                console.log("locs-->", locs)
            
            

                var applicationId = "9a04b77b-eefb-475b-9faf-0fae016fa846"
                var applicationSecret = "12663d817fa2cca98ddbfae137dd264c16001b050c74cd18085246be577f9fa01ad42d5ad34fbedfb12d4340f0a887008dc79035e4eeea13c51502257251ee3ff369d39849fde94d36f04ec8255ae6b7e6ff85693b30ac0561ba45aa51906f2aad5d81df4a8846ef12d63da56f965b54"
                const authString = btoa(`${applicationId}:${applicationSecret}`);

                //'https://api.astronomyapi.com/api/v2/bodies/positions?latitude=-84.39733&longitude=33.775867&elevation=50&from_date=2022-02-20&to_date=2022-02-21&time=08:00:00'
                var url = "https://api.astronomyapi.com/api/v2/bodies/positions?latitude="+locs.lat+"&longitude="+locs.lng+"&elevation=50&from_date=2022-02-20&to_date=2022-02-21&time=08:00:00"
                fetch(url, {
                headers: {
                    'Authorization': 'Basic ' + authString
                }
                })
                .then(response => {
                // Handle the response
                console.log("astro_api response", response.json().then(data => {
                    console.log("data charts", data.data.table.rows)
                    this.planets = data.data.table.rows
                    for (var i = 0; i < this.planets.length; i++) {
                        this.planetData.push(this.planets[i].entry.id)
                        this.infoMetrics[i] = this.planets[i].cells[0]
                    }
                    this.planetsProp = {
                        planetNames: this.planetData,
                        planetInfo: this.infoMetrics
                    }
                    console.log("listed planet names", this.planetData, this.infoMetrics)
                    
                }));
                })
                .catch(error => {
                // Handle the error
                    console.error("couldn't fetch response")
                });
            })
           
        },
        methods: {
            getUserCoordinates() {
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
        }
    }

</script>