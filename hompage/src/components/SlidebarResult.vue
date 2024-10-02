<template>
  <div class="main">
    <div class="sidebar">
      <div class="header"><h2>Output Settings</h2></div>
      <div class="br-tag"><hr /></div>
      <div class="text-input">
        <label class="input-label" for="">Text Input</label>
        <input class="input-input" type="text" />
      </div>
      <div class="br-tag"><hr /></div>
      <div class="styles">
        <h3>styles</h3>
        <div class="circle"><i class="fa-solid fa-plus"></i></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// State to toggle the visibility of cards
const showCards = ref(false);

// Sample card data with images
const cards = ref([
  { title: "Card 1", image: "https://via.placeholder.com/150" },
  { title: "Card 2", image: "https://via.placeholder.com/150" },
  { title: "Card 3", image: "https://via.placeholder.com/150" },
  { title: "Card 4", image: "https://via.placeholder.com/150" },
  { title: "Card 5", image: "https://via.placeholder.com/150" },
  { title: "Card 6", image: "https://via.placeholder.com/150" }
]);

// Function to toggle the display of cards and change the icon
function toggleCards() {
  showCards.value = !showCards.value;
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.main {
  display: flex;
  justify-content: flex-end;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  height: 100vh;
  width: 326px;
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
  .header {
    margin-top: 7%;
    display: flex;
    background-color: rgb(255, 255, 255);
    padding-left: 20px;
  }
  .br-tag {
    margin-top: 7%;
    width: 100%;
    background-color: rgb(243, 238, 233);
  }
  .text-input {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    .input-label {
      margin-top: 2%;
      display: flex;
      padding-left: 20px;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .input-input {
      margin-top: 4%;
      display: flex;
      margin-left: 20px;
      height: 103px;
      width: 294px;
      border-radius: 10px;
      background-color: rgb(238, 244, 244);
      border: none;
    }
  }
  .styles{
    display:flex;
    justify-content: space-between;
    background-color: aqua;

  }
}
</style>
