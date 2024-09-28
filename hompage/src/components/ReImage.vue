<template>
    <div>
        <h1 class="heading">Re-Imagine</h1>
      <div class="container">
        
        <div class="main-container">
         
          <div class="child-container">
           
          </div>
          <div class="overlay-box">
            <div class="inner-box">
                <div class="outer-circle">
              <div class="inner-circle">
                <span class="plus-icon">+</span>
              </div>
            </div>
              <h2>Drag and drop or copy paste the image </h2>
              <p2>Supported formats: PNG, JPG</p2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
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
  background: linear-gradient(42.57deg, #765e5e -1.78%, #F89090 41.93%, #F8B789 71.73%, #d47c7c 97.56%);
  border-radius: 1rem;
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
  background-color: #F5EFFE;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-circle {
  width: 56px;
  height: 56px;
  background: linear-gradient(277.64deg, #4D8AFF 8.32%, #F53F9E 51.79%, #FF9051 96.13%);


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
    color:  #100724;

    margin: 10px 0;
  }
  
  p2 {
    font-size: 14px;
    color: #9F9CA7;
    font-weight:500
  }
  
</style>