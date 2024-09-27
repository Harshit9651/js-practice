<template>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSubmit" class="signup-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="form.username"
          required
        />
        <span v-if="errors.username" class="error">{{ errors.username }}</span>
      </div>

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

      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="form.confirmPassword"
          required
        />
        <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
      </div>

      <div class="form-group">
        <label for="role">Role</label>
        <select v-model="form.role" id="role" required>
          <option disabled value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <span v-if="errors.roleError" class="error">{{ errors.roleError }}</span>
      </div>

      <button type="submit">Sign Up</button>

      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: ''
});

const errors = ref({});
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

const validateForm = () => {
  errors.value = {};
  errorMessage.value = '';

  if (!form.value.username) {
    errors.value.username = 'Username is required.';
  }

  if (!form.value.email) {
    errors.value.email = 'Email is required.';
  }

  if (!form.value.password) {
    errors.value.password = 'Password is required.';
  }

  if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match.';
    errorMessage.value = 'Passwords do not match.';
  }
  
  if (!form.value.role) {
    errors.value.roleError = 'Role is required';
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (validateForm()) {
    try {
      const response = await fetch('http://localhost:3000/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.value),
      });

      if (!response.ok) {
        throw new Error('Signup failed!');
      }

      successMessage.value = 'Signup successful! Redirecting...';
      setTimeout(() => {
        router.push('/login');
      }, 2000);

    } catch (error) {
      errorMessage.value = error.message;
    }
  }
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.signup-form {
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

input, select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

input:focus, select:focus {
  border-color: #007bff;
  outline: none;
}

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
