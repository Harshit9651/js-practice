<template>
    <header>
      <nav>
        <div class="logo">Restaurant</div>
        <ul>
          <li><router-link to="/signin">Sign In</router-link></li>
          <li><router-link to="/signup">Sign Up</router-link></li>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 10px 20px;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin: 0 10px;
  }
  a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
  }
  a:hover {
    color: #ff6347;
  }
  </style>
  