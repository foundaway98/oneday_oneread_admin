<template>
  <header>
    <nav>
      <router-link :to="{ name: 'PostList' }">글 목록</router-link>
      <router-link :to="{ name: 'PostCreate' }">글 작성</router-link>
    </nav>
    <div class="user-actions">
      <button @click="logout">logout</button>
      <button @click="withdraw">회원 탈퇴</button>
    </div>
  </header>
</template>

<script setup>
  const logout = () => {
    // 로그아웃 로직 구현
  };

  const withdraw = () => {
    // 회원 정보 표시 로직 구현
  };
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
</style>