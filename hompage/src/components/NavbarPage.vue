<template>
  <div class="navbar">
    <div class="logo">
      <img class="foyr-logo" src="../assets/foyrlogo.png" alt="" />
    </div>
    <div class="link">
      <ul>
        <li>Home</li>
        <li>Tool</li>
        <li>Explore</li>
        <li>designs</li>
        <li>Whislet</li>
      </ul>
    </div>
    <button class="credit-btn">
      <img src="../assets/coin-4 1.png" alt="" /> 30 Credit
    </button>
    <button class="upgrade-btn">
      <i class="fa-solid fa-crown"></i> Upgrade
    </button>
    <div class="divider"></div>
    <div class="profile"><i class="fa-solid fa-user"></i></div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

* {
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  background-color: rgb(255, 255, 255);
  position: fixed;
  height: 4.6rem;
  width: 100%;
  top: 0%;
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);


  .logo {
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 2rem;
    }
  }

  .link {
    display: flex;
    justify-content: center;
    width: 30%;
    margin-left: 20%;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      width: 100%;
      padding: 0;

      li {
        flex: 1;
        text-align: center;

        a {
          display: block;
          padding: 1rem;
          text-decoration: none;
          color: black;
          transition: color 0.3s ease, background-color 0.3s ease,
            border-bottom 0.3s ease;

          &:hover {
            color: darkmagenta;
            background-color: lightgray;
            border-bottom: 2px solid darkmagenta;
          }
        }
      }
    }
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
    margin-top: 1rem;
    margin-left: 14%;
    height: 2.5rem;

    img {
      width: 20px;
      height: auto;
    }
    &:hover {
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2),
        0 0 20px 10px rgba(0, 0, 0, 0.1), 0 0 30px 15px #bd3bfa;
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
    margin-top: 1rem;
    margin-left: 1rem;
    height: 2.5rem;

    i {
      width: 20px;
      height: auto;
    }
    &:hover {
      box-shadow: 0 0 10px 5px rgba(34, 130, 194, 0.2),
        0 0 20px 10px rgba(197, 105, 105, 0.1), 0 0 30px 15px #291034;
    }
  }
  .divider {
    margin-top: 1rem;
    margin-left: 1rem;
    width: 3px;
    height: 40px;
    background-color: #f0eaea;
  }
  .profile{
    height: 2.5rem;
    width: 2.5rem;
    margin-top: 1rem;
    margin-left:1rem;
    border:2px solid rgb(216, 211, 211);
    border-radius: 50%;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center ;


    
  }

}
</style>
