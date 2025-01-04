<script lang="ts" setup>
import ProgressState from '@/components/home/accountability/ProgressState.vue'

import { defineProps } from 'vue'

const props = defineProps<{
  title : string
  bars : {name: string, value: number, percentage: number}[]
}>()


</script>

<template>
  <div class="py-[20px] mx-[8px]">
    <div>
      <p class="border-b-2 border-zinc-200 py-[5px] text-[#666666] text-[14px]">{{ title }}</p>
    </div>
    <ProgressState v-for="(item, index) in bars" :key="index" :item="item"/>
  </div>
</template>