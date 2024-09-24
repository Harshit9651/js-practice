<template >
<div>
    <h1 v-if="show">hii this is true condition </h1> 
    <h1 v-else>hii this is false condition </h1> 
  
  <button v-on:click="getdata()">clicl me </button>
  <button v-on:dblclick="getnewdata('data is add here ')">clik me for conole </button>
  <input type="text" placeholder="enter email" v-model="Email">
  <br><br>
  <input type="password" placeholder="enter password" v-model="password">
<br>
<button v-on:click="getformdata()"> Get Form data </button>

<button v-on:click="show=!show"> beti chod </button>
</div>
</template>
<script>

export default{
    name:'NewComponent',
    data(){
       return {
     
    Email:null,
    password:null,
    show:false,
        
        }
    },methods:{
        getdata(){
           
           return this.count = 1+this.count
     
        },
        getnewdata(){
           
         alert(`bhn ke lode teri ma ki chut sale ${this.count}`)
            
        },
        getformdata(){
            console.log(`user enail is ${this.Email} and User Password is ${this.password}`)
        },
    
        
    }
    
}
</script>