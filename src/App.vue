<script setup lang="ts">
import { theme } from 'ant-design-vue';
</script>

<template>
  <a-config-provider :theme="{
    algorithm: theme.darkAlgorithm,
  }">
    <RouterView class="text-white min-h-screen w-screen" />
  </a-config-provider>
</template>

<style scoped></style>
