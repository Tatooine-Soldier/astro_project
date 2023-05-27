<template>
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
                        <div class="home-divs">Signup to our newsletter</div>
                        <div class="home-divs">Images</div>
                    </section>
                </div>
                <img src="../assets/grey-plan-crop.jpg" id="planets"/>
            </section>
        </section>
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

@media screen and (max-width: 450px) {
    #home-title b {
        font-size: 2em;;
    }

    #home-title {
        top: 40%;
    }

    #planets {
        width: 1300px;
        transform: translate(-430px, 0px);
    }

    .home-divs {
        padding: 15%;
    }

    .home-divs-container {
        row-gap: 16%;
        column-gap: 10%;
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
           
        }
    }
</script>