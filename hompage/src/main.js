import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import HomePageWrapper from "./views/HomePageWrapper.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Homepage", component: HomePageWrapper, path: "/" },
  ],
});

import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");

// createApp(App).mount('#app')
