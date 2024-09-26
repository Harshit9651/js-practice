<template>
    <div class="container mt-4">
      <h1>Restaurant Menu</h1>
      <b-button variant="success" @click="navigateToAdd">Add New Dish</b-button>
      <b-table :items="menuItems" :fields="fields" class="mt-3">
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
  import { menuService } from '../services/MenuService';
  
  const router = useRouter();
  const menuItems = ref([]);
  const fields = ['name', 'price', 'description', { key: 'actions', label: 'Actions' }];
  
  const loadMenuItems = () => {
    menuItems.value = menuService.getAllMenuItems();
  };
  
  const deleteItem = (id) => {
    menuService.deleteMenuItem(id);
    loadMenuItems();  // Reload the menu
  };
  
  const navigateToAdd = () => {
    router.push('/add');
  };
  
  const editItem = (item) => {
    router.push(`/edit/${item.id}`);
  };
  
  onMounted(() => {
    loadMenuItems();
  });
  </script>
  
  