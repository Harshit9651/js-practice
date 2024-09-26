<template>
  <div>
  

    <div class="signin-container">
      <h1>Sign In</h1>
      <form @submit.prevent="handleSubmit" class="signin-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
          />
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>

        <button type="submit">Sign In</button>

        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      </form>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  email: '',
  password: ''
});

const errors = ref({});
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

const validateForm = () => {
  errors.value = {};
  errorMessage.value = '';

  if (!form.value.email) {
    errors.value.email = 'Email is required.';
  }

  if (!form.value.password) {
    errors.value.password = 'Password is required.';
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (validateForm()) {
    try {
      const response = await fetch('http://localhost:3000/SignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.value),
      });

      if (!response.ok) {
        throw new Error('Sign In failed! Please check your credentials.');
      }

      successMessage.value = 'Sign In successful! Redirecting...';
      setTimeout(() => {
        router.push('/dashboard'); 
      }, 2000);

    } catch (error) {
      errorMessage.value = error.message;
    }
  }
};
</script>

<script>

</script>

<style scoped>

body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}


#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


header, footer {
  flex-shrink: 0;
}


.signin-container {
  flex-grow: 1; 
  max-width: 400px;
  margin: 50px auto; 
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* Form styles */
.signin-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

/* Error styles */
.error {
  color: red;
  font-size: 0.8em;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Alert styles */
.alert {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}
</style>
