<script lang="ts" setup>
import ProgressState from '@/components/home/accountability/ProgressState.vue'

import { defineProps } from 'vue'

const props = defineProps<{
  title : string
}>()

const bars = [
  {name: 'Mastered', value: 0, percentage: 0},
  {name: 'Meets', value: 0, percentage: 0},
  {name: 'Approaches', value: 0, percentage: 0},
  {name: 'Did Not Meet', value: 14, percentage: 100},
]

</script>

<template>
  <div class="py-[20px] mx-[8px]">
    <div>
      <p class="border-b-2 border-zinc-200 py-[5px] text-[#666666] text-[14px]">{{ title }}</p>
    </div>
    <ProgressState v-for="(item, index) in bars" :key="index" :item="item"/>
  </div>
</template>