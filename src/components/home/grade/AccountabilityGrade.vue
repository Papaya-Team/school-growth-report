<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import RightArrow from '@/components/icons/RightArrow.vue'
import { ref, onMounted } from "vue";



</script>

<template>
  <CardLayout>
    <div>
      <div class="flex items-center">
        <p class="text-[20px]">Accountability Grade </p>
        <RightArrow class="ml-[10px]" />
      </div>
    </div>

    <section class="flex gap-[20px] justify-between">
      <div class="w-1/2">
        <div class="mt-[20px]">
          <p class="text-[#FF7223] text-[12px] mb-[20px]"> Your current grade vs Your future grade </p>
        </div>

        <div class="flex items-center">
          <div class="w-[45%]">
            <div>
              <p class="text-[#F04438] text-[30px] font-bold">F</p>
              <p>52 out of 100</p>
            </div>
            <div class="w-full bg-zinc-400 rounded-lg mt-[20px]">
              <div
                class="bg-[#F04438] text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg flex items-center justify-center"
                style="width: 50% ;height: 10px;">
              </div>
            </div>
          </div>
          <RightArrow class="mx-[20px]" />
          <div class="w-[45%]">
            <div>
              <p class="text-[#F04438] text-[30px] font-bold">F</p>
              <p>52 out of 100</p>
            </div>
            <div class="w-full bg-zinc-400 rounded-lg mt-[20px]">
              <div
                class="bg-[#F04438] text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg flex items-center justify-center"
                style="width: 50% ;height: 10px;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2">
        <div class="mt-[20px]">
          <p class="text-[#FF7223] text-[12px] mb-[20px]"> Your current grade vs Your future grade </p>
        </div>

        <div class="flex items-center">
          <div class="w-[45%]">
            <div>
              <p class="text-[#F04438] text-[30px] font-bold">F</p>
              <p>52 out of 100</p>
            </div>
            <div class="w-full bg-zinc-400 rounded-lg mt-[20px]">
              <div
                class="bg-[#F04438] text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg flex items-center justify-center"
                style="width: 50% ;height: 10px;">
              </div>
            </div>
          </div>
          <RightArrow class="mx-[20px]" />

          <div class="w-[45%]">
            <div>
              <p class="text-[#A1258F] text-[30px] font-bold">D</p>
              <p>67 out of 100</p>
            </div>
            <div class="w-full bg-zinc-400 rounded-lg mt-[20px]">
              <div
                class="bg-[#A1258F] text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg flex items-center justify-center"
                style="width: 67% ;height: 10px;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </CardLayout>
</template>