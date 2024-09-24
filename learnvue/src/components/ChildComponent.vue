<template>
    <div><h1>{{ name }}</h1>
    <button v-on:click="getfunction()">click me </button></div>
</template>
<script>
export default{
    name:'ChildComponent',
    props:{
        name:String,
        getfunction: Function
    }
}

</script>
