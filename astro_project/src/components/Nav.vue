<template>
    <section class="nav-outer">
        <section class="nav-inner">
            <section class="nav-img">
                <img src="../assets/cosmo-logo-big40px.png"/>
            </section>
            <section class="nav-ul">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/">Pictures</router-link></li>
                    <li><router-link to="/">Pictures</router-link></li>
                </ul>
            </section>
        </section>
    </section>
</template>


<style>
.nav-outer {
    background-color: var(--primary-dark);
    max-height: 10%;
    border-bottom: .75px silver solid;
}

.nav-inner {
    display: grid;
    grid-template-columns: 10% 90%;
    max-height: 10%;
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
    padding-right: 7%;;
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
    padding: 5%;
    font-size: 1.1em;
}



.nav-img img {
    max-height: 100%;;
}

.nav-img {
    max-height: 400%;
}

</style>