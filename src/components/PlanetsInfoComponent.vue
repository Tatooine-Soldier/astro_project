<template>
    <section class="planet-info-container">
        <div id="planet-heading"><h3>Planets</h3></div> 
        <section class="inner-planets">
            <div v-for="item, index in parsedNames" :key="index" class="planet-cells">
                {{ item }}
            </div>
        </section>
        <section>
            Body Info:
            <section>
                {{ parsedInfo }}
            </section>
            
        </section>
        
    </section>
</template>

<style>
    .planet-info-container {
        border: var(--primary-light) solid 1px;
        padding: 1%;
    }

    .inner-planets {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto; 
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
    }
</style>

<script>
import { onMounted } from 'vue';
import Planet from '../PlanetClass.js'


    export default {
        data() {
            return {
                planetDistances: []
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

                if (typeof infoNames !== 'undefined') {
                    var infoNames = this.planetData.planetNames
                    console.log("\n\n\ntype-->", Object.values(infoNames))
                    for (var i=0; i<10; i++) {
                        // this.planetDistances.push(info[0].distance.fromEarth.km)
                    }
                    return infoNames[4]
                }

                if (typeof infoDistance !== 'undefined') {
                    var infoDistance = this.planetData.planetDistances
                    console.log("\n\n\ntype-->", Object.values(infoDistance))
                    for (var i=0; i<10; i++) {
                        // this.planetDistances.push(info[0].distance.fromEarth.km)

                    }
                    return infoDistance[4]
                }

                if (typeof infoRising !== 'undefined') {
                    var infoRising = this.planetData.planetDistances
                    console.log("\n\n\ntype-->", Object.values(infoRising))
                    for (var i=0; i<10; i++) {
                        // this.planetDistances.push(info[0].distance.fromEarth.km)
                    }
                    
                    return infoRising[4]
                }

                if (typeof infoMagnitude !== 'undefined') {
                    var infoMagnitude = this.planetData.planetDistances
                    console.log("\n\n\ntype-->", Object.values(infoMagnitude))
                    for (var i=0; i<10; i++) {
                        // this.planetDistances.push(info[0].distance.fromEarth.km)
                    }
                    
                    return infoMagnitude[4]
                }
                
            }
        }, 
        methods: {
            initPlanets() {
                var sun = Planet()
                
            }
        }
    };
</script>