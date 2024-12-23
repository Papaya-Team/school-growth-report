<script lang="ts" setup>
import LogoPapaya from '@/components/icons/LogoPapaya.vue'

</script>

<template>
  <header class="mt-[20px]">
    <div class="container mx-auto">
      <div class="bg-blue-950 px-[40px] py-[20px] flex justify-between rounded-2xl">
        <div class="flex">
          <LogoPapaya class="mr-[40px]"/>
          <div class="text-white flex flex-col justify-center">
            <p class="text-[30px] font-bold mb-[10px]">Dilley ES - Growth Report</p>
            <p>
              <span class="bg-blue-100 text-blue-700 py-[2px] px-[6px] text-[12px] rounded-sm"> Math</span>
              14 Students
            </p>
            <p>
              <span class="bg-orange-100 text-orange-700 py-[2px] px-[6px] text-[12px] rounded-sm"> ELA</span>
              14 Students
            </p>
          </div>
        </div>
        <div class="text-white text-right">
          <p class="font-bold text-[20px]">Week 6 out of 6</p>
          <p class="text-[16px] text-[#D0D0D0]">December 16th, 2024</p>
          <div class="flex text-[#D0D0D0]">
            <div >
              <p class="text-[14px]">Start Date</p>
              <p class="text-[18px]">11/11/2024</p>
            </div>
            <div class="ml-[15px]">
              <p class="text-[14px]">End Date</p>
              <p class="text-[18px]">12/17/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>