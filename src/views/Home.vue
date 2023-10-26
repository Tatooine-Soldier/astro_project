<script setup>
import NewsletterSignup from '../components/NewsletterSignup.vue';
</script>
<template>
    <section class="modal" id="modal">
        <section class="home-container">
            <section>
                <section class="home-inner">
                    <div id="home-title">
                        <h2><b class="custom-font">COSMIC IRELAND</b></h2>
                        <p><i id="home-quote">"The only true wisdom is in knowing you know nothing"<br>~ Socrates</i></p>
                        <section class="who-we-are">
                            <section class="home-divs">
                                <section>
                                    <h2>Who Are We?</h2>
                                </section>
                                <section>
                                    Cosmic Ireland is a passionate community of stargazers, astronomy enthusiasts, and space explorers based in Ireland. Our club is fueled by a shared love for the wonders of the universe and a desire to unravel its mysteries. 
                                    With a diverse membership of astronomers, astrophotographers, and science enthusiasts of all levels, we come together to learn, inspire, and ignite the curiosity that lies within each of us. Through regular meetings, engaging workshops, and captivating stargazing sessions, 
                                    we aim to create a space where members can delve into the realms of astronomy, expand their knowledge, and forge lasting connections with fellow cosmic adventurers. Cosmic Ireland is dedicated to fostering a sense of awe, wonder, and exploration of the vast cosmic expanse above us.
                                </section>
                            </section>
                            <section class="under-who-we-are">
                                <div class="home-divs" id="iss-tracker-div"><router-link to="/iss-tracker">ISS Tracker</router-link></div>
                                <div class="home-divs"><router-link to="/weather">Weather Forecast</router-link></div>
                                <div class="home-divs"><router-link to="/charts">Celestial Charts</router-link></div>
                                <div class="home-divs" @click="displayNewsLetter()">Newsletter</div>
                            </section>
                        </section>
                        <!-- <section class="home-divs-container">
                            <div class="home-divs">
                                Today News
                                
                            </div>
                            <div class="home-divs">Social Media</div>
                            <div class="home-divs" @click="displayNewsLetter()">Signup to our newsletter</div>
                            <div class="home-divs">Images</div>
                        </section> -->
                    </div>
                    <img src="../assets/grey-plan-crop.jpg" id="planets"/>
                </section>
            </section>
        </section>
    </section>
    <section class="newsletter-home" id="newsletter-home">
            <NewsletterSignup></NewsletterSignup>
            <b @click="hideNews()" id="newsletter-ex">&times;</b>  
        </section>
</template>

<style>
.home-container {
    color: white;
}

.home-inner {
    position: relative;

}

.home-divs-container {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 50% auto;
    row-gap: 5%;
    column-gap: 2%;
    margin-top: 24%;;
    margin-bottom: 5%;
}

.home-divs {
    opacity: .9;
    border: solid 1px var(--primary-light);
    border-radius: 7px;;
    padding: 10%;
    background-color: rgba(21, 21, 21, 0.65)
}

.home-divs:first-of-type:hover {
    background-color: rgba(21, 21, 21, 0.65)
}

.home-divs:hover {
    background-color: rgba(21, 21, 21, 0.75);
    cursor: pointer;
}

#iss-tracker-div:hover {
    background-color: rgba(21, 21, 21, 0.75);
    cursor: pointer;
}


.home-divs a {
    color: white;
    text-decoration: none;
}

.newsletter-home {
    display: none;
    position: fixed;
    top: 20%;
    margin: 0 auto;
    z-index: 9998;
    left: 40%;
}

.modal {
    opacity: 1;
    padding-bottom: 10%;;
}

.who-we-are {
    margin-top: 20%;
}

.who-we-are .home-divs {
    font-size: 1.3em;
    padding: 1%;
    padding-bottom: 3%;;
}

.under-who-we-are {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    column-gap: 2%;
    row-gap: 20%;
    margin-top: 5%;
}

.under-who-we-are .home-divs {
    padding: 2%;
    
}

.custom-font {
    font-family: 'Raleway', sans-serif;
}


#home-quote {
    font-size: 1.4em;;
}

p {
    margin-top: 6%;;
}

#planets {
    margin-top: 1%;;
    top: 0;
  left: 0;
  width: 100%;
  height: 100%;
    position: fixed;
}

#home-title {
    text-align: center;
    z-index: 1;
    position: relative;
    margin: 0 auto;
    width: 80%;
    padding-top: 5%;;
    /*position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);*/
}

