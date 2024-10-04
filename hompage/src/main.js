import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import HomePageWrapper from "./views/HomePageWrapper.vue";
import ResultPage from "./components/ResultPage.vue";
import CreateYourDesign from "./components/CreateYourDesign.vue";
import ReImage from "./components/ReImage.vue";
import CustimizePage from "./components/CustimizePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Homepage", component: HomePageWrapper, path: "/" },
    {name:'ResultPage',component:ResultPage,path :"/result"},
    {name:'CreateYourDesign', component:CreateYourDesign,path:'/createdesign'},
    {name:'ReImage' ,component:ReImage,path:'/Re-Image'},
    {name:'CustimizePage', component:CustimizePage,path: '/custimize-page'}
  ],
});

import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");

// createApp(App).mount('#app')
