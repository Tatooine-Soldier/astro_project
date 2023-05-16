<script setup>
import Nav from "./components/Nav.vue"
</script>

<template>
  <Nav></Nav>
  <section class="router-content">
    <router-view></router-view>
  </section>

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
  height: 100vh;
  color: white;
  padding: 2%;;
}


</style>
