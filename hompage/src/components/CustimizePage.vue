
<template>
  <div>
    <div class="main-container">
      <div class="slidbar">
        <div class="ai-tools"><h3>AI editor tools</h3></div>
        <div class="hr-tag"><hr /></div>
        <div class="cards">
          <div
            v-for="card in cardData"
            :key="card.id"
            class="card"
            :class="{ selected: selectCard === card.id }"
            @click="handleClick(card.id)"
          >
            <i :class="card.iconClass"></i>
            <h4 :style="{ color: selectCard === card.id ? 'red' : 'black' }">
              {{ card.text }}
            </h4>
            <!-- Right corner icon will be shown when card is selected -->
            <i
              v-if="selectCard === card.id"
              class="fa-solid fa-check icon-right"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cardData = [
  { iconClass: "fa-solid fa-rotate", text: "replace products", id: 1 },
  { iconClass: "fa-solid fa-plus", text: "add products", id: 2 },
  { iconClass: "fa-solid fa-circle-right", text: "Move products", id: 3 },
  { iconClass: "fa-solid fa-ribbon", text: "Change Wall/floor", id: 4 },
  { iconClass: "fa-solid fa-store", text: "Room styles", id: 5 },
  { iconClass: "fa-solid fa-ban", text: "Remove Objects", id: 6 },
];

const selectCard = ref(null);

function handleClick(id) {
  selectCard.value = id;
  console.log(`Selected card ID is ${selectCard.value}`);
}
</script>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

* {
  margin: 0;
  padding: 0;
}
.main-container {
  margin-top: 10rem;
  background-color: rgb(255, 255, 255);
  top: 0%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  .slidbar {
    margin-top: 4rem;
    top: 0%;
    right: 0%;
    width: 22%;
    position: fixed;
    height: 100vh;
    background-color: rgb(243, 243, 247);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
    .ai-tools {
      display: flex;
      margin-top: 8%;
      margin-left: 5%;
      margin-bottom: 8%;
    }
    .hr-tag {
      width: 100%;
      border: 2px solid transparent;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 0.1rem;
      justify-content: space-around;
      .card {
        height: 7.25rem;
        width: 9.25rem;
        box-shadow: -1px 0 3px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        position: relative;
        cursor: pointer;

        border-radius: 0.3rem;
         border: 0.2rem solid transparent;

        &.selected {
          border: 0.2rem solid;
          border-image: linear-gradient(
            277.64deg,
            #4d8aff 8.32%,
            #f53f9e 51.79%,
            #ff9051 96.13%
          );
          border-image-slice: 1;
          background-color: white;
          color: black;
          border-radius: 1rem;
        }

        h4 {
          margin: 0;
          font-size: 1rem;
        }

        .icon-right {
          position: absolute;
          top: 5px;
          right: 5px;
          color: green;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
