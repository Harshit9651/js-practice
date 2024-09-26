// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import AddMenuItem from '@/views/AddMenuItem.vue';
import EditMenuItem from '@/views/EditMenuItem.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/add',
    name: 'AddMenuItem',
    component: AddMenuItem
  },
  {
    path: '/edit/:id',
    name: 'EditMenuItem',
    component: EditMenuItem
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