#home-title b {
    font-size: 4em;;
}

#newsletter-ex {
    top: 20%;
    right: 40%;
    font-size: 1.5em;;
    position: fixed;
    z-index: 9999;
}

#newsletter-ex:hover {
    cursor: pointer;
}

@media screen and (max-width: 450px) {
    #home-title b {
        font-size: 2em;;
    }

    #home-title {
        top: 40%;
        padding-top: 15%;;
    }

    #planets {
        width: 1500px;
        transform: translate(-570px, 0px);
    }

    .home-divs {
        padding: 24%;
    }

    .home-divs-container {
        row-gap: 16%;
        column-gap: 10%;
    }

    .newsletter-home {
        left: 15%;
    }

    .who-we-are {
        margin-top: 40%;
    }

    .who-we-are .home-divs {
        font-size: 1.2em;
    }

    #home-title {
        width: 90%;
    }

    .under-who-we-are {
        margin-top: 6%;
    }

 
  }


</style>

<script>
import { scrapeWeb } from "../scraper.js"
import { ref } from 'vue';

    export default {
        data() {
            return {
              titleList: [],
              contentList: [],
              planets: [],
            }
        }, 
        mounted() {
            var dlist = scrapeWeb()
            console.log("dlist:", dlist)
            dlist.then((data) => {
                this.titleList = data.list.list
                this.contentList = data.contentList.list
                
                console.log("data:", this.contentList)

            
            })

            this.getUserCoordinates().then((coords) => {
                var locs = coords
                console.log("locs-->", locs)
            
            

                var applicationId = "9a04b77b-eefb-475b-9faf-0fae016fa846"
                var applicationSecret = "12663d817fa2cca98ddbfae137dd264c16001b050c74cd18085246be577f9fa01ad42d5ad34fbedfb12d4340f0a887008dc79035e4eeea13c51502257251ee3ff369d39849fde94d36f04ec8255ae6b7e6ff85693b30ac0561ba45aa51906f2aad5d81df4a8846ef12d63da56f965b54"
                const authString = btoa(`${applicationId}:${applicationSecret}`);

                //'https://api.astronomyapi.com/api/v2/bodies/positions?latitude=-84.39733&longitude=33.775867&elevation=50&from_date=2022-02-20&to_date=2022-02-21&time=08:00:00'
                var url = "https://api.astronomyapi.com/api/v2/bodies/positions?latitude="+locs.lat+"&longitude="+locs.lng+"&elevation=50&from_date=2022-02-20&to_date=2022-02-21&time=08:00:00"
                fetch(url, {
                headers: {
                    'Authorization': 'Basic ' + authString
                }
                })
                .then(response => {
                // Handle the response
                console.log("astro_api response", response.json().then(data => {
                    console.log("data", data.data.table.rows)
                    this.planets = data.data.table.rows
                }));
                })
                .catch(error => {
                // Handle the error
                    console.error("couldn't fetch response")
                });
            })
           
        },
        methods: {
            displayNewsLetter() {
                console.log("clicked")
                var d = document.getElementById("newsletter-home")
                d.style.display = "block"
                var m = document.getElementById("modal")
                m.style.opacity = 0.4;   
            },
            hideNews() {
                var d = document.getElementById("newsletter-home")
                d.style.display = "none"
                var m = document.getElementById("modal")
                m.style.opacity = 1;   
            },
            getUserCoordinates() {
                return new Promise((resolve, reject) => {
                    var lat =  ref(null)
                    var lng = ref(null)

                    setTimeout(() => {
                        if ("geolocation" in navigator) {
                        // Get the current position
                        navigator.geolocation.getCurrentPosition(
                            function(position) {
                            // Retrieve the latitude and longitude coordinates
                            lat.value = position.coords.latitude;
                            lng.value = position.coords.longitude;

                            // Do something with the coordinates
                            console.log("Latitude: " + lat.value);
                            console.log("Longitude: " + lng.value);

                            resolve({lat: lat.value, lng: lng.value})
                            },
                            function(error) {
                            // Handle any errors that occur while retrieving the position
                            console.log("Error getting location: " + error.message);
                            }
                        );
                        } else {
                            // Geolocation is not supported by the browser
                            console.log("Geolocation is not supported by this browser.");
                            resolve({lat: 0, lng: 0})
                        }
                    }, 1000)
                })
                
            }
            
        }
    }
</script>