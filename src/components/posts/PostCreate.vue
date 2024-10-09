<template>
  <div class="post-create">
    <h1>글 작성</h1>
    <form @submit.prevent="submitPost">
      <input v-model="title" placeholder="제목" required>
      <textarea v-model="content" placeholder="본문" required></textarea>
      <button type="submit">저장</button>
    </form>
  </div>
</template>
<script setup>
  import {
    ref
  } from 'vue';
  import {
    useRouter
  } from 'vue-router';
  import {
    useStore
  } from 'vuex';

  const router = useRouter();
  const store = useStore();

  const title = ref('');
  const content = ref('');

  const submitPost = async () => {
    try {
      // Vuex action을 통해 글 저장 로직 구현
      await store.dispatch('createPost', {
        title: title.value,
        content: content.value
      });

      // 저장 성공 시 글 목록 페이지로 이동
      router.push({
        name: 'PostList'
      });
    } catch (error) {
      // 에러 처리
      console.error('글 저장 중 오류 발생:', error);
      // 사용자에게 에러 메시지 표시 로직 추가
    }
  };
</script>
<style lang="">

</style>