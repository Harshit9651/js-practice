<template>
  <div class="wrapper">
    <div class="main-container">
      <header class="header">
        <i class="fa-solid fa-chevron-left"></i>
        <h1>Results</h1>
      </header>
      <div class="card">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="card_image"
        />
        <div class="buttons">
          <button class="button1">
            <i class="fa-solid fa-pen"></i> custimize
          </button>
          <button class="button2">
            <i class="fa-solid fa-lock"></i> shooping
          </button>
        </div>
      </div>

      <div class="cards">
        <div
          v-for="(image, index) in [1, 2, 3]"
          :key="index"
          class="image-card"
          @click="handleClick(index)"
          :style="{
            borderImage:
              clickedIndex === index
                ? 'linear-gradient(277.64deg, #4D8AFF 8.32%, #F53F9E 51.79%, #FF9051 96.13%) 1'
                : 'none',
            borderWidth: clickedIndex === index ? '3px' : '1px',
            borderStyle: 'solid',
            borderRadius: '20px',
          }"
        >
          <img
            :src="`https://images.pexels.com/photos/${
              271624 + index
            }/pexels-photo-${
              271624 + index
            }.jpeg?auto=compress&cs=tinysrgb&w=600`"
            alt="image-card"
          />
          <div
            class="overlay"
            :style="{ opacity: clickedIndex === index ? 1 : 0 }"
          >
            <div class="outer-circle"><i class="fa-solid fa-check"></i></div>
          </div>
        </div>
        <div class="image-card generate">
          <div class="circle"><i class="fa-solid fa-plus"></i></div>
          <a href="">Generate-more</a>
        </div>
      </div>
    </div>
    <button class="top-right-button">
      <i class="fa-solid fa-gear"></i> Setting
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const clickedIndex = ref(null);

function handleClick(index) {
  clickedIndex.value = index;
}
</script>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

html,
body {
  height: 100%;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
}
.wrapper {
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;

  .main-container {
    height: 765px;
    width: 623px;
    background-color: rgb(249, 249, 249);

    .header {
      margin-top: 0.6rem;
      margin-left: 0.5rem;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .card {
      margin-top: 20px;
      height: 536px;
      width: 622px;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      display: flex;
      flex-direction: column;

      img {
        padding: 10px;
        height: 448px;
        width: 598px;
        border-radius: 20px;
      }

      .buttons {
        display: flex;
        justify-content: space-evenly;
        gap: 10px;
        width: 100%;
        padding: 0 10px;
        margin-top: 10px;

        .button1 {
          flex-basis: 55%;
          height: 48px;
          border-radius: 53px;
          border: none;
          background: linear-gradient(
            277.64deg,
            #4d8aff 8.32%,
            #f53f9e 51.79%,
            #ff9051 96.13%
          );
          color: white;
          cursor: pointer;
        }

        .button2 {
          flex-basis: 30%;
          height: 48px;
          border-radius: 100px;
          border: 2px;
          background: rgb(235, 232, 232);
          color: #000000;
          cursor: pointer;
        }
      }
    }
  }

  .cards {
    display: flex;
    margin-top: 15px;
    gap: 20px;

    .image-card {
      padding: 1px;
      border: 1px solid rgb(197, 197, 205);
      border-radius: 6px;
      position: relative;
      img {
        height: 107px;
        width: 140px;
        border-radius: 6px;
        display: block;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border-radius: 6px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .outer-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background: #ffffff;
        color: white;
        font-size: 20px;
      }
      .fa-check {
        background: linear-gradient(
          277.64deg,
          #4d8aff 8.32%,
          #f53f9e 51.79%,
          #ff9051 96.13%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .generate {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      background-color: #f7f7f7;
      border-width: 2px;
      border-style: solid;
      border-image: linear-gradient(
          277.64deg,
          #4d8aff 8.32%,
          #f53f9e 51.79%,
          #ff9051 96.13%
        )
        1;

      .image-card {
        border: 1px solid rgb(197, 197, 205);
        border-radius: 50%;
        overflow: hidden;
      }

      .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: #ff5c00;
        color: white;
        font-size: 20px;
        margin-bottom: 10px;
      }

      a {
        color: #ff5c00;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        margin-top: 5px;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
  .top-right-button {
    position: absolute;
    top: 10rem;
    right: 0rem;
    height: 44px;
    width: 136px;
    padding: 10px 20px;
    border-radius: 100px 0px 0px 100px;
    border: none;
    background: linear-gradient(
      277.64deg,
      #4d8aff 8.32%,
      #f53f9e 51.79%,
      #ff9051 96.13%
    );
    color: white;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 14px;
  }
}
</style>
