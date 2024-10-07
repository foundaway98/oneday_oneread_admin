<template>
  <div class="logo-icon">
    <svg :width="props.size" :height="props.size" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#FFC107" rx="0" ry="0" />
      <path d="M 100 80 Q 100 100 80 100 L 100 100 Z" :fill="backgroundColor" />
    </svg>
  </div>
</template>

<script setup>
  import {
    defineProps
  } from 'vue'

  const props = defineProps({
    size: {
      type: Number,
      default: 100
    },
    backgroundColor: {
      type: String,
      default: '#F0F0F0'
    }
  })
</script>

<style scoped>
  .logo-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>