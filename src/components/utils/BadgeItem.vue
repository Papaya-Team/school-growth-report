<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  color: string;
  text: string;
}>();

</script>

<template>
  <div :class="color == 'green' ? 'bg-[#D1FADF]' : 'bg-[#FFEADE]'" class="flex items-center justify-center rounded-lg">
    <slot></slot>
    <p class="capitalize font-bold text-[14px]" :class="color == 'green' ? 'text-[#12B76A]' : 'text-[#FF7223]'">{{ text }}</p>
  </div>
</template>
