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

    @media screen and (max-width: 450px) {
        .inner-planets {
            grid-template-columns: 100%;
            grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto; 
            row-gap: 1%;
        }

        #planet-heading h3 {
            margin: 0%;
        }

        #planet-heading {
            padding: 4%;
            margin-top: 10%;
        }
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
                    sun = new Planet(null, 0, null, null, null, 696340), 
                    moon = new Planet(null, 3, null, null, null, 1737),
                    mercury = new Planet(null, 1, null, null, null, 2440),
                    venus = new Planet(null, 2, null, null, null, 6051),
                    earth = new Planet(null, 3, null, null, null, 6371),
                    mars = new Planet(null, 4, null, null, null, 3389),
                    jupiter = new Planet(null, 5, null, null, null, 69911),
                    saturn = new Planet(null, 6, null, null, null, 58323),
                    uranus = new Planet(null, 7, null, null, null, 25362),
                    neptune = new Planet(null, 8, null, null, null, 24622),
                    pluto = new Planet(null, 9, null, null, null, 1188),
                ]

                return planetsArray
            },
            displayPlanetInfo(index) {
                console.log("clicked-->", this.planetObjs[index])
                this.clickedInfo = {
                    name: this.planetObjs[index].name,
                    order: this.planetObjs[index].order,
                    distance: parseFloat(this.planetObjs[index].distance).toFixed(2),
                    rising: this.planetObjs[index].rising,
                    magnitude: this.planetObjs[index].magnitude,
                    radius: this.planetObjs[index].radius
                }
                
            }
        }
    };
</script>