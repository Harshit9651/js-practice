<template>
  <div class="main">
    <div class="sidebar">
      <div class="header">
        <h2>Output Settings</h2>
      </div>
      <div class="br-tag">
        <hr />
      </div>
      <div class="text-input">
        <label class="input-label" for="">Text Input</label>
        <input class="input-input" type="text" />
      </div>
      <div class="br-tag">
        <hr />
      </div>
      <div class="styles">
        <h3>Styles</h3>
        <div class="circle" @click="toggleCards">
          <i :class="showCards ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
        </div>
      </div>

      <div v-if="showCards" class="cards">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <img :src="card.image" alt="Image" class="card-image" />
        </div>
      </div>
      <div class="content">
        <h4>Insperitation Image</h4>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
      </div>
      <div class="add-data">
        <div class="add-data-circle"><i class="fa-solid fa-plus"></i></div>
        Upload Insperitation Image
      </div>
    </div>
    <button class="hide-slidbar">click me </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showCards = ref(false);

const cards = ref([
  {
    title: "Card 1",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Card 2",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Card 3",
    image:
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Card 4",
    image:
      "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Card 5",
    image:
      "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Card 6",
    image:
      "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
]);

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
  .styles {
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    padding: 10px;
  }
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #d2cecc;
    color: white;
    cursor: pointer;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
    justify-content: space-around;
    .card {
      background-color: #ffffff;

      width: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
    }
    .card-image {
      height: 90px;
      width: 90px;
      border-radius: 10px;
    }
  }
  .content {
    margin-top: 7%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .add-data {
    margin-top: 8%;
    margin-left: 20px;
    height: 56px;
    width: 294px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-image-source: linear-gradient(
      277.64deg,
      #4d8aff 8.32%,
      #f53f9e 51.79%,
      #ff9051 96.13%
    );
    border-image-slice: 1;
    gap: 10px;
    color: #ff5c00;
    border-radius: 50%;

    .add-data-circle {
      height: 35px;
      width: 35px;
      background: #ff5c00;
      color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .hide-slidbar {
  position: absolute;
  top: 50%;
  left: -70px;
  transform: translateY(-50%);
  background: #ff5c00;
  color: white;
  border-radius: 0 50px 50px 0;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 500;
}
}
</style>
