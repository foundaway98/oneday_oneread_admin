<template>
  <div class="login-form">
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="description">
      {{ description }}
    </p>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="id" placeholder="ID" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <div class="button-group">
        <button type="submit" class="login-btn">Login</button>
        <button type="button" class="join-btn" @click="handleJoin">Join</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    useRouter
  } from 'vue-router';

  const router = useRouter()
  const id = ref('')
  const password = ref('')
  const title = ref('One Day One Read')
  const description = ref('Feel Free To Write Things')

  const handleSubmit = () => {
    console.log('Login attempt', id.value, password.value)
    router.replace('/main');
  }

  const handleJoin = () => {
    console.log('Navigate to join page')
  }
</script>

<style scoped>
  .login-form {
    width: 100%;
    max-width: 300px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .description {
    font-size: 16px;
    margin-bottom: 20px;
    color: #666;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .login-btn {
    background-color: #4CAF50;
    color: white;
  }

  .join-btn {
    background-color: #f1f1f1;
    color: black;
  }
</style>