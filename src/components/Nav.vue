<template>
    <section class="nav-outer">
        <section class="nav-inner">
            <section class="nav-img">
                <img src="../assets/trisk-small.png"/>
            </section>
            <section class="nav-ul">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li @click="displayDropDown()"><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </section>
        </section>
    </section>
    <!-- <div id="dropdown-container">
        <div>
            <ol>
                <div><router-link to="/blog">Blog Posts</router-link></div>
                <div><router-link to="/blog">Past Blog Posts</router-link></div>
            </ol>
        </div>
    </div> -->
</template>


<style>

#dropdown-container {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 27.75%;
    top: 5%;
    background-color: var(--primary-dark);
    width: 10%;
}

#dropdown-container ol {
    padding: 8%;
    padding-bottom: 2%;
}

#dropdown-container ol a {
    color: white;
    text-decoration: none;
}


.nav-outer {
    background-color: var(--primary-dark);
    max-height: 10%;
    border-bottom: .5px var(--primary-light) solid;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}

.nav-inner {
    display: grid;
    grid-template-columns: 10% 90%;
    height: 100%;
    width: 60%;
}

.nav-ul ul {
    display: grid;
    grid-template-columns: auto auto auto;
    margin: 0%;
}

.nav-ul li {
    list-style: none;
    background-color: var(--primary-dark);
    text-align: center;
    border-right: solid var(--secondary-dark) 1px;;
    padding-right: 10%;;
    display: flex;
    align-items: center;
}

.nav-ul li:first-of-type {
    border-left: solid var(--secondary-dark) 1px;;
}

.nav-ul li:hover {
    background-color: var(--secondary-light);
}

.nav-ul li a {
    text-align: center;
    text-decoration: none;
    color: white;
    display: inline-block;
    width: 100%;;
    padding: 6%;
    font-size: 1.1em;
}



.nav-img img {
    max-height: 100%;;
    margin-left: 40%;
    margin-top: 5%;;
    display: flex;
}

.nav-img {
    max-height: 400%;
}

@media screen and (max-width: 1000px) {
    .nav-ul ul {
        height: 100%;
    }
}

@media screen and (max-width: 800px) {
    .nav-ul ul {
        height: 100%;
    }
}

@media screen and (max-width: 600px) {
    .nav-inner {
        width: 80%;
    }

    .nav-ul ul {
        height: 100%;
    }

    .nav-img img {
        margin-top: 4%;;
    }
  }

@media screen and (max-width: 450px) {
    .nav-inner {
        width: 90%;
    }

    .nav-ul li a {
        padding: 12%;
    }

    .nav-img {
        padding-top: 6%;;
        padding-bottom: 3%;
    }
  }

@media screen and (max-width: 350px) {
    .nav-inner {
        width: 100%;
    }

    .nav-ul li a {
        padding: 13%;
       
    }

    .nav-img img {
        bottom: 2%;
    }

    
  }


</style>

<script>
    export default {
  
        methods: {
            displayDropDown() {
                console.log("clickedd");
                var d = document.getElementById("dropdown-container")
                d.style.display = "block"
            }
        }
    }
</script>