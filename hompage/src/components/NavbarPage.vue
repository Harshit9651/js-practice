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
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
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
          transition: color 0.3s ease, background-color 0.3s ease, border-bottom 0.3s ease;

          &:hover {
            color: darkmagenta;
            background-color: lightgray;
            border-bottom: 2px solid darkmagenta; 
          }
        }
      }
    }
  }
}

</style>
