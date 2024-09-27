<template>
    <div id="app">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-left">
          <div class="ai-icon">🤖</div>
          <span class="site-name">Foyr Ai</span>
        </div>
        <div class="navbar-center">
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>My Design</li>
            <li>Whislet</li>
          </ul>
        </div>
        <div class="navbar-right">
          <button class="credit-btn"> 30 Credit</button>
          <button class="upgrade-btn">Upgrade</button>
          <div class="divider"></div>
          <div class="user-profile">👤</div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="left-content">
          <h1>Design the home you desire</h1>
          <div class="input-wrapper">
            <input type="text" placeholder="Start your design here" />
            <button>Generate</button>
          </div>
        </div>
  
        <div class="right-content">
  <img
    class="hero-image main-image"
    src="../assets/mainimage.png"
    alt="Main"
  />
  <div class="sub-images"> <!-- Wrap sub-images in a container -->
    <img
      class="hero-image sub-image subimage1"
      src="../assets/subimage1.png"
      alt="Sub Image"
    />
    <img
      class="hero-image sub-image subimage2"
      src="../assets/subimag2.png"
      alt="Sub Image"
    />
  </div>
</div>

      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
 /* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  position: fixed; /* Makes the navbar stick to the top */
  top: 0;
  width: 100%; /* Makes the navbar span the full width */
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the navbar is above other content */

  .navbar-left {
    display: flex;
    align-items: center;

    .ai-icon {
      font-size: 24px;
      margin-right: 10px;
       background: #FF5C00;
      
    }

    .site-name {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .navbar-center {
    ul {
      list-style: none;
      display: flex;
      gap: 20px;

      li {
        cursor: pointer;
        font-size: 18px;
      }
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 10px; /* Adds gap between buttons */

    .credit-btn,
    .upgrade-btn {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }

    .credit-btn {
      background-color: black;
      color: white;
      gap: 10px; /* Gap between icon and text */
      
      /* Adding a gold coin icon and 30credits text */
      &::before {
        content: "🪙"; /* Use an icon font, emoji, or image for a gold coin */
        margin-right: 5px;
        font-size: 18px;
      }

      span {
        font-weight: bold;
      }
    }

    .upgrade-btn {
      /* Crown icon and background gradient for the upgrade button */
      background: linear-gradient(271.06deg, #BD3BFA 0.91%, #3FE8FF 103.4%);
      color: white;
      gap: 10px; /* Gap between icon and text */
      
      &::before {
        content: "👑"; /* Crown icon */
        margin-right: 5px;
        font-size: 18px;
      }
    }

    .divider {
      width: 1px;
      height: 40px;
      background-color: #ccc;
      margin: 0 10px;
    }

    .user-profile {
      font-size: 24px;
      cursor: pointer;
    }
  }
}
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align content vertically */
  padding: 50px;
  max-width: 100%; /* Ensure the section doesn't overflow */
  box-sizing: border-box; /* Includes padding in the element's width and height */
  background: linear-gradient(to right, 
    #FBB459B5, 
    #D9D9D9, 
    #5D8D4FC2, 
    #CBAF35CC, 
    #EC9797E5, 
    #F3D8B5B5);

  .left-content {
    flex: 1; /* Let it take up available space */
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 36px;
      text-align: left;
    }

    .input-wrapper {
      margin-top: 20px;
      display: flex;

      input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
      }

      button {
        padding: 10px 20px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  .right-content {
  flex: 1; /* Ensure it takes available space */
  display: flex;
  flex-direction: column; /* Stack main image on top */
  align-items: flex-end; /* Align main image to the right */

  .hero-image {
    opacity: 0.8;
    border-radius: 20px 0 0 0;
  }

  .main-image {
    width: 429px;
    height: 236px;
    margin-bottom: 20px; /* Space between main and sub images */
  }

  /* Change the display for sub images */
  .sub-images {
    display: flex; /* Set to flex to arrange sub-images horizontally */
    gap: 10px; /* Optional: add space between sub-images */
    margin-bottom: 0; /* Remove margin if needed */
  }

  .sub-image {
    width: 182px; /* Keep the same width for sub-images */
    height: 217px;
    opacity: 0.8; /* Maintain the same opacity */
    border-radius: 20px; /* Optional: add border-radius for styling */
  }
  .subimage1{
    width: 182px; /* Keep the same width for sub-images */
    height: 217px;
    opacity: 0.8; /* Maintain the same opacity */
    border-radius: 20px;
  }
  .subimage2{
    width: 231px; /* Keep the same width for sub-images */
    height: 217px;
    // opacity: 0.8; /* Maintain the same opacity */
    border-radius: 20px;
  }
}

}

  </style>