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

            <i
              v-if="selectCard === card.id"
              class="fa-solid fa-check icon-right"
            ></i>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="nav-bar">
          <div class="heading-left_content">
            <div class="nav-left">
              <p>home</p>
              <i class="fa-solid fa-chevron-right"></i>
              <p>Re-Image</p>
            </div>
            <div class="cus"><h1>Custimize</h1></div>
          </div>
          <div class="heading-right_content">
            <div class="circle">
              <i class="fa-solid fa-arrow-left-long"></i>
            </div>
            <div class="circle">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <div class="divider"></div>
            <div class="circle"><i class="fa-solid fa-download"></i></div>
          </div>
        </div>
        <div class="main-card">
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Description of image"
            class="main-card-image"
          />
        </div>
        <div class="bottom-comp">
          <div class="circle"><i class="fa-solid fa-plus"></i></div>
          <div class="circle"><i class="fa-solid fa-minus"></i></div>
        </div>
        <div class="button-outer">
          d
          <div class="button-main-div">
            <div class="left-div">hii</div>
            <div class="right-div">by</div>
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
}
</script>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

* {
  margin: 0;
  padding: 0;
}
.main-container {
  margin-top: 4.7rem;
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
          color: black;
          border-radius: 0.3rem;

          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1),
            0 0 20px 5px rgba(0, 0, 0, 0.1), 0 0 30px 0 rgba(77, 138, 255, 0.5),
            0 0 40px 0 rgba(245, 63, 158, 0.5),
            0 0 50px 0 rgba(255, 144, 81, 0.5);
        }

        h4 {
          margin: 0;
          font-size: 1rem;
        }

        .icon-right {
          position: absolute;
          top: 5px;
          // right: 5px;
          right: 0px;
          color: green;
          font-size: 1.2rem;
          background-color: aqua;
        }
      }
    }
  }

  .main-content {
    height: 100vh;
    width: calc(100% - 22%);
    margin-left: auto;
    margin-right: 22%;
    margin-top: 0%;

    .nav-bar,
    .main-card {
      width: 51.5rem;
      margin-left: auto;
      margin-right: auto;
    }

    .nav-bar {
      display: flex;
      justify-content: space-between;
      background-color: rgb(255, 255, 255);
      margin-bottom: 1rem;

      .heading-left_content {
        width: 14.5rem;
        background-color: rgb(255, 255, 255);

        .nav-left {
          display: flex;
          margin-left: 5%;
          gap: 0.5rem;
        }
        .cus {
          display: flex;
          background-color: rgb(255, 255, 255);
          margin-left: 10px;
        }
      }

      .heading-right_content {
        margin: 10px;
        height: 10%;
        display: flex;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        gap: 0.5rem;

        .circle {
          height: 3.125rem;
          width: 3.125rem;
          border-radius: 50%;
          background-color: rgb(255, 255, 255);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
        }

        .divider {
          margin-top: 0.2rem;
          margin-left: 0.5rem;
          width: 3px;
          height: 40px;
          background-color: #ffffff;
          box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
        }
      }
    }

    .main-card {
      height: 35rem;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
      .main-card-image {
        padding: 10px;
        max-width: 100%;
        height: auto;
        border-radius: 1.5rem;
        width: 51rem;
      }
    }
    .bottom-comp {
      display: flex;
      background-color: rgb(255, 255, 255);
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      .circle {
        height: 3.125rem;
        width: 3.125rem;
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
      }
    }
    .button-outer {
      display: flex;
      background-color: rgb(148, 53, 53);
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      .button-main-div {
        margin-bottom: 30%;
        height: 4.5rem;
        width: 20rem;
        background-color: aquamarine;
        border-radius: 3.75rem;
        .left-div {
          width: 8rem;
          height: 3.5rem;
          border-radius: 30%;
          background-color: bisque;
        }
        .right-div {
          width: 8rem;
          height: 3.5rem;
          border-radius: 30%;
          background-color: pink;
        }
      }
    }
  }
}
</style>
