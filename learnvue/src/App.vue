<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NewComponent/>
  <HarshitSharma/>
  
</template>

<script>

import NewComponent from './components/NewComponent.vue';
import HarshitSharma from './components/HarshitSharma.vue'
export default {
  name: 'App',
  components: {
  NewComponent,
  HarshitSharma
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
