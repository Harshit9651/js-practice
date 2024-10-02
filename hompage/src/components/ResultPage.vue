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
          <button class="button1"><i class="fa-solid fa-pen"></i> custimize</button>
          <button class="button2"><i class="fa-solid fa-lock"></i> shooping</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

html,
body {
  height: 100%;
  margin: 0;
  background-color: blueviolet;
}

* {
  margin: 0;
  padding: 0;
}

.wrapper {
  background-color: rgb(227, 235, 235);
  display: flex;
  justify-content: center;
  align-items: center;

  .main-container {
    height: 721px;
    width: 623px;
    background-color: rgb(240, 234, 234);

    .header {
      margin-top: 0.6rem;
      margin-left: 0.5rem;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    // .card {
    //   margin-top: 20px;
    //   height: 536px;
    //   width: 622px;
    //   background-color: rgb(255, 255, 255);
    //   border-radius: 10px;
    //   display: flex;
    //   flex-direction: column;

    //   img {
    //     padding: 10px;
    //     height: 448px;
    //     width: 598px;
    //     border-radius: 20px;
    //   }

    //   .buttons{
    //     display: flex; /* Use Flexbox for the buttons */
    //     justify-content: space-around;
    //     gap: 10px; /* Add space between the buttons */
    //     width: 100%; /* Ensure buttons take the full width */
    //     padding: 0 10px; /* Padding to keep buttons from touching the edges */
    //     margin-top: 10px;
    //     flex-wrap: wrap;
    //     .button1{
    //         height: 48px;
    //         width: 390px;
    //         border-radius: 53px;
    //         border-color: none;
    //         background: linear-gradient(277.64deg, #4D8AFF 8.32%, #F53F9E 51.79%, #FF9051 96.13%);
    //         color: white;
    //         cursor: pointer;
    //     }
    //     .button2{
    //        width: 192px;
    //        height: 48px;
    //        border: 2px;
    //        border-radius: 100px;
    //        background: rgb(235, 232, 232);
    //        color: #000000;
    //        cursor: pointer; 
    //     }
    //   }
    // }
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
      border: 2px ;
      background: rgb(235, 232, 232);
      color: #000000;
      cursor: pointer;
    }
  }
}

  }
}
</style>
