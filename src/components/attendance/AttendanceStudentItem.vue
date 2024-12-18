<script lang="ts" setup>
import ProgressBar from '@/components/utils/ProgressBar.vue';


const item = {
  value: 50,
  percentage: 50,
  color: 'bg-blue-500'
}
</script>

<template>
  <article class="border-2 p-[20px] rounded-lg w-full">
    <div class="mb-[20px]">
      <p>ELA - 5th</p>
      <p class="font-bold">Jose Martinez de la Cruz</p>
    </div>
    <div class="flex items-center justify-between mb-[20px]">
      <p class="w-1/12">60 Sessions</p>
      <ProgressBar :item="item" />
    </div>
    <div class="flex items-center">
      <div class="flex items-center">
        <div class="p-[8px] mr-[10px] rounded-full"
          style="background-color: #12B76A; width: 16px; height: 16px;"></div>
        <p>36 sessions finished</p>
      </div>
      <div class="flex items-center ml-[20px]">
        <div class="p-[8px] mr-[10px] rounded-full"
          style="background-color: #F04438; width: 16px; height: 16px;"></div>
          <p>24 sessions absent</p>
      </div>
    </div>
  </article>
</template>