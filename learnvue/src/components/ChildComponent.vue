<template>
<div>    <h1>hello parnts componenent </h1>
    <h1>{{ item }}</h1></div>
</template>
<script>
export default{
    name:'ChildComponent',
    props:{
        data : Object,
        item:Array,
      
    }
}

</script>
