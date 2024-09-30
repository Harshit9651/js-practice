<template>
  <div>
   
  <div class="heading"><h1>Re-Imageine</h1></div>
<div class="container">
   
    <div class="main-container">
        <div class="left">
            <div class="left-up">
                <img class="left-img" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <h3>living_room.jpg</h3>
            </div>
            <div class="left-down">
                <p class="left-down-p"><i class="fa-solid fa-trash"></i> Delete</p>
            </div>
        </div>

        <div class="right">
            <div class="output-setting">
                <h3 id="min-heading">Output Setting</h3>
                <hr class="solid-line">
                <label class="test-input" for="text-input">Text Input</label>
                <input type="text" id="text-input" class="input-field" placeholder="Enter your desire design ...">
                <label class="chose-style" for="choose-style">Choose Style</label>
                <div class="image-carousel">
                    <div class="image-cards">
                        <div class="image-card" data-label="Bedroom">
                            <img  src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 1">
                            <div class="label">Bedroom</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>
                        <div class="image-card" data-label="Kitchen">
                            <img   src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 2">
                            <div class="label">Kitchen</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>
                        <div class="image-card" data-label="Bathroom">
                            <img  src="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 3">
                            <div class="label">Bathroom</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>

                        <div class="image-card" data-label="Bathroom">
                            <img  src="  https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 3">
                            <div class="label">Ocian</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>

                        <div class="image-card" data-label="Bathroom">
                            <img  src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 3">
                            <div class="label">minimal</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>

                        <div class="image-card" data-label="Bathroom">
                            <img  src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 3">
                            <div class="label">luxirous</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>

                        <div class="image-card" data-label="Bathroom">
                            <img  src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 3">
                            <div class="label">asthtic</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>

                        <div class="image-card" data-label="Bathroom">
                            <img  src="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Style 3">
                            <div class="label">Bathroom</div>
                            <div class="overlay"><div class="outer-circle"><i class="fa-solid fa-check"></i></div></div>
                        </div>
                        <!-- Add more cards here as needed -->
                    </div>
                </div>
              
                <button class="generate-btn">Generate</button>
            </div>
        </div>
    </div>
</div>

  </div>
</template>

<script>
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;

}
body{
    background-color: rgb(228, 231, 235);
}
.heading{
    margin-top: 2rem;
    margin-right:55%;
    display: flex;
    justify-content: center;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.main-container{
   
    width: 1050px;
    height: 700px;
    background-color:  rgb(228, 231, 235);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.left{
    width: 364px;
    height: 655px;
   background:  rgb(228, 231, 235);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: .5rem;
}

.left-up{
    width: 364px;
    height: 587px;
   background: #ffffff;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
     border-radius: 0.5rem 0.5rem  0 0 /*0 0; tpl and tpr */
}
.left-down{
    margin-top: 3px;
    width: 364px;
    height: 65px;
    background: #fcfcfc;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 0.5rem 0.5rem ;
}

.left-img{
    width: 332px;
    height: 332px;
    border-radius: 2.4rem;
    padding: 10px;
} 
.left-down-p{
    font-weight: 100;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -2%;
    align-items: center;
}






.right {
    width: 600px;
    height: 615px;
    background-color:  rgb(253, 253, 253);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    border-radius: 0.5rem;
}

.output-setting h3 {
    font-size: 24px;
    margin-bottom: 10px;
}
.min-heading{
    color: #100724;
    font-weight: 500;
    font-size: 14px;

}
.test-input{
   color: #100724;  
   font-weight: bold;
   font-size: large;
   margin-top: 25px;  
    margin-bottom: 10px;
    display: block; 

}
.chose-style{
    color: #100724;  
   font-weight: bold;
   font-size: large;

   margin-top: 25px;
    margin-bottom: 5px;
    display: block; 
}

.solid-line {
    border: 1px solid gray;
    margin: 10px 0;
}


.input-field {
    width: 552px;
    padding: 8px;
    height: 103px;
    margin-bottom: 0px;
    border-radius: 10px; 
    border: 1px;
    padding-left:8px 15px; 
    margin-top: 0px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

}

::placeholder {
    padding-left: 10px;
   padding-top: 0px;
}


.image-carousel {
    display: flex;
    align-items: center;
}

.image-cards {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    scrollbar-width: none;
    -ms-overflow-style: none; 
}


.image-cards::-webkit-scrollbar {
    display: none;
}

.image-card {
    margin: 0 10px;
    cursor: pointer;
    border: 2px solid transparent;
    position: relative;
    transition: border-color 0.3s ease;
}

.image-card img {
    width: 90px;
    height: 90px;
    border-radius: 10px;
}

.image-card .label {
    text-align: center;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 500;
    font-family: sans-serif;
}


.image-card .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
   
    color: white;
    font-size: 24px;

     opacity: 0; 
    transition: opacity 0.3s ease;
}

.image-card.active .overlay {
    opacity: 1; 
}


.outer-circle{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #ffffff;
}

.overlay i {
    font-size: 20px;
    background: linear-gradient(277.64deg, #4D8AFF 8.32%, #F53F9E 51.79%, #FF9051 96.13%);
    -webkit-background-clip: text;
    background-clip: text; 
    color: transparent;
}



.generate-btn {
    margin-top: 11.5rem;
    padding: 10px 20px;
    background: linear-gradient(277.64deg, #4D8AFF 8.32%, #F53F9E 51.79%, #FF9051 96.13%);
    color: white;
    border: none;
    width: 242px;
    height: 40px;
    border-radius: 53px;
    cursor: pointer;
}

.generate-btn:hover {
    background: linear-gradient(277.64deg, #3379fa 8.32%, #F53F9E 51.79%, #c56229 96.13%);
   
}

@media (max-width: 1024px) {
    .main-container {
        width: 90%;
        height: auto;
        flex-direction: column;
    }

    .left, .right {
        width: 100%;
        height: auto;
    }

    .generate-btn {
        margin-top: 2rem;
    }
}


@media (max-width: 768px) {
    .container {
        height: auto;
    }

    .main-container {
        width: 100%;
        flex-direction: column;
    }

    .left {
        width: 100%;
    }

    .right {
        width: 100%;
        margin-top: 20px;
    }

    .input-field {
        width: 100%;
    }

    .generate-btn {
        width: 100%;
        margin-top: 20px;
    }
}
</style>
