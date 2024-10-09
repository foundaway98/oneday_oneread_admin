<template>
  <div class="login-view">
    <div class="content-wrapper">
      <div class="logo-container">
        <LogoIcon :size="logoSize" />
      </div>
      <div class="form-container">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted,
    onUnmounted
  } from 'vue'
  import LogoIcon from '@/components/common/LogoComponent.vue'
  import LoginForm from '@/components/users/LoginForm.vue'

  const logoSize = ref(200)

  const updateLogoSize = () => {
    logoSize.value = window.innerHeight < 600 ? 150 : 200
  }

  onMounted(() => {
    updateLogoSize()
    window.addEventListener('resize', updateLogoSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateLogoSize)
  })
</script>

<style scoped>
  .login-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;


  }

  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }

  .logo-container,
  .form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .content-wrapper {
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

  @media (max-height: 600px) {
    .login-view {
      padding: 10px;
    }
  }
</style>