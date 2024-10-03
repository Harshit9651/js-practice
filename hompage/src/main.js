import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import HomePageWrapper from "./views/HomePageWrapper.vue";
import ResultPage from "./components/ResultPage.vue";
import SlidebarResult from "./components/SlidebarResult.vue";
import CreateYourDesign from "./components/CreateYourDesign.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Homepage", component: HomePageWrapper, path: "/" },
    {name:'ResultPage',component:ResultPage,path :"/result"},
    {name:'SlidebarResult',component:SlidebarResult,path:'/slidbar'},
    {name:'CreateYourDesign', component:CreateYourDesign,path:'/createdesign'}
  ],
});

import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");

// createApp(App).mount('#app')
