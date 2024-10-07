<template>
  <div>
    <div class="heading">
      <h1>Re-Imageine</h1>
    </div>
    <div class="container">
      <div class="main-container">
        <div class="left">
          <div class="left-up" v-if="isfile">
            <img
              class="left-img"
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h3>living_room.jpg</h3>
          </div>
          <div class="left-down" v-if="isfile">
            <p class="left-down-p"><i class="fa-solid fa-trash"></i> Delete</p>
          </div>

          <div class="left-else" v-else>
            <span @click="triggerFileInput" class="add-icon"
              ><div class="else-main-circle">
                <div class="else-circle">
                  <i class="fa-solid fa-plus"></i>
                </div></div
            ></span>
          <h4>Drag & Drop or copy paste the image </h4>
          <br>
          <p id="fonting">Suport formats : png or jpg</p>
          </div>
        </div>

        <div class="right">
          <div class="output-setting">
            <h3 id="min-heading">Output Setting</h3>
            <hr class="solid-line" />
            <label class="test-input" for="text-input">Text Input</label>
            <input
              type="text"
              id="text-input"
              class="input-field"
              placeholder="Enter your desired design ..."
            />
            <label class="chose-style" for="choose-style">Choose Style</label>
            <div class="image-carousel">
              <div class="image-cards">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="image-card"
                  :class="{ active: activeIndex === index }"
                  @click="selectImage(index)"
                >
                  <img :src="image.src" :alt="image.label" />
                  <div class="label">{{ image.label }}</div>
                  <div class="overlay" v-if="activeIndex === index">
                    <div class="outer-circle">
                      <i class="fa-solid fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button @click="Redricttootherpage()" class="generate-btn">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const Router = useRouter();
let isfile = ref(false);
const images = ref([
  { src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', label: 'Bathroom' },
  { src: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Living' },
  { src: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Dinig' },
  { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Kitcehn' },
  { src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Modern' },
  { src: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'colorfull' },
  { src: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Bohemian' },
]);
const activeIndex = ref(0); 

function showfile() {
  const file = sessionStorage.getItem("uploadedImage");
  if (file) {
    isfile = true;
  }
}
showfile();
function selectImage(index) {
  activeIndex.value = index; 
}
function Redricttootherpage() {
  Router.push("/result");
}
</script>
<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(228, 231, 235);
}

.heading {
  margin-top: 6rem;
  margin-right: 55%;
  display: flex;
  justify-content: center;
 
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main-container {
  width: 1050px;
  height: 700px;
  background-color: rgb(228, 231, 235);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
}

.left {
  width: 364px;
  height: 655px;
  background: rgb(228, 231, 235);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  .left-else {
    height: 652px;
    width: 364px;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .else-main-circle {
      height: 150px;
      width: 150px;
      background: #f5effe;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      .else-circle {
        height: 56px;
        width: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: linear-gradient(
          277.64deg,
          #4d8aff 8.32%,
          #f53f9e 51.79%,
          #ff9051 96.13%
        );
        .fa-plus {
          color: white;
        }
      }
    }
    #fonting{
font-weight: 500;
font-size: 14px;

    }
  }
}

.left-up {
  width: 364px;
  height: 587px;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
}

.left-down {
  margin-top: 3px;
  width: 364px;
  height: 65px;
  background: #fcfcfc;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0.5rem 0.5rem;
}

.left-img {
  width: 332px;
  height: 332px;
  border-radius: 2.4rem;
  padding: 10px;
}

.left-down-p {
  font-weight: 100;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -2%;
  align-items: center;
}

.right {
  width: 600px;
  height: 615px;
  background-color: rgb(253, 253, 253);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 0.5rem;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
}

.output-setting h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

#min-heading {
  color: #100724;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 30rem;
}

.test-input {
  color: #100724;
  font-weight: bold;
  font-size: large;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-right: 31.5rem;
  display: block;
}

.chose-style {
  color: #100724;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 25px;
  margin-bottom: 5px;
  margin-right: 31.5rem;
  display: block;
}

.solid-line {
  border: 1px solid gray;
  margin: 10px 0;
}

.input-field {
  width: 552px;
  padding: 8px;
  height: 103px;
  margin-bottom: 0px;
  border-radius: 10px;
  border: 1px;
  padding-left: 8px 15px;
  margin-top: 0px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 100%;
  }
}

::placeholder {
  padding-left: 10px;
  padding-top: 0px;
}

.image-carousel {
  display: flex;
  align-items: center;
}

.image-cards {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.image-card {
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  transition: border-color 0.3s ease;

  img {
    width: 90px;
    height: 90px;
    border-radius: 10px;
  }

  .label {
    text-align: center;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 500;
    font-family: sans-serif;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;

    i {
      font-size: 20px;
      background: linear-gradient(
        277.64deg,
        #4d8aff 8.32%,
        #f53f9e 51.79%,
        #ff9051 96.13%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  &.active .overlay {
    opacity: 1;
  }
}

.outer-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #ffffff;
}

.generate-btn {
  margin-top: 11.5rem;
  padding: 10px 20px;
  background: linear-gradient(
    277.64deg,
    #4d8aff 8.32%,
    #f53f9e 51.79%,
    #ff9051 96.13%
  );
  color: white;
  border: none;
  width: 242px;
  height: 40px;
  border-radius: 53px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      277.64deg,
      #3379fa 8.32%,
      #f53f9e 51.79%,
      #c56229 96.13%
    );
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
