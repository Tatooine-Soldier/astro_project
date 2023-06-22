<template>
    <section class="planet-info-container">
        <div id="planet-heading"><h3>Planets</h3></div> 
        <section class="inner-planets">
            <div v-for="item, index in parsedNames" :key="index" class="planet-cells">
                {{ item }}
            </div>
        </section>
        {{ parsedInfo }}
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
    
    }

    #planet-heading {
        text-align: center;
    }
</style>

<script>

    export default {
        props: {
            planetData: Object
        },
        computed: {
            parsedNames() {
                const names = this.planetData.planetNames
                return names
            },
            parsedInfo() {
                const info = this.planetData.planetInfo
                return info
            }
        }
    };
</script>