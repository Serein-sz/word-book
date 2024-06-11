<script setup lang="ts">
import { ref } from 'vue';
import type { Words } from '@/types/words';

import RightPanel from './RightPanel.vue';

import { splitWord } from '@/api/chat';

const sentence = ref('')
const loading = ref(false)
const words = ref<Words>()

async function handleSplitWord() {
  loading.value = true
  try {
    words.value = await splitWord(sentence.value);
  } finally {
    loading.value = false
  }
}

</script>
<template>
  <div class="h-screen w-screen p-3">
    <div class="p-3 border border-gray-100/50 rounded-lg flex flex-col">
      <a-flex gap="middle" class="h-16">
        <a-textarea v-model:value="sentence" placeholder="Please enter the sentence" allow-clear />
        <a-button class="h-full w-20" type="primary" ghost :loading="loading" @click="handleSplitWord">Split</a-button>
      </a-flex>
      <div class="flex-grow h-[calc(100vh-7rem)] overflow-scroll ">
        <RightPanel :words="words" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
