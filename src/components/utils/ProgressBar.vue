<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  item: {
    value: number,
    percentage: number,
    color: string 
  }
}>()

</script>

<template>
  <div class="w-full bg-zinc-400 rounded-lg">
    <div :class="item.color"
      class="text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg flex items-center justify-center"
      style="height: 25px;" :style="{ width: `${item.percentage == 0 ? 100 : item.percentage}%` }">
      <p>{{ item.value }}%</p>
    </div>
  </div>
</template>