<template>
  
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Our Gourmet Restaurant</h1>
      <p>Delight in the finest dining experience crafted with passion and flavor.</p>
      <router-link to="/SignIn" class="btn">Reserve a Table</router-link>
    </div>
  </section>

  <section class="features">
    <div class="feature-content">
      <h2>What We Offer</h2>
      <div class="feature-boxes">
        <div class="feature-box">
          <h3>Exquisite Dishes</h3>
          <p>Savor dishes prepared by top chefs using the finest ingredients.</p>
        </div>
        <div class="feature-box">
          <h3>Elegant Ambiance</h3>
          <p>Enjoy a cozy, elegant atmosphere with sophisticated décor.</p>
        </div>
        <div class="feature-box">
          <h3>Exceptional Service</h3>
          <p>Our friendly staff is dedicated to making your dining experience special.</p>
        </div>
        <div class="feature-box">
          <h3>Cusion Exprience </h3>
          <p>Our friendly staff is dedicated to making your dining experience special.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <h2>Book Your Experience Today</h2>
    <p>Don't miss out on an unforgettable dining experience. Book now and taste the extraordinary.</p>
    <router-link to="/SignUp" class="btn-cta">Join Us Now</router-link>
  </section>

  <section class="testimonials">
    <h2>Customer Testimonials</h2>
    <div class="testimonial-box">
      <p>"The food was absolutely delicious, and the ambiance was perfect for our anniversary dinner. Highly recommend!"</p>
      <span>- Sarah K.</span>
    </div>
    <div class="testimonial-box">
      <p>"Exceptional service! The staff went above and beyond to make our evening special. We’ll definitely be back."</p>
      <span>- Michael B.</span>
    </div>
  </section>

</template>

<style scoped>

.hero {
  background-image: url('https://images.unsplash.com/photo-1551218808-94e220e084d2');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  animation: fadeIn 1s ease;
}

.hero-content {
  background: rgba(0, 0, 0, 0.5); 
  padding: 40px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.btn {
  background-color: #ff6347;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e5533d;
}

.features {
  padding: 60px 20px;
  background-color: #f8f8f8;
  text-align: center;
}

.features h2 {
  margin-bottom: 40px;
  font-size: 28px;
  color: #333;
}

.feature-boxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature-box {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.feature-box:hover {
  transform: scale(1.05);
}

.feature-box h3 {
  margin-bottom: 10px;
  color: #ff6347;
}

.feature-box p {
  color: #555;
}

.cta {
  background: #ff6347;
  color: white;
  padding: 50px 20px;
  text-align: center;
}

.cta h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

.cta p {
  font-size: 18px;
  margin-bottom: 30px;
}

.btn-cta {
  background-color: white;
  color: #ff6347;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-cta:hover {
  background-color: #e5533d;
  color: white;
}


.testimonials {
  background-color: #333;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.testimonials h2 {
  margin-bottom: 40px;
  font-size: 28px;
}

.testimonial-box {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.testimonial-box p {
  font-style: italic;
}

.testimonial-box span {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  color: #ff6347;
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
