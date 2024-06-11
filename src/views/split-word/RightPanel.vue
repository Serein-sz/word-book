<script setup lang="ts">
import type { Word, Words } from '@/types/words';
import { ref, toRef, watch } from 'vue';

const props = defineProps({
  words: {
    type: Object as () => Words,
    require: true
  }
})

const wordArray = ref<Word[][]>([])

watch(() => props.words?.wordList, (wordList) => {
  if (wordList) {
    wordArray.value = []
    let index = 0
    while (index < wordList.length) {
      const itemNum = wordList.length - index > 3 ? 3 : wordList.length - index
      wordArray.value.push(wordList.slice(index, index + itemNum))
      index += 3
    }
  }
})



</script>
<template>
  <div v-for="(subWordArray, wordIndex) in wordArray" :key="wordIndex" class="my-3">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8" v-for="(word, index) in subWordArray" :key="index">
        <a-card :title="word.originWord">
          <p v-for="(item, meanIndex) in word.wordClassAndChineseMeanListByOriginWord" :key="meanIndex">
            <a-tag color="pink">{{ item.wordClassByWordEN }}</a-tag>:
            <a-tag color="green"
              v-for="(oneWordChineseMeansByWordClass, oneWordChineseMeansByWordClassIndex) in item.oneWordChineseMeans"
              :key="oneWordChineseMeansByWordClassIndex">{{ oneWordChineseMeansByWordClass }}</a-tag>
          </p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<style scoped></style>
