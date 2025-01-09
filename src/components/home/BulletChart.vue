<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  bgColor: string
  text: string
  value: string
}>()

// console.log(props)

</script>

<template>
  <div class="flex my-[10px]">
    <div :style="{backgroundColor: bgColor}" class="p-[8px] mr-[10px] mt-[5px] rounded-full" style="width: 16px;height: 16px;">
    </div>
    <p class="text-[14px]"> {{ text }} <br>
      <span class="text-[18px] text-[#666666]"> {{ value }} </span>
    </p>
  </div>
</template>
