<script setup>
import PlanetModalComponent from "../components/PlanetModalComponent.vue"
</script>

<template>
    <section class="planet-info-container">
        <div id="planet-heading"><h3>Planets</h3></div> 
        <section class="inner-planets">
            <div v-for="item, index in parsedNames" :key="index" v-on:click="displayPlanetInfo(index)" class="planet-cells">
                {{ item }}
            </div>
        </section>
        <section>
            <section class="displayPlanetInfo">
                {{ parsedInfo }}
                    <PlanetModalComponent :clickInfo=clickedInfo></PlanetModalComponent>
            </section>
            
        </section>
        
    </section>
</template>

<style>
    .planet-info-container {
        
        padding: 1%;
    }

    .inner-planets {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto; 
        border-bottom: solid var(--primary-light) 1px;
        border-top: solid var(--primary-light) 1px;
    }

    .planet-cells {
        padding: 4%;
        text-align: center;
    }

    .planet-cells:hover {
        background-color: var(--primary-dark);
        cursor: pointer;
    }

    #planet-heading {
        text-align: center;
        font-size: 25pt;;
    }

    

    .displayPlanetInfo {
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 3% 0%;
    } 

</style>

<script>
import { onMounted } from 'vue';
import Planet from '../PlanetClass.js'


    export default {
        data() {
            return {
                planetDistances: [],
                planetObjs: [],
                clickedInfo: {
                    name: null,
                    order: null,
                    distance: null,
                    rising: null,
                    magnitude: null
                }
            }
        },
        props: {
            planetData: Object,
        },
        computed: {
            parsedNames() {
                const names = this.planetData.planetNames
                return names
            },
            parsedInfo() {

                var infoNames = this.planetData.planetNames
                var infoDistance = this.planetData.planetDistances
                var infoRising = this.planetData.planetRising
                var infoMagnitude = this.planetData.planetMagnitude

                console.log("planet props: ", infoNames, infoDistance, infoRising, infoMagnitude)

                var planetArray = this.initPlanets()
                

                if (typeof infoNames !== 'undefined') {
                    var infoNames = this.planetData.planetNames
            
                    for (var i = 0; i<planetArray.length; i++) { 
                        planetArray[i].name = infoNames[i]
                    }
                    
                }

                if (typeof infoDistance !== 'undefined') {
                    var infoDistance = this.planetData.planetDistances
                    
                    for (var i = 0; i<planetArray.length; i++) { 
                        planetArray[i].distance = infoDistance[i]
                    }

                }

                if (typeof infoRising !== 'undefined') {
                    var infoRising = this.planetData.planetRising
                    
                    for (var i = 0; i<planetArray.length; i++) { 
                        planetArray[i].rising = infoRising[i]
                    }
                    
                }

                if (typeof infoMagnitude !== 'undefined') {
                    var infoMagnitude = this.planetData.planetMagnitude
                    
                    for (var i = 0; i<planetArray.length; i++) { 
                        planetArray[i].magnitude = infoMagnitude[i]
                    }
                    
                   
                }

                this.planetObjs = planetArray
                console.log("\n** Planets Array-----> **", this.planetObjs)
                
            }
        }, 
        methods: {
            initPlanets() {
                var sun, moon, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto
                const planetsArray = [
                    sun = new Planet(null, 0, null, null, null), 
                    moon = new Planet(null, null, null, null, null),
                    mercury = new Planet(null, 1, null, null, null),
                    venus = new Planet(null, 2, null, null, null),
                    earth = new Planet(null, 3, null, null, null),
                    mars = new Planet(null, 4, null, null, null),
                    jupiter = new Planet(null, 5, null, null, null),
                    saturn = new Planet(null, 6, null, null, null),
                    uranus = new Planet(null, 7, null, null, null),
                    neptune = new Planet(null, 8, null, null, null),
                    pluto = new Planet(null, 9, null, null, null),
                ]

                return planetsArray
            },
            displayPlanetInfo(index) {
                console.log("clicked-->", this.planetObjs[index])
                this.clickedInfo = {
                    name: this.planetObjs[index].name,
                    order: this.planetObjs[index].order,
                    distance: this.planetObjs[index].distance,
                    rising: this.planetObjs[index].rising,
                    magnitude: this.planetObjs[index].magnitude
                }
                
            }
        }
    };
</script>