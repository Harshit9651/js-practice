<template>
  <div id="app">
    <Header />
    <Hero />
    <Features />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Hero from "./components/hero.vue";
import Features from "./components/features.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Features,
    Footer,
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
