<script setup>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav></Nav>
  <section class="router-content">
    <router-view></router-view>
  </section>
  <Footer></Footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

body {
  margin: 0px;
}

.router-content {
  background-color: var(--secondary-dark);
  height: auto;
  color: white;
  padding-top: 3.3%;
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
    height: 100vh;
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
