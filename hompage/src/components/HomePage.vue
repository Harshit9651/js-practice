<template>
  <div id="app">
 
    <nav class="navbar">
      <div class="navbar-left">
        <img src="../assets/foyrlogo.png" alt="Company Logo" class="company-logo" />
      </div>

      <div class="hamburger" @click="toggleNavbar">
        <i class="fa fa-bars">.</i>
      </div>


      <div :class="['navbar-center', { 'active': showNav }]">
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>My Design</li>
          <li>Whislet</li>
        </ul>
      </div>

  
      <div :class="['navbar-right', { 'active': showNav }]">
        <button class="credit-btn"><img src="../assets/coin-4 1.png" alt=""> 30 Credit</button>
        <button class="upgrade-btn"> <i class="fa-solid fa-crown"></i> Upgrade</button>
        <div class="divider"></div>
        <div class="user-profile"><i class="fa-regular fa-user"></i></div>
      </div>
    </nav>

    <section class="hero-section">
      <div class="left-content">
        <h1>Design the home you desire</h1>
        <div class="input-wrapper">
          <input type="text" placeholder="Describe the interior here ...." />
          <button class="generate-btn"><i class="fa-brands fa-galactic-republic"></i> Generate</button>
        </div>
      </div>

      <div class="right-content">
        <img class="hero-image main-image" src="../assets/mainimage.png" alt="Main" />
        <div class="sub-images">
          <img class="hero-image sub-image subimage1" src="../assets/subimage1.png" alt="Sub Image" />
          <img class="hero-image sub-image subimage2" src="../assets/subimag2.png" alt="Sub Image" />
        </div>
      </div>
    </section>
    
     <section class="transform-space">
      <h2>Transform Your Space with AI</h2>
      <div class="card-container">
  
  
      
          <CardPage 
          v-for="(image, index) in imageStore.images" 
          :key="index"
          :image="image.src"
          :title="image.label"
          :description="image.description"
          :buttonText="image.buttonText"
        />
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import CardPage from './CardPage.vue';
import { useImageStoreHomePage } from '@/stores/images';
const imageStore = useImageStoreHomePage();


const showNav = ref(false);


const toggleNavbar = () => {
  showNav.value = !showNav.value;
 };


</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&display=swap');
@import '@fortawesome/fontawesome-free/css/all.css';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .company-logo {
    width: 100px;
    height: auto;
  }

  .navbar-center,
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .navbar-center ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  .navbar-center li {
    cursor: pointer;
    font-size: 15px;
    &:hover{
      color: #dc550c;
      font: 300;
    }
  }

  .navbar-right .credit-btn,
  .navbar-right .upgrade-btn {
    padding: 10px 20px;
    border-radius: 1.8rem;
    border: none;
    cursor: pointer;
  }


  .credit-btn {
  background-color: black;
  color: white;
  transition: box-shadow 0.3s ease;
  padding: 10px 20px;
  border-radius: 1.8rem;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 10px; 

  img {
    width: 20px;
    height: auto;
  }
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2), 0 0 20px 10px rgba(0, 0, 0, 0.1), 
                0 0 30px 15px #bd3bfa; 
  }
}


  .upgrade-btn {
  background: linear-gradient(271.06deg, #bd3bfa 0.91%, #3fe8ff 103.4%);
  color: white;
  padding: 10px 20px; 
  border-radius: 1.8rem;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; 

  i {
    width: 20px; 
    height: auto;
  
  }
  &:hover{
    box-shadow: 0 0 10px 5px rgba(34, 130, 194, 0.2), 0 0 20px 10px rgba(197, 105, 105, 0.1), 
    0 0 30px 15px #291034; 
  }
}

  .divider {
    width: 1px;
    height: 40px;
    background-color: #ccc;
  }

  .user-profile {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 20px;
  }


  .hamburger {
    display: none;
    font-size: 30px;
    cursor: pointer;
  }

 
  @media (max-width: 768px) {
    .navbar-center,
    .navbar-right {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      z-index: 999;
    }

    .navbar-center.active,
    .navbar-right.active {
      display: flex;
    }

    .navbar-center ul {
      flex-direction: column;
      padding: 0;
    }

    .hamburger {
      display: block;
    }
  }
}


.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  max-width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to right,
      #FBB459B5,
      #D9D9D9,
      #5D8D4FC2,
      #CBAF35CC,
      #EC9797E5,
      #F3D8B5B5);

  // Left content styles
  .left-content {
    width: 487px;
    height: 196px;
    border-radius: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-family: 'Unbounded';
      font-size: 40px;
      font-weight: 700;
      line-height: 56px;
      letter-spacing: -0.03em;
      text-align: left;
      color: black;
    }

    .input-wrapper {
      margin-top: 20px;
      display: flex;
      align-items: center;
      position: relative;

      input {
        padding: 20px;
        width: 365px;
        border: 2px solid #ccc;
        border-radius: 30px;
        outline: none;
        transition: border-color 0.3s;
        padding-right: 100px;

        &:focus {
          border-color: #3498db;
        }
      }

      .generate-btn {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        padding: 15px 25px;
        background: linear-gradient(277.64deg, #4D8AFF 8.32%, #F53F9E 51.79%, #FF9051 96.13%);
        color: white;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: linear-gradient(277.64deg, #FF9051 8.32%, #F53F9E 51.79%, #4D8AFF 96.13%);
        }
      }
    }
  }

  // Right content styles
  .right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .hero-image {
      opacity: 0.8;
      border-radius: 20px;
    }

    .main-image {
      width: 429px;
      height: 236px;
      margin-bottom: 20px;
    }

    .sub-images {
      display: flex;
      gap: 10px;
    }

    .sub-image {
      width: 182px;
      height: 217px;
      border-radius: 20px;
    }

    .subimage2 {
      width: 231px;
      height: 217px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;

    .left-content {
      width: 100%;
      height: auto;

      h1 {
        font-size: 28px;
        line-height: 40px;
      }

      .input-wrapper {
        flex-direction: column;

        input {
          width: 100%;
          margin-bottom: 10px;
          padding: 15px; 
        }

        .generate-btn {
          width: 30%;
          padding: 9px; 
   
        }
      }
    }

    .right-content {
      width: 100%;
      align-items: center;
      margin-top: 20px;

      .main-image {
        width: 100%;
        height: auto;
        max-width: 300px;
      }

      .sub-images {
        flex-direction: column;
        align-items: center;

        .sub-image {
          width: 100%;
          height: auto;
          max-width: 200px;
          margin-bottom: 10px;
        }
      }
    }
  }
}

.transform-space {
  margin-top: 50px; 
  padding: 20px;

}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
}
</style>