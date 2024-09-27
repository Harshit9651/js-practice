<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
    
        <div class="navbar-left">
        <img src="../assets/foyrlogo.png" alt="Company Logo" class="company-logo" /> <!-- Replace with your logo path -->
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
        <button class="credit-btn">30 Credit</button>
        <button class="upgrade-btn">Upgrade</button>
        <div class="divider"></div>
        <div class="user-profile"><i class="fa-regular fa-user"></i></div>
      </div>
    </nav>

    <!-- Hero Section -->
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
     <!-- Transform Your Space Section -->
     <section class="transform-space">
      <h2>Transform Your Space with AI</h2>
      <div class="card-container">
  
        <CardPage 
          image="../assets/cardimage.png" 
          title="Beautiful Living Room" 
          description="A cozy and stylish living room that makes you feel at home." 
        />
        <CardPage 
          image="../assets/cardimage.png" 
          title="Beautiful Living Room" 
          description="A cozy and stylish living room that makes you feel at home." 
        />
        <CardPage 
          image="../assets/cardimage.png" 
          title="Beautiful Living Room" 
          description="A cozy and stylish living room that makes you feel at home." 
        />
        <CardPage 
          image="../assets/cardimage.png" 
          title="Beautiful Living Room" 
          description="A cozy and stylish living room that makes you feel at home." 
        />
      
      </div>
    </section>
  </div>
</template>
<script>
import CardPage from './CardPage.vue';
export default {
  components: {
    CardPage,
  },
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



// .navbar {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   padding: 20px;
//   background-color: white;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   z-index: 1000;

//   .navbar-left {
//     display: flex;
//     align-items: center;

//     .company-logo {
//       width: 100px;
//       height: auto; 
//     }
//   }

//   .navbar-center {
//     flex-grow: 1;  
//     display: flex;  flex-shrink: 1;
//     justify-content: center; 
    
//     ul {
//       list-style: none;
//       display: flex;
//       gap: 20px;

//       li {
//         cursor: pointer;
//         font-size: 15px;
//       }
//     }
//   }

//   .navbar-right {
 
//     display: flex;
//   align-items: center;
//   gap: 10px;
//   white-space: nowrap;

//     .credit-btn,
//     .upgrade-btn {
//       display: flex;
//       align-items: center;
//       padding: 10px 20px;
//       border: none;
//       cursor: pointer;
//       border-radius: 1.8rem;
//     }

//     .credit-btn {
//   background-color: black; 
//   color: white;
//   gap: 10px;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;
//   position: relative;
//   transition: all 0.3s ease;
//   z-index: 1; 
//   overflow: hidden; 
// }

// .credit-btn::before {
//   content: "🪙";
//   margin-right: 5px;
//   font-size: 18px;
// }


// .credit-btn:hover {
//   box-shadow: 0px 0px 20px 10px rgba(189, 59, 250, 0.6),0px 0px 40px 20px rgba(63, 232, 255, 0.4);
// }



//     .upgrade-btn {
//       background: linear-gradient(271.06deg, #BD3BFA 0.91%, #3FE8FF 103.4%);
//       color: white;
//       gap: 10px;
//       &::before {
//         content: "👑";
//         margin-right: 5px;
//         font-size: 18px;
//       }
//     }

//     .divider {
//       width: 1px;
//       height: 40px;
//       background-color: #ccc;
//       margin: 0 10px;
//     }

//     .user-profile {
//       font-size: 18px;
//       padding: 5px 10px;
//       background-color: #f0f0f0;
//       border-radius: 20px;
//       white-space: nowrap;  /* Prevent text from wrapping */
//     }
//   }
// }
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

  .navbar-left {
    display: flex;
    align-items: center;

    .company-logo {
      width: 80px;
      height: auto;
    }
  }

  .navbar-center {
    flex-grow: 1;
    display: flex;
    justify-content: center;

    ul {
      list-style: none;
      display: flex;
      gap: 20px;

      li {
        cursor: pointer;
        font-size: 15px;
      }
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 10px;

    .credit-btn,
    .upgrade-btn {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 1.8rem;
    }

    .credit-btn {
      background-color: black;
      color: white;
      gap: 10px;
      font-size: 16px;
      transition: all 0.3s ease;
      z-index: 1;
      overflow: hidden;
    }

    .upgrade-btn {
      background: linear-gradient(271.06deg, #BD3BFA 0.91%, #3FE8FF 103.4%);
      color: white;
      &::before {
        content: "👑";
        margin-right: 5px;
      }
    }

    .divider {
      width: 1px;
      height: 40px;
      background-color: #ccc;
    }

    .user-profile {
      font-size: 18px;
      padding: 5px 10px;
      background-color: #f0f0f0;
      border-radius: 20px;
    }
  }

  // Make the navbar responsive
  @media (max-width: 1024px) {
    padding: 15px;

    .navbar-center ul {
      gap: 15px;

      li {
        font-size: 14px;
      }
    }

    .credit-btn,
    .upgrade-btn {
      font-size: 14px;
      padding: 8px 16px;
    }

    .divider {
      height: 30px;
    }

    .company-logo {
      width: 70px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;

    .navbar-center {
      margin-top: 10px;
      ul {
        flex-direction: column;
        gap: 10px;

        li {
          font-size: 16px;
        }
      }
    }

    .navbar-right {
      margin-top: 10px;
      flex-direction: column;
      gap: 10px;

      .credit-btn,
      .upgrade-btn {
        font-size: 14px;
        padding: 8px 14px;
      }
    }
  }

  @media (max-width: 480px) {
    .navbar-left .company-logo {
      width: 60px;
    }

    .navbar-center ul {
      li {
        font-size: 14px;
      }
    }

    .credit-btn,
    .upgrade-btn {
      padding: 6px 12px;
      font-size: 12px;
    }

    .user-profile {
      font-size: 16px;
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

  .left-content {
    width: 487px;
    height: 196px;
    border-radius: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 1;


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
      position: relative; /* Set position to relative */
      display: flex;
      align-items: center;

      input {
        padding: 20px;
        width: 365px;
        border: 2px solid #ccc;
        border-radius: 30px;
        outline: none;
        transition: border-color 0.3s;
        padding-right: 100px; /* Adjust padding to accommodate the button */

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

  .right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .hero-image {
      opacity: 0.8;
      border-radius: 20px 0 0 0;
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
      opacity: 0.8;
      border-radius: 20px;
    }

    .subimage1 {
      border-radius: 20px;
    }

    .subimage2 {
      width: 231px;
      height: 217px;
      border-radius: 20px;
    }
  }
}
.transform-space {
  margin-top: 50px; 
  padding: 20px;
  // text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
}
</style>