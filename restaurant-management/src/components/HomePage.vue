<template>
    <div class="container mt-5">
      <div class="text-center">
        <h1 class="display-4">Welcome to Our Restaurant Management System</h1>
        <p class="lead">Manage your restaurant's dishes easily with the tools provided below</p>
      </div>
  
      <div class="row mt-5">
        <!-- Dashboard -->
        <div class="col-md-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <h5 class="card-title">View All Dishes</h5>
              <p class="card-text">Check out all the dishes in your menu</p>
              <router-link to="/dashboard" class="btn btn-primary">Go to Dashboard</router-link>
            </div>
          </div>
        </div>
  
        <!-- Add Menu Item -->
        <div class="col-md-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <h5 class="card-title">Add New Dish</h5>
              <p class="card-text">Add a new dish to the menu with its details</p>
              <router-link to="/add" class="btn btn-success">Add New Dish</router-link>
            </div>
          </div>
        </div>
  
        <!-- Edit Menu Item -->
        <div class="col-md-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <h5 class="card-title">Edit Dishes</h5>
              <p class="card-text">Edit any dish in the menu to keep it up to date</p>
              <router-link to="/edit/1" class="btn btn-warning">Edit Dishes</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
    .container {
      margin-top: 50px;
    }
  </style>
  