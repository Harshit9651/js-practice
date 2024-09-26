import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import Dashboard from '../components/DashBoard.vue';
import AddMenuItem from '../components/AddMentuItem.vue';
import EditMenuItem from '../components/EditMenuItem.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/add', name: 'AddMenuItem', component: AddMenuItem },
  { path: '/edit/:id', name: 'EditMenuItem', component: EditMenuItem }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
