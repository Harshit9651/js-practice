<template >
<div>
<ul>
    <li v-for="item in learn" :key ="item">
        {{ item }}
    </li>
</ul>
<br><br>
<ul>
    <li v-for="data in users" :key ="data">
 name :{{  data.name }}  email: {{ email = data.email }}  phoneNumber:{{ phonenumber = data.number }}
    </li>
</ul>
<ChildComponent name="harshit sharma " :getfunction ='getfunction'/>
</div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default{
    
    name:'NewComponent',
    components:{
ChildComponent
    },methods:{
        getfunction(){
console.warn('called a function')
alert('hello')
        }
    },
    data(){
       return {
        name:'bhandu lala',
learn:['ram', 'nam' , 'staye ho', 'hari', 'ko', 'shri', 'hari','kaho', 'bolo'],
 users: [
  {
    name: "Harshit Sharma",
    email: "harshit.sharma@example.com",
    number: "9876543210"
  },
  {
    name: "Anjali Mehta",
    email: "anjali.mehta@example.com",
    number: "9123456789"
  },
  {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    number: "9234567890"
  },
  {
    name: "Pooja Singh",
    email: "pooja.singh@example.com",
    number: "9345678901"
  },
  {
    name: "Aman Verma",
    email: "aman.verma@example.com",
    number: "9456789012"
  },
  {
    name: "Riya Patel",
    email: "riya.patel@example.com",
    number: "9567890123"
  },
  {
    name: "Vikas Yadav",
    email: "vikas.yadav@example.com",
    number: "9678901234"
  },
  {
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    number: "9789012345"
  },
  {
    name: "Mohit Sharma",
    email: "mohit.sharma@example.com",
    number: "9890123456"
  },
  {
    name: "Priya Agarwal",
    email: "priya.agarwal@example.com",
    number: "9901234567"
  }
]


  
        }
        
    }
}
</script>