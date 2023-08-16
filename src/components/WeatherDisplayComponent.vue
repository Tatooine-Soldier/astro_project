<template>
   <section class="weather-component-container">
        
        <section class="weather-today">
            <section class="weather-today-inner">
                <b id="today-title">{{ daily.timeDays[weatherIndex] }}, {{ daily.timeDates[weatherIndex] }}</b>
                <section class="weather-today-details">
                    <section>
                        <section v-if="cloud">
                            <img src="../assets/large-weather.png" alt="cloudy" class="big-weather-image" id="big-weather-image"/>
                        </section>
                        <section v-if="lightning">
                            <img src="../assets/large-weather-lightning.png" alt="lightning" class="big-weather-image" id="big-weather-image"/>
                        </section>
                        <section v-if="fullRain">
                            <img src="../assets/large-weather-fullRain.png" alt="Heavy Rain" class="big-weather-image" id="big-weather-image"/>
                        </section>
                        <section v-if="halfRain">
                            <img src="../assets/large-weather-haflRain.png" alt="Light Rain" class="big-weather-image" id="big-weather-image"/>
                        </section>
                        <section v-if="halfSun">
                            <img src="../assets/large-weather-cloudSun.png" alt="Broken Sunshine" class="big-weather-image" id="big-weather-image"/>
                        </section>
                        <section v-if="sun">
                            <img src="../assets/sun.png" alt="Sunshine" class="big-weather-image" id="big-weather-image"/>
                        </section>
                        <section v-else>
                            
                        </section>
                    </section>
                    <section class="weather-today-details-side">
                        <div class="details-side">Max Temperature: <b>{{ daily.maxTemp[weatherIndex] }}&deg;C</b></div>
                        <div class="details-side">Min Temperature: <b>{{ daily.minTemp[weatherIndex] }}&deg;C</b></div>
                        <div class="details-side">Total <div id="word-precipitation">Predicted</div> Precipitation: <b>{{ daily.precipitationAmount[weatherIndex] }}mm</b></div>
                        <div v-if="hourlyReady">{{ hourlyData.timeList[0] }}</div>
                    </section>
                </section>
            </section>
        </section>
        <section class="weather-five-day">
            <section class="weather-cards" v-for="n in 5" :key="n">
                <div class="card-heading">{{ daily.timeDays[n] }}</div>
                <section class="small-icon-container">
                    <section v-if="smallArray[n] === 'cloud'" @click="logClick(n)">
                        <img src="../assets/SMALL-large-weather.png" />
                    </section>
                    <section v-if="smallArray[n] === 'lightning'">
                        <img src="../assets/SMALL-large-weather.png" />
                    </section>
                    <section v-if="smallArray[n] === 'fullRain'" @click="logClick(n)">
                        <img src="../assets/SMALL-large-weather-fullRain.png" />
                    </section>
                    <section v-if="smallArray[n] === 'halfRain'" @click="logClick(n)">
                        <img src="../assets/SMALL-large-weather-haflRain.png" />
                    </section>
                    <section v-if="smallArray[n] === 'halfSun'" @click="logClick(n)">
                        <img src="../assets/SMALL-large-weather-cloudSun.png" />
                    </section>
                    <section v-if="smallArray[n] === 'sun'" @click="logClick(n)">
                        <img src="../assets/SMALL-sun.png" />
                    </section>
                    <section v-else>
                        
                    </section>
                </section>
                <div>{{ daily.minTemp[n] }}&deg;C - {{ daily.maxTemp[n] }}&deg;C</div>
            </section>
        </section>
       
   </section>
    
</template>

<style>
    .weather-component-container {
        
        padding: 2%;
    }

    .weather-today {
        border-bottom: white solid 1px;
        display: flex;
        justify-content: center;
        padding-bottom: .5%;;
        width: 100%;
    }

    .weather-today-inner {
        display: grid;
        grid-template-rows: auto auto;;
        width: 80%;
    }

    .weather-today-details {
        display: grid;
        grid-template-columns: 60% 40%;
    }

    .weather-cards {
        border: blue solid .5px;
        background-color: #414141;
        margin: 2%;
        margin-left: 1.5%;
        margin-right: 1.5%;
        padding: 2%;
        display: grid;
        grid-template-rows: auto;
        box-shadow: 7px 10px 5px #2f2f2f;;
    }

    .weather-cards:hover {
        cursor: pointer;
        transform: scale(1.1);

    }

    .weather-five-day { 
        display: flex;
        justify-content: center;
    }

    .weather-today-details-side {
        font-size: 1.5em;;
    }

    .details-side {
        padding-top: 3%;
        padding-bottom: 3%;
    }

    .small-icon-container {
        display: flex;
        justify-content: center;
        margin-bottom: 10%;;
    }

    .card-heading {
        font-size: 1.3em;
        text-align: center;
    }

    #today-title {
        font-size: 2em;;
    }

    #big-weather-image {

    }

    @media screen and (max-width: 650px) {

        .big-weather-image {
            width: 100px;
            height: 90px;
        }

        .weather-today-inner {
            width: 95%;
        }

        .weather-today-details {
            display: grid;
            grid-template-columns: 55% 45%;;
        }

        .weather-today-details-side {
            font-size: 1.1em;;
        }

        .weather-five-day {
            display: grid;
            grid-template-columns: auto;
            row-gap: 1%;
            padding-top: 5%;
        }

        .weather-cards {
            width: 300px;
        }

        .weather-today {
            padding-bottom: 6%;;
        }

        #word-precipitation {
            display: none;
        }
    }


    @media screen and (max-width: 450px) {
        .weather-five-day {
            display: grid;
            grid-template-columns: auto;
        }

        .weather-cards {
            width: 250px;
        }
    }
</style>

<script>
    import { ref, watch } from 'vue';

    export default {
    data() {
        return {
            hourlyData: {},
            hourlyReady: false,
            fullRain: false,
            halfRain: false,
            lightning: false,
            cloud: false,
            halfSun: false,
            sun: false,
            smallFullRain: "fullRain",
            smallHalfRain: "halfRain",
            smallLightning: "lightning",
            smallCloud: "cloud",
            smallHalfSun: "halfSun",
            smallSun: "sun",
            smallArray: [],
            weatherIndex: 0
            // smallFullRain: false,
            // smallHalfRain: false,
            // smallLightning: false,
            // smallCloud: false,
            // smallHalfSun: false,
            // smallSun: false
        }
    },
    props: {
        daily: {
            type: Object
        },
        hourly: {
            type: Object
        }
    },

    mounted() {
        this.calculateWeatherIconToday();
        this.calculateSmallWeatherIcon();
    },

    updated() {
        this.aggregateHourly()
    },
    methods: {
        calculateWeatherIconToday() {
            var today = this.daily.precipitationAmount[0]
            if (today === 0.0) {
                this.sun = true
            } else if (today >= 0.0 && today < 0.1 ) { // dry
                this.halfSun = true
            } else if ( today >= 0.11 && today < 1.0) { // half wet
                this.halfRain = true
            } else {
                this.fullRain = true
            }
        },
        calculateSmallWeatherIcon() {
            var daysArray = [] // contains all trues 
            for (var day in this.daily.precipitationAmount) {
                var today = this.daily.precipitationAmount[day]
                if (today === 0.0) {  
                    daysArray.push(this.smallSun)
                } else if (today >= 0.0 && today < 0.1 ) { // dry  
                    daysArray.push(this.smallHalfSun)
                } else if ( today >= 0.11 && today < 1.0) { // half wet 
                    daysArray.push(this.smallHalfRain)
                } else {
                    daysArray.push(this.smallFullRain)
                }
                console.log("daysArray-->",daysArray)
            }
            this.smallArray = daysArray
        },
        logClick(index) {
            console.log("logIndex==> ", index)
            this.weatherIndex = index
            console.log(this.smallArray[index])
            switch(this.smallArray[index]) {
                case "sun": 
                    this.sun = true;
                    this.fullRain = false;
                    this.halfRain = false;
                    this.halfSun = false;
                    this.cloud = false;
                    break;
                case "fullRain":
                    this.sun = false;
                    this.fullRain = true;
                    this.halfRain = false;
                    this.halfSun = false;
                    this.cloud = false;
                    break;
                case "halfRain":
                    this.sun = false;
                    this.fullRain = false;
                    this.halfRain = true;
                    this.halfSun = false;
                    this.cloud = false;
                    break;
                case "cloud":
                    this.sun = false;
                    this.fullRain = false;
                    this.halfRain = false;
                    this.halfSun = false;
                    this.cloud = true;
                    break;
            }
        },
        aggregateHourly() {
            console.log("hourly hourly-->", this.hourly.hourly)
            var listOfLists = []
            var listOfHours = [] //7 lists in a list, each list contains the hours of that day
            var i = 0;
            for (var hour in this.hourly.hourly.time) {
                if (i !== 24 ) {
                    listOfHours.push(this.hourly.hourly.time[hour])
                } else {
                    listOfLists.push(listOfHours)
                    listOfHours = []
                    listOfHours.push(this.hourly.hourly.time[hour])
                    i = 0
                }
                i += 1
            }

            var listOfListsClouds = []
            var listOfClouds = []
            i = 0
            for (var cloud in this.hourly.hourly.cloudcover) {
                if (i !== 24 ) {
                    listOfClouds.push(this.hourly.hourly.cloudcover[cloud])
                } else {
                    listOfListsClouds.push(listOfClouds)
                    listOfClouds = []
                    listOfClouds.push(this.hourly.hourly.cloudcover[cloud])
                    i = 0
                }
                i += 1
            }

            var listOfListsPrecipitation = []
            var listOfPrecipitation = []
            i = 0
            for (var rain in this.hourly.hourly.precipitation_probability) {
                if (i !== 24 ) {
                    listOfPrecipitation.push(this.hourly.hourly.precipitation_probability[rain])
                } else {
                    listOfListsPrecipitation.push(listOfPrecipitation)
                    listOfPrecipitation = []
                    listOfPrecipitation.push(this.hourly.hourly.precipitation_probability[rain])
                    i = 0
                }
                i += 1
            }
            this.hourlyData = {
                timeList: listOfLists,
                cloudList: listOfListsClouds,
                precipitationList: listOfListsPrecipitation
            }
            this.hourlyReady = true
           
        }
    }
}
</script>
