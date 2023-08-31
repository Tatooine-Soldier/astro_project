<template>
    <section class="contact-container">
        <section>
            <p>Contact the site owner:</p>
            <section class="logos-outer">
                <section class="logos-display">
                    <section>
                        <img src="../assets/LI-In-Bug-small.png" id="linkedIn-grey" @mouseover="colourUpL()"  />
                        <a href="https://www.linkedin.com/in/tod11/"><img src="../assets/LI-In-Bug-small-light.png" id="linkedIn-colour" class="hidden-colour-icon" @mouseout="greyUpL()" alt="LinkedIn"/></a>
                    </section>
                    <section>
                        <img src="../assets/logo-black-small.png" id="X-grey" @mouseover="colourUpX()"/>
                        <a href="https://twitter.com/NASA"><img src="../assets/logo-black-small-light.png" id="X-colour" class="hidden-colour-icon" @mouseout="greyUpX()" alt="X"/></a>
                    </section>
                    <section>
                        <img src="../assets/Instagram_Glyph_Black.jpg" id="instagram-grey" @mouseover="colourUpInsta()"/>
                        <a href="https://www.instagram.com/south_east_drone_"><img src="../assets/Instagram_Glyph_Gradient.png" id="instagram-colour" class="hidden-colour-icon" @mouseout="greyUpInsta()" alt="Instagram"/></a>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <section class="about-me-container">
        <section class="about-me">
            <section class="about-me-outer">
                <section class="about-me-header">
                    About Me
                </section>
                <section class="about-me-factfile">
                    <section class="factfile-left">Name:</section>
                    <section class="factfile-right">Tom</section>
                    <section class="factfile-left">Age:</section>
                    <section class="factfile-right">22</section>
                    <section class="factfile-left">Email:</section>
                    <section class="factfile-right">tomodwyer97ATgmailDOTcom</section>
                    <section class="factfile-left">City:</section>
                    <section class="factfile-right">Cork/Kilkenny, Ireland</section>
                    <section class="factfile-left">Interests:</section>
                    <section class="factfile-right">Astronomy, Aviation, History, Hiking</section>
                    <section class="factfile-left" id="blank">BLANK</section>
                    <section id="blank">BLANK</section>

                    <section class="factfile-left">University:</section>
                    <section class="factfile-right">University College Cork</section>
                    <section class="factfile-left">Degree:</section>
                    <section class="factfile-right">Bachelors Computer Science</section>
                    <section class="factfile-left">Result:</section>
                    <section class="factfile-right">2:1 (68%)</section>
                    <section class="factfile-left">Graduation:</section>
                    <section class="factfile-right">2023</section>
                    <section class="factfile-left" id="blank">BLANK</section>
                    <section id="blank">BLANK</section>

                    <section class="factfile-left">Primary language:</section>
                    <section class="factfile-right">Python</section>
                    <section class="factfile-left">Secondary:</section>
                    <section class="factfile-right">JavaScript</section>
                    <section class="factfile-left">Third:</section>
                    <section class="factfile-right">Java</section>
                    <section class="factfile-left">Frameworks:</section>
                    <section class="factfile-right">Vue &#38 React (JS) | Flask (Python)</section>
                    <section class="factfile-left">Database Experience:</section>
                    <section class="factfile-right">MongoDB &#38 SQL</section>
                    <section class="factfile-left">Stack:</section>
                    <section class="factfile-right">Mongo-Golang-VueJS | Flask-SQL</section>
                    <section class="factfile-left">Methodology:</section>
                    <section class="factfile-right">AGILE development</section>
                </section>
            </section>
        </section>
    </section>
    
</template>

<style>
    .contact-container {
        padding: 3%;
        display: flex;
        justify-content: center;
    }

    .contact-container p {
        text-align: center;
        padding: 5%;
        margin-bottom: 10%;
        font-size: 1.4em;
    }

    .logos-display {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 12%;
    }

    .logos-outer {
        width: 100%;
        display: flex;
        justify-content: center;
        
    }

    .hidden-colour-icon {
        display: none;
    }

    .about-me-container {
        display: flex;
        justify-content: center;
    }

    .about-me {
        border-top: solid silver 1px;;
        width: 80%;
        padding: 3%;
        display: flex;
        justify-content: center;
    }

    .about-me-header {
        font-size: 2em;;
        text-align: center;
        text-decoration: underline;
    }

    .about-me-header:hover {
        color: var(--primary-light);
    }

    .about-me-factfile {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        font-size: 1.4em;;
        padding: 2%;
    }

    .about-me-outer {
        border: var(--primary-light) 2px solid;
        background-color: var(--primary-dark);
        padding: 2%;
        border-radius: 10px;;
        width: 80%;;
    }

    .factfile-left {
        text-align:right;
        padding-right: 0%;;
    }

    .factfile-right {
        padding-left: 14%;
    }

    #blank {
        visibility: hidden;
    }


    @media screen and (max-width: 650px) { 
        .contact-container {
            padding-top: 12%;   
        }

        .logos-display {
            grid-template-rows: auto;
            row-gap: 4%;
        }

        .logos-outer {
            width: 90%;
        }

        .about-me-outer { 
            margin-top: 6%;
            width: 90%;
        }

    }

    @media screen and (max-width: 450px) { 
        .contact-container {
            padding-top: 14%;   
            padding-left: 0%;;
            padding-right: 0%;
        }
 
        .logos-display {
            grid-template-rows: 33% 33% 33%;
            row-gap: 4%;
        }

        .about-me-outer {
            padding: 0%;
            width: 100%;;
            border-left: none;
            border-right: none;
            margin-bottom: 6%;;
            border-radius: 0px;;
        }

        .about-me {
            padding: 0%;
            width: 100%;
            font-size: .8em;;
        }

        .about-me-factfile {
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: 20% 80%;;
        }

        .factfile-left {
            text-align:left;
        }

        .factfile-right {
            padding-left: 15%;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
            }
        }, 
        mounted() {
        },
        methods: {
            colourUpL() {
                var L = document.getElementById("linkedIn-grey")
                L.style.display = "none"
                var Ldark = document.getElementById("linkedIn-colour")
                Ldark.style.display = "block"
                Ldark.style.cursor = "pointer"
            },
            greyUpL() {
                var L = document.getElementById("linkedIn-grey")
                L.style.display = "block"
                var Ldark = document.getElementById("linkedIn-colour")
                Ldark.style.display = "none"
            },
            colourUpX() {
                var L = document.getElementById("X-grey")
                L.style.display = "none"
                var Ldark = document.getElementById("X-colour")
                Ldark.style.display = "block"
                Ldark.style.cursor = "pointer"
            },
            greyUpX() {
                var L = document.getElementById("X-grey")
                L.style.display = "block"
                var Ldark = document.getElementById("X-colour")
                Ldark.style.display = "none"
            },
            colourUpInsta() {
                var L = document.getElementById("instagram-grey")
                L.style.display = "none"
                var Ldark = document.getElementById("instagram-colour")
                Ldark.style.display = "block"
                Ldark.style.cursor = "pointer"
            },
            greyUpInsta() {
                var L = document.getElementById("instagram-grey")
                L.style.display = "block"
                var Ldark = document.getElementById("instagram-colour")
                Ldark.style.display = "none"
                
            }
        }
    }
</script>