<template>
  <div class="post-list">
    <h1>글 목록</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          <h3>
            {{ post.title }}
          </h3>
          <p>
            {{ post.summary }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import {
    ref,
    // onMounted
  } from 'vue';
  import {
    // useStore
  } from 'vuex';

  // const store = useStore();
  const posts = ref([]);

  // onMounted(async () => {
  //   await store.dispatch('fetchPosts');
  //   posts.value = store.getters.posts;
  // });
</script>