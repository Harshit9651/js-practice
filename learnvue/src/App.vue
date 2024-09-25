<template>
  <img alt="Vue logo" src="./assets/logo.png">
 <ComPose/>
  
</template>

<script>
import ComPose  from './components/ComPose.vue'
export default {
  name: 'App',
  components: {
 ComPose
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
