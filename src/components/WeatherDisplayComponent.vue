<template>
   <section class="weather-component-container">
        
        <section class="weather-today">
            <section class="weather-today-inner">
                <b id="today-title">{{ daily.timeDays[0] }}, {{ daily.timeDates[0] }}</b>
                <section class="weather-today-details">
                    <section>
                        <section v-if="cloud">
                            <img src="../assets/large-weather.png" class="big-weather-image"/>
                        </section>
                        <section v-if="lightning">
                            <img src="../assets/large-weather-lightning.png" class="big-weather-image"/>
                        </section>
                        <section v-if="fullRain">
                            <img src="../assets/large-weather-fullRain.png" class="big-weather-image"/>
                        </section>
                        <section v-if="halfRain">
                            <img src="../assets/large-weather-haflRain.png" class="big-weather-image"/>
                        </section>
                        <section v-if="halfSun">
                            <img src="../assets/large-weather-cloudSun.png" class="big-weather-image"/>
                        </section>
                        <section v-if="sun">
                            <img src="../assets/sun.png" class="big-weather-image"/>
                        </section>
                        <section v-else>
                            
                        </section>
                    </section>
                    <section class="weather-today-details-side">
                        <div class="details-side">Max Temperature: {{ daily.maxTemp[0] }}&deg;C</div>
                        <div class="details-side">Min Temperature: {{ daily.minTemp[0] }}&deg;C</div>
                        <div class="details-side">Total Predicted Precipitation: {{ daily.precipitationAmount[0] }}mm</div>
                    </section>
                </section>
            </section>
        </section>
        <section class="weather-five-day">
            <section class="weather-cards" v-for="n in 5" :key="n">
                <div class="card-heading">{{ daily.timeDays[n] }}</div>
                <section class="small-icon-container">
                    <section v-if="smallArray[n] === 'cloud'">
                        <img src="../assets/SMALL-large-weather.png" />
                    </section>
                    <section v-if="smallArray[n] === 'lightning'">
                        <img src="../assets/SMALL-large-weather.png" />
                    </section>
                    <section v-if="smallArray[n] === 'fullRain'">
                        <img src="../assets/SMALL-large-weather-fullRain.png" />
                    </section>
                    <section v-if="smallArray[n] === 'halfRain'">
                        <img src="../assets/SMALL-large-weather-haflRain.png" />
                    </section>
                    <section v-if="smallArray[n] === 'halfSun'">
                        <img src="../assets/SMALL-large-weather-cloudSun.png" />
                    </section>
                    <section v-if="smallArray[n] === 'sun'">
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
        margin: 2%;
        margin-left: 1.5%;
        margin-right: 1.5%;
        padding: 2%;
        display: grid;
        grid-template-rows: auto;
    }

    .weather-cards:hover {
        cursor: pointer;
        background-color: #4b4b4b;
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

    @media screen and (max-width: 650px) {

        .big-weather-image {
            width: 100px;
            height: 90px;
        }

        .weather-today-inner {
            width: 90%;
        }

        .weather-today-details-side {
            font-size: 1em;;
        }

        .weather-five-day {
            display: grid;
            grid-template-columns: auto;
        }

        .weather-cards {
            width: 300px;
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
    export default {
    data() {
        return {
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
            smallArray: []
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
        }
    },
    mounted() {
        this.calculateWeatherIconToday();
        this.calculateSmallWeatherIcon()
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
        }
    }
}
</script>
