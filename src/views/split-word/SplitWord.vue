<script setup lang="ts">
import { ref } from 'vue';
const value = ref('')

</script>
<template>
  <div class="h-screen w-screen p-3">
    <div class="h-full w-full p-3 border border-gray-100/50 rounded-lg">
      <a-textarea v-model:value="value" placeholder="Please enter the sentence" allow-clear />
    </div>
  </div>
</template>
<style scoped></style>
