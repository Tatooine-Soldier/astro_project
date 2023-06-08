<script setup>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue";

const deviceWidth = window.innerWidth < 600;

</script>

<template>
  <section class="accept-display" id="accept-display">
    <Nav></Nav>
    <section class="router-content">
      <router-view></router-view>
    </section>
    <Footer id="footer"></Footer>
  </section>
  <section class="unaccept-display" id="unaccept-display">
    Sorry, this site is not available on your device &hearts;
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

body {
  margin: 0px;
}

.unaccept-display {
  color: var(--primary-light);
  background-color: var(--primary-dark);
  display: none;
}

.router-content {
  background-color: var(--secondary-dark);
  height: auto;
  color: white;
  padding-top: 3.7%;
}

#footer {
  position: relative;
}

@media screen and (max-width: 900px) {
  .router-content {
    padding-top: 4%;
  }
}

@media screen and (max-width: 750px) {
  .router-content {
    padding-top: 5%;
  }
}

@media screen and (max-width: 600px) {
  .router-content {
    padding-top: 6%;
  }
}

@media screen and (max-width: 450px) {
  .router-content {
    padding-top: 8%;
  
  }

}

@media screen and (max-width: 350px) {
  .router-content {
    padding-top: 12%;
  }
}

@media screen and (max-width: 300px) {
  .router-content {
    padding-top: 15%;
  }
}



</style>
