<template>
  <section class="features">
    <h2>Our Features</h2>
    <div class="feature-list">
      <div class="feature">
        <h3>Delicious Food</h3>
        <p>We serve a variety of mouth-watering dishes.</p>
      </div>
      <div class="feature">
        <h3>Cozy Atmosphere</h3>
        <p>Enjoy your meals in a comfortable setting.</p>
      </div>
      <div class="feature">
        <h3>Great Service</h3>
        <p>Our staff is dedicated to providing the best service.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 50px 20px;
  text-align: center;
}
.feature-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.feature {
  flex: 1;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s;
}
.feature:hover {
  transform: scale(1.05);
}
</style>
