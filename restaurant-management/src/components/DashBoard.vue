<template>
  <div class="container mt-4">
    <h1>Restaurant Menu</h1>
    <b-button variant="success" @click="navigateToAdd">Add New Dish</b-button>
    
    <!-- Display error message if menuItems is empty -->
    <p v-if="menuItems.length === 0">No dishes available yet.</p>
    
    <!-- Render table only if there are menuItems -->
    <b-table v-if="menuItems.length > 0" :items="menuItems" :fields="fields" class="mt-3">
      <template #cell(actions)="row">
        <b-button variant="primary" @click="editItem(row.item)">Edit</b-button>
        <b-button variant="danger" @click="deleteItem(row.item.id)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { menuService } from '../services/serviceMenu';

const router = useRouter();
const menuItems = ref([]);
const fields = ['name', 'price', 'description', { key: 'actions', label: 'Actions' }];

// Load the menu items when component mounts
const loadMenuItems = async () => {
  menuItems.value = await menuService.getAllMenuItems();
};

// Handle deleting a menu item
const deleteItem = async (id) => {
  await menuService.deleteMenuItem(id);
  loadMenuItems();  // Reload the menu after deletion
};

// Navigate to Add Dish form
const navigateToAdd = () => {
  router.push('/add');
};

// Navigate to Edit Dish form
const editItem = (item) => {
  router.push(`/edit/${item.id}`);
};

// Load the menu items on mount
onMounted(() => {
  loadMenuItems();
});
</script>
