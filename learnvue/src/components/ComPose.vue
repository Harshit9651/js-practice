<template>
    <h1>{{ mesg }}</h1>
    <button v-on:click="hello()">click me</button>
  </template>
  
  <script setup>
  const mesg = 'pinki';
  
  function hello() {
    alert('Composition API is working properly');
  }
  </script>
  