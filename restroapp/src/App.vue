<template>
  <div id="app">
    <HeaderPage/>
    <HeroPage/>
    <FeaturePage />
    <FooterPage/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import HeaderPage from "./components/";
import HeroPage from "./components/Hero.vue";
import FeaturePage from "./components/Features.vue";
import FooterPage from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
    HeroPage,
    FeaturePage,
    FooterPage,
  },
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
