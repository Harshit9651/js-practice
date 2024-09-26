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
import HeaderPage from "./components/HeaderPage.vue";
import HeroPage from "./components/HeroPage.vue";
import FeaturePage from "./components/FeaturePage.vue";
import FooterPage from "./components/FooterPage.vue";

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
