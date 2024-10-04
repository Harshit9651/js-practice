<template>
  <div>
    <div class="main-container">
      <div class="slidbar">
        <div class="ai-tools"><h3>AI editor tools</h3></div>
        <div class="hr-tag"><hr /></div>
        <div class="cards">
          <div class="card">
            <h4>replace products</h4>
          </div>

          <div class="card">
            <h4>replace products</h4>
          </div>
          <div class="card">
            <h4>replace products</h4>
          </div>
          <div class="card">
            <h4>replace products</h4>
          </div>
          <div class="card">
            <h4>replace products</h4>
          </div>
          <div class="card">
            <h4>replace products</h4>
          </div>
      
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.main-container {
  background-color: rgb(255, 255, 255);
  top: 0%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  .slidbar {
    top: 0%;
    right: 0%;
    width: 20%;
    position: fixed;
    height: 100vh;
    background-color: rgb(243, 243, 247);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
    .ai-tools {
      display: flex;
      margin-top: 8%;
      margin-left: 5%;
      margin-bottom: 8%;
    }
    .hr-tag {
      width: 100%;
      border: 2px solid transparent;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 0.1rem;
      justify-content: space-around;
      .card {
        // position: relative;
        height: 7.25rem;
        width: 9.25rem;
        // background-color: aqua;
        box-shadow: -1px 0 3px rgba(0, 0, 0, 0.1);


      }
    }
  }
}
</style>
