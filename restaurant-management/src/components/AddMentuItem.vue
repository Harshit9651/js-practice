<template>
  <div class="container mt-4">
    <h1>Add New Dish</h1>
    <b-form @submit.prevent="addMenuItem">
      <b-form-group label="Dish Name">
        <b-form-input v-model="menuItem.name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Price">
        <b-form-input v-model="menuItem.price" required type="number"></b-form-input>
      </b-form-group>
      <b-form-group label="Description">
        <b-form-textarea v-model="menuItem.description" required></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="success">Add Dish</b-button>
    </b-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { menuService } from '../services/serviceMenu';
import { MenuItem } from '../models/MenuItem';

const router = useRouter();
const menuItem = ref(new MenuItem(null, '', 0, ''));

// Add new menu item
const addMenuItem = async () => {
  await menuService.addMenuItem(menuItem.value);
  router.push('/dashboard'); // Redirect back to dashboard after adding
};
</script>
