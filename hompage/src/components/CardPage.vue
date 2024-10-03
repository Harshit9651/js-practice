<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image" />
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-description">{{ description }}</p>
    <button v-on:click="redricet()" class="reimage-button">{{ buttonText }}</button>
  </div>
</template>

<script >
import { defineComponent } from "vue";


export default defineComponent({
  name: "CardComponent",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Re-Imagine My Room",
    },
  },
});

</script>
<script setup>
import {useRouter} from 'vue-router'
const Router = useRouter()
function redricet(){
Router.push('/Re-Image')
}
</script>

<style lang="scss" scoped>
.card {
  width: 367px;
  height: 320px;
  border-radius: 20px;
  border: 2px solid transparent;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
//   overflow: hidden;

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  .card-title {
    font-size: 20px;
    margin: 10px 0;
  }

  .card-description {
    font-size: 14px;
    margin: 10px 0;
  }

  .reimage-button {
    padding: 10px 20px;
    background: linear-gradient(
      277.64deg,
      #4d8aff 8.32%,
      #f53f9e 51.79%,
      #ff9051 96.13%
    );
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
   bottom: -5%;

    &:hover {
      background: linear-gradient(
        277.64deg,
        #ff9051 8.32%,
        #f53f9e 51.79%,
        #4d8aff 96.13%
      );
    }
  }
}
</style>
