<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best dining with us!</p>
        <router-link to="/signup" class="btn">Join Us</router-link>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    background-image: url('your-image-url.jpg'); /* Add your background image */
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    animation: fadeIn 1s;
  }
  .hero-content {
    backdrop-filter: blur(5px);
    padding: 20px;
    border-radius: 10px;
  }
  .btn {
    background: #ff6347;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s;
  }
  .btn:hover {
    background: #e5533d;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  