<script lang="ts" setup>

import { defineProps } from 'vue'

const props = defineProps<{
  item: {
    name: string
    percentage: number
  }
}>()

</script>

<template>
    <div class="flex justify-center items-center">
        <div class="w-2/5">
            <p>{{ item.name }}</p>
        </div>
        <div class="w-3/5 bg-[#E7F8F0] rounded-lg">
            <div
                class="bg-[#12b76a] text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg flex items-center justify-center"
                style="height: 25px;" :style="{ width: `${item.percentage == 0 ? 100 : item.percentage}%` }">
                <p class="text-white">{{ item.percentage }}%</p>
            </div>
        </div>
    </div>
</template>