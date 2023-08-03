<template>
   <section class="weather-component-container">
        
        <section class="weather-today">
            <section class="weather-today-inner">
                <b id="today-title">{{ daily.timeDays[0] }}, {{ daily.timeDates[0] }}</b>
                <section class="weather-today-details">
                    <div>Max Temperature: {{ daily.maxTemp[0] }}&deg;C</div>
                    <div>Min Temperature: {{ daily.minTemp[0] }}&deg;C</div>
                    <div>Total Predicted Precipitaion: {{ daily.precipitationAmount[0] }}mm</div>
                </section>
            </section>
        </section>
        <section class="weather-five-day">
            <section class="weather-cards" v-for="n in 5" :key="n">
                <div>{{ daily.timeDays[n] }}</div>
                <div>Max Temperature: {{ daily.maxTemp[n] }}&deg;C</div>
            </section>
        </section>
   </section>
    
</template>

<style>
    .weather-component-container {
        border: solid var(--primary-light) 1px;
        padding: 2%;
    }

    .weather-today {
        border-bottom: white solid 1px;
        display: flex;
        justify-content: center;
        padding-bottom: .5%;;
    }

    .weather-today-inner {
        display: grid;
        grid-template-rows: auto auto;;
    }

    .weather-cards {
        border: blue solid .5px;
        margin: 2%;
        margin-left: 1.5%;
        margin-right: 1.5%;
        padding: 2%;
        display: grid;
        grid-template-rows: auto auto ;
    }

    .weather-cards:hover {
        cursor: pointer;
        background-color: #4b4b4b;
    }

    .weather-five-day { 
        display: flex;
        justify-content: center;
    }

    #today-title {
        font-size: 2em;;
    }

    @media screen and (max-width: 650px) {
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

        }
    },
    props: {
        daily: {
            type: Object
        }
    }
}
</script>
