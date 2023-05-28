<script setup>
import NewsletterSignup from '../components/NewsletterSignup.vue';
</script>
<template>
    <section class="modal" id="modal">
        <section class="home-container">
            <section>
                <section class="home-inner">
                    <div id="home-title">
                        <h2><b>COSMIC IRELAND</b></h2>
                        <p><i id="home-quote">"The only true wisdom is in knowing you know nothing"<br>~ Socrates</i></p>
                        <section class="home-divs-container">
                            <div class="home-divs">
                                Today News
                                <!-- <div>{{ titleList[0] }}</div> -->
                            </div>
                            <div class="home-divs">Social Media</div>
                            <div class="home-divs" @click="displayNewsLetter()">Signup to our newsletter</div>
                            <div class="home-divs">Images</div>
                        </section>
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

.home-divs:hover {
    background-color: rgba(21, 21, 21, 0.75);
    cursor: pointer;
    
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
        transform: translate(-530px, 0px);
    }

    .home-divs {
        padding: 20%;
    }

    .home-divs-container {
        row-gap: 16%;
        column-gap: 10%;
    }

    .newsletter-home {
        left: 15%;
    }

 
  }


</style>

<script>
import { scrapeWeb } from "../scraper.js"

    export default {
        data() {
            return {
              titleList: [],
              contentList: [],
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
            }
        }
    }
</script>