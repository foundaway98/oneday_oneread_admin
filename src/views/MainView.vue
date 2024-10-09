<template lang="">
  <div class="main-view">
    <header>
      <HeaderComponent />
    </header>
    <div>
      <LogoIcon :size="logoSize" />
    </div>
  </div>
  <router-view></router-view>
</template>
<script setup>
  import {
    ref
  } from 'vue';

  import HeaderComponent from "@/components/posts/HeaderComponent.vue";
  import LogoIcon from "@/components/common/LogoComponent.vue";

  const logoSize = ref(150);
</script>
<style scoped>
  .main-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .logo {
    margin-right: 10px;
  }

  .content-wrapper {
    display: flex;
    flex: 1;
  }
</style>