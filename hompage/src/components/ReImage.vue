
<template>
  <div>
    <h1 class="heading">Re-Imagine</h1>
    <div class="container">
      <div class="main-container">
        <div 
          class="overlay-box"
          @dragover.prevent="handleDragOver"
          @dragleave="handleDragLeave"
          @drop.prevent="handleFileDrop"
        >
          <div class="inner-box">
            <div class="outer-circle">
              <div class="inner-circle">
                <span @click="triggerFileInput" class="plus-icon">+</span>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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
    console.log('Selected file:', file);
    console.log('File URL:', fileURL);
    Router.push('/createdesign');
  } else {
    console.log('No file selected.');
  }
};

const handleDragOver = (event) => {
  event.currentTarget.classList.add('dragover');
  console.log('Dragging over');
};

const handleDragLeave = (event) => {
  event.currentTarget.classList.remove('dragover');
  console.log('Drag leave');
};

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    sessionStorage.setItem('uploadedImage', fileURL);
    console.log('Dropped file:', file);
    console.log('File URL:', fileURL);
    Router.push('/createdesign');
  } else {
    console.log('No file dropped.');
  }
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
    #765e5e51 -1.78%,
    #f890905c 41.93%,
    #f8b7895d 71.73%,
    #d47c7c45 97.56%
  );
  border-radius: 1rem;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(
      277.64deg,
      rgba(40, 103, 220, 0.07) 8.32%,
      rgba(245, 63, 158, 0.07) 51.79%,
      rgba(255, 144, 81, 0.07) 96.13%
    )
    3;
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

.overlay-box.dragover {
  border: 2px dashed #4d8aff; /* Highlight border when dragging file */
  background-color: rgba(77, 138, 255, 0.1); /* Optional background on dragover */
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
