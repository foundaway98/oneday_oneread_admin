<template>
  <div class="login-view">
    <div class="logo-container">
      <LogoIcon :size="200" />
    </div>
    <div class="form-container">
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
  import LogoIcon from '@/components/common/LogoComponent.vue'
  import LoginForm from '@/components/users/LoginForm.vue'
</script>

<style scoped>
  .login-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
  }

  .logo-container,
  .form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .login-view {
      flex-direction: column;
    }

    .logo-container,
    .form-container {
      width: 100%;
    }

    .logo-container {
      margin-bottom: 20px;
    }
  }
</style>