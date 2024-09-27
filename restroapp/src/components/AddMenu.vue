<template>
    <form @submit.prevent = 'handleSubmit'>
        <input v-model="menudata.name" type="text" placeholder="enter menu name " id="">
        <br>
         <input v-model="menudata.price" type="tel" placeholder="enter menu name " id="">
         <br>
         <input v-model="menudata.description" type="textarea" placeholder="enter description  " id="">
         <b></b>
       
       
    </form>
</template>
<script setup>
import{ref} from 'vue'

const menudata = ref({
name : ' ',
description : ' ',
price: ' '
})

async function  handleSubmit(){
    try{
   const response = await fetch('http://localhost:3000/MenuItem',
   {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(menudata.value)
})
console.log(response)

    }catch(err){
console.log('error accured')
    }
}

</script>