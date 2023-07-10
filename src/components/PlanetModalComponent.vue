<template>
    <section class="pmodal-container">
        <section class="pmodal-fields">
            <section class="pmodal-name">
                <h3>{{ clickInfo.name }}</h3>
            </section>
        </section>
        <section class="pmodal-grid">
            <section class="pmodal-fields">
                Order from Sun: 
            </section>
            <section class="pmodal-fields">
                {{ clickInfo.order }}
            </section>

            <section class="pmodal-fields">
                Distance from Earth(km): 
            </section>
            <section class="pmodal-fields">
                {{ clickInfo.distance }}
            </section>

            <section class="pmodal-fields">
                Rising in: 
            </section>
            <section class="pmodal-fields">
                {{ clickInfo.rising }}
            </section>

            <section class="pmodal-fields">
                Magnitude: 
            </section>
            <section class="pmodal-fields">
                {{ clickInfo.magnitude }}
            </section>
        </section>
    </section>
</template>

<style>
.pmodal-container {
    border: solid var(--primary-light) 1px;
    width: 75%;
    padding: 2%;
    padding-bottom: 4%;
    background-color: var(--primary-dark);
}

.pmodal-fields {
    padding: 1.5%;
}

.pmodal-grid .pmodal-fields {
    width: 50%;
    display: flex;
    justify-content: center;
    float: left;
}

.pmodal-name {
    text-align: center;
    border-bottom: solid silver 1px;;
}

.pmodal-name h3 {
    margin-top: 0%;
}

.pmodal-grid {
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto auto;
    row-gap: 3%;
    align-items: center;
    justify-items: center;
}
</style>

<script>
    export default {
        data() {
            return {
                clickInfo: {
                    name: null,
                    order: null,
                    distance: null,
                    rising: null,
                    magnitude: null
                }
            }
        },
        props: {
            clickInfo: Object,
        },
    }
</script>