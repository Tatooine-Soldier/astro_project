<script setup>
    import WeatherDisplayComponent from "../components/WeatherDisplayComponent.vue" 
</script>

<template>
    <section>
        <section class="weather-container">
            <section>
                Today's Weather Forecast:
                <section v-if="dailyWeatherData">
                    <WeatherDisplayComponent :daily="dailyWeatherData" :hourly="weatherData"></WeatherDisplayComponent>
                </section>
                
            </section>
        </section>
        <section class="underdevelopment">UNDER DEVELOPMENT</section>
    </section>
</template>

<style>
.underdevelopment {
    font-size: 2.5em;;
    padding: 20%;
    display: none;
    justify-content: center;

}

.weather-container {
    padding: 1%;
    padding-top: 2%;;
    padding-bottom: 10%;;
}

@media screen and (max-width: 650px) {
    .weather-container {
        padding-top: 8%;;
    }
}

@media screen and (max-width: 450px) {
    .weather-container {
        padding-top: 11%;;
    }
}

@media screen and (max-width: 400px) {
    .weather-container {
        padding-top: 15%;;
    }
}

</style>

<script>
import { getUserCoordinates } from "../getUserCoordinates"

export default {
    data() {
        return {
            weatherData: "",
            cloudcoverArray: [],
            precipitationArray: [],
            temperatureArray: [],
            dailyWeatherData: "",
        }
    }, 
    mounted() {
        this.getWeather()
    },
    methods: {
        getWeather() {
            getUserCoordinates().then((coords) => {
                var locs = {
                    lat: coords.lat.toString(),
                    lng: coords.lng.toString()
                }
                var lat = locs.lat
                var lng = locs.lng
                console.log(locs.lat)

                
                
                var res = fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lng+"&hourly=temperature_2m,precipitation_probability,rain,cloudcover")
                res.then((weatherInfo) => weatherInfo.json())
                .then((data) => {
                    this.weatherData = data
                    for (var i = 0; i < this.weatherData.hourly.time.length; i++) {
                        this.cloudcoverArray[i] = this.weatherData.hourly.cloudcover[i]
                        this.precipitationArray[i] = this.weatherData.hourly.precipitation_probability[i]
                        this.temperatureArray[i] = this.weatherData.hourly.temperature_2m[i]
                    }
                    console.log("fetched hourly weather-->", this.weatherData, this.cloudcoverArray, this.precipitationArray, this.temperatureArray)
                })
                .catch((error) => {
                    console.log("error: ", error)
                })

                res = fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lng+"&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum,precipitation_hours&timezone=GMT")
                res.then((dailyData) => dailyData.json()) 
                .then((data) => {
                    this.dailyWeatherData = {
                        maxTemp: data.daily.temperature_2m_max,
                        minTemp: data.daily.temperature_2m_min,
                        precipitationAmount: data.daily.precipitation_sum,
                        timeDates: data.daily.time,
                        timeDays: []

                    }

                    for (var date in data.daily.time) {
                        const dateObject = new Date(data.daily.time[date]);
                        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        const dayOfWeekIndex = dateObject.getDay();
                        const dayOfWeek = daysOfWeek[dayOfWeekIndex];

                        this.dailyWeatherData.timeDays[date] = dayOfWeek
                        
                    }
                    console.log("this.dailyWeatherData-->", this.dailyWeatherData)

                    
                    
                })

                
            })

            

        }
    }
}
</script>
