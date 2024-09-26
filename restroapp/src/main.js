import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
import router  from './routes';
app.use(router)
app.mount('#app');
