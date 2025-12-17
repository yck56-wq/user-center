<template>
  <div id="app">
    <Basic-layout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useLoginUserStore } from '@/store/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();

</script>

<style scoped>
</style>
