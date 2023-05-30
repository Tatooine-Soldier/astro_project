<template>
    <section class="newsletter-container" id="newsletter-container">
        <section class="newsletter-grid">
            <section class="newsletter-top">
                <section class="newsletter-inner-top">
                    <b><h3>Cosmic Ireland Newsletter</h3></b>
                    <div>
                        Posted weekly on Thursdays
                    </div>  
                </section>
            </section>
            <section class="newsletter-bottom">
                <section>
                    Sign Up below!
                </section>
                <div class="newsletter-email">
                    <label>Email: </label>
                    <input type="text"/>
                    <input type="button" value="submit" @click="handleSubmit()"/>
                </div>
            </section>
        </section>
         
    </section>
</template>

<style>
    .newsletter-container {
        background-color: var(--secondary-dark);
        padding: 10%;
        border: solid 1px var(--primary-light);
    }

    .newsletter-grid {
        display: grid;
        grid-template-rows: auto auto;
        row-gap: 10%;
    }



    .newsletter-inner-top {
        text-align: center;
    }

    .newsletter-bottom section {
        text-align: center;
        padding: 5%;
    }

    .newsletter-bottom {
        padding: 1%;
    }

    .newsletter-email {
        padding-bottom: 7%;
    }

    .newsletter-email input:first-of-type {}

    .newsletter-email input:last-of-type {
        width: 100%;
        margin: 2% auto;
        padding: 1%;
        border: solid 1px var(--primary-light)
    }

    .newsletter-email input:last-of-type:hover {
        background-color: #c1c0c0;
        cursor: pointer;
    }

    @media screen and (max-width: 450px) {
        

        .newsletter-email input:first-of-type {
            padding: 2%;
        }

        .newsletter-email input:last-of-type {
            padding: 4%;
        }
    }

</style>

<script>
import { sanitise } from '../inputStrip';
export default {
        data() {
            return {
            }
        },
        methods: {
            handleSubmit() {
                sanitise()
            }
        }
    }
</script>