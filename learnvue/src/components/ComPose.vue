<template>
   <div>
    <h2>{{ fullname }}</h2>
    <h1>hii the number is {{ number  }}</h1>
    
    <h1>{{ mesg }}</h1>
    <button v-on:click="hello()">click me</button>
   <img :src="URl" alt="image some ">
   <h1>{{ num.count }}</h1></div>
  </template>
  
  <script setup>

import { reactive ,ref,computed} from  'vue';
  const mesg = 'pinki';
  const URl = 'https://images.pexels.com/photos/27977728/pexels-photo-27977728/free-photo-of-a-flock-of-birds-flying-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  const num = reactive({count:0});
  setTimeout(() => {
    num.count = num.count+100;
  }, 4000);
  function hello() {
    alert('Composition API is working properly');
  }
  const number = ref(40);
  setTimeout(() => {
    number.value= number.value *200
  }, 2000);
let firstname = ref('Harshit');
let lastanme = ref('sharma');


const fullname = computed(()=>{
    console.log('comuted called ')
   return firstname.value + ' '+ lastanme.value
})


setTimeout(() => {
   console.log('settime out called') 
   firstname.value = 'rachna'
},5000);

  </script>
  