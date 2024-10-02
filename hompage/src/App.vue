<template>
<CreateYourDesign></CreateYourDesign>
</template>

<script>
// import { createTextVNode } from 'vue';
import CreateYourDesign from './components/CreateYourDesign.vue';
export default {
  name: 'App',
  components: {
    CreateYourDesign
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
