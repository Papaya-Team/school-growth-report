<script setup lang="ts">
import GlowingProgress from '@/components/home/GlowingProgress.vue'
import GrowingIcon from '@/components/icons/GrowingIcon.vue'

import { defineProps } from 'vue';

const props = defineProps<{
  students: {
    type: Array<any>
  },
  name: String,
  color: String
  bgColor: String
}>()
</script>

<template>
  <div>
    <div :style="{ backgroundColor: bgColor }" class="flex items-center justify-between p-[16px] rounded-lg">
      <div class="flex items-center gap-2">
        <GrowingIcon :color="color" />
        <p :style="{ color: color }" class="font-medium"> {{ name }} </p>
      </div>
      <p class="font-bold"> {{ students.length }} </p>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <GlowingProgress v-for="(item, index) in students" :key="item.name" :item="item" />
    </div>
  </div>
</template>