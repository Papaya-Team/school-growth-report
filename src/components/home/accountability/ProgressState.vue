<script lang="ts" setup>

import { defineProps } from 'vue'

const props = defineProps<{
  item: {
    name: string
    value: number
    percentage: number
  }
}>()

const bgColor = () => {
  if(props.item.percentage == 0) {
    return 'bg-[#D0D0D0]'
  } else if (props.item.name == 'Mastered') {
    return 'bg-[#12B76A]'
  } else if (props.item.name == 'Meets') {
    return 'bg-[#1A4180]'
  } else if (props.item.name == 'Approaches') {
    return 'bg-[#A1258F]'
  } else if (props.item.name == 'Did Not Meet') {
    return 'bg-[#F04438]'
  }
}

</script>

<template>
  <div class="my-[15px]">
    <div class="flex justify-between mb-[10px] text-[14px]">
      <div class="flex items-center">
        <figure class="mr-[10px]">
          <img v-if="item.name == 'Mastered'" src="/icon-mastered.png" alt="">
          <img v-else-if="item.name == 'Meets'" src="/icon-meets.png" alt="">
          <img v-else-if="item.name == 'Approaches'" src="/icon-approaches.png" alt="">
          <img v-else-if="item.name == 'Did Not Meet'" src="/icon-did-not.png" alt="">
        </figure>
        <p>{{ item.name }}</p>
      </div>
      <p class="text-orange-500">{{ item.value }}%</p>
    </div>

    <div class="w-full bg-zinc-400 rounded-lg">
      <div
        :class="bgColor()"
        class="text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg flex items-center justify-center"
        style="height: 25px;"
        :style="{ width: `${item.percentage == 0 ? 100 : item.percentage}%` }">
        <p>{{ item.value }}%</p>
      </div>
    </div>
  </div>
</template>