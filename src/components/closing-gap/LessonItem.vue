<script lang="ts" setup>
import { defineProps } from 'vue';
import BookIcon from '@/components/icons/BookIcon.vue';

const props = defineProps<{
  item : {
    text: string,
    status: string,
  }
}>();

const colors = {
  mastered: { bg: '#D1FADF', text: '#12B76A'},
  reviewed: { bg: '#fef4e5', text: '#F79009'},
  not_covered: { bg: '#F0F0F0', text: '#666666'},
}

</script>

<template>
  <div :style="{backgroundColor: colors[item.status].bg}" class="p-[16px] flex items-center gap-[10px] rounded-lg">
    <div :style="{backgroundColor: colors[item.status].text}"  class="p-[8px] rounded-lg flex items-center">
      <BookIcon />
      <p class="text-white ml-[8px]"> 01 </p>
    </div>
    <div>
      <p>RWNE - 8.4A</p>
      <div>
        <p :class="`text-[${colors[item.status].text}]`">Mastered</p>
      </div>
    </div>
  </div>
</template>