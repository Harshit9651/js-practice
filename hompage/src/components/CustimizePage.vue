<template>
  <div>
    <div class="main-container">
      <div class="slidbar">
        <div class="ai-tools"><h3>AI editor tools</h3></div>
        <div class="hr-tag"><hr /></div>
        <div class="cards">
          <div v-for="card in cardData" :key="card.id" class="card" :class="{ selected:selectCard===card.id}" @click="handelClick(card.id)">
            <i :class="card.iconClass"></i>
            <h4>{{ card.text }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import{ref} from 'vue'
const cardData = [
  { iconClass: "fa-solid fa-rotate", text: "replace products", id: 1 },
  { iconClass: "fa-solid fa-plus", text: "add products", id: 2 },
  { iconClass: "fa-solid fa-circle-right", text: "Move products", id: 3 },
  { iconClass: "fa-solid fa-ribbon", text: "Change Wall/floor", id: 4 },
  { iconClass: "fa-solid fa-store", text: "Room styles", id: 5 },
  { iconClass: "fa-solid fa-ban", text: "Remove Objects", id: 6 },
  { iconClass: "fa-solid fa-ban", text: "Remove Objects", id: 6 },

];
const selectCard = ref(null);
function handelClick(id){
  selectCard.value = id
  console.log(`seletct card value is ${selectCard.value}`)
  alert('yes')
}
</script>
<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

* {
  margin: 0;
  padding: 0;
}
.main-container {
  background-color: rgb(255, 255, 255);
  top: 0%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  .slidbar {
    top: 0%;
    right: 0%;
    width: 20%;
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
        // position: relative;
        height: 7.25rem;
        width: 9.25rem;
        box-shadow: -1px 0 3px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
       
      }

    }
  }
}
</style>
