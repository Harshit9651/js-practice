<template>
    <div class="container mt-4">
      <h1>Edit Dish</h1>
      <b-form @submit.prevent="updateMenuItem">
        <b-form-group label="Dish Name">
          <b-form-input v-model="menuItem.name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Price">
          <b-form-input v-model="menuItem.price" required type="number"></b-form-input>
        </b-form-group>
        <b-form-group label="Description">
          <b-form-textarea v-model="menuItem.description" required></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Save Changes</b-button>
      </b-form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { menuService } from '../services/MenuService';
  
  const router = useRouter();
  const route = useRoute();
  const menuItem = ref(null);
  
  onMounted(() => {
    const id = route.params.id;
    menuItem.value = menuService.getMenuItemById(id);
  });
  
  const updateMenuItem = () => {
    menuService.updateMenuItem(menuItem.value);
    router.push('/');
  };
  </script>
  