<template>
   <div>
   
<input type="text" v-model="count">
<h1>{{ count }}</h1>

</div>
  </template>
  
  <script setup>

import { ref} from  'vue';
  
let count = ref(10);

  </script>
  