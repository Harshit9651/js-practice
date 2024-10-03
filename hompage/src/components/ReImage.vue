<template>
  <div>
    <h1 class="heading">Re-Imagine</h1>
    <div class="container">
      <div class="main-container">
        <div class="child-container"></div>
        <div class="overlay-box">
          <div class="inner-box">
            <div class="outer-circle">
              <div class="inner-circle">
                <span  @click="triggerFileInput" class="plus-icon">+</span>
              </div>
            </div>
            <h2>Drag and drop or copy paste the image</h2>
            <p2>Supported formats: PNG, JPG</p2>
            <input
              type="file"
              ref="fileInput"
              @change="handleFileUpload"
              accept="image/png, image/jpeg"
              style="display: none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import{useRouter} from 'vue-router'
import { ref } from "vue";
const Router = useRouter();


const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    sessionStorage.setItem('uploadedImage', fileURL); 
    console.log("Selected file:", file); 
    console.log("File URL:", fileURL); 
  } else {
    console.log("No file selected."); 
  }
  Router.push('/createdesign'); 
};

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: rgb(255, 255, 255);
}

.heading {
  font-weight: 700;
  font-size: 20px;
  margin-right: 58%;
  line-height: 24px;
  margin-top: 20px;
}

.main-container {
  width: 980px;
  height: 560px;
  background: linear-gradient(
    42.57deg,
    #765e5e -1.78%,
    #f89090 41.93%,
    #f8b789 71.73%,
    #d47c7c 97.56%
  );
  border-radius: 1rem;
  box-shadow: 5px 5px 5px 5px rgba(219, 135, 9, 0.3);
  border: #d47c7c;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-box {
  width: 355px;
  height: 355px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.inner-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.outer-circle {
  width: 120px;
  height: 120px;
  background-color: #f5effe;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-circle {
  width: 56px;
  height: 56px;
  background: linear-gradient(
    277.64deg,
    #4d8aff 8.32%,
    #f53f9e 51.79%,
    #ff9051 96.13%
  );

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.plus-icon {
  font-size: 48px;
  color: rgb(255, 255, 255);
}

h2 {
  font-size: 20px;
  color: #100724;

  margin: 10px 0;
}

p2 {
  font-size: 14px;
  color: #9f9ca7;
  font-weight: 500;
}
</style>
