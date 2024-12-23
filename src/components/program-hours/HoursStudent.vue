<script lang="ts" setup>
import BadgeItem from '@/components/utils/BadgeItem.vue';
import DoughnutChartWithText from '@/plugins/chart-setup';

import { ref } from "vue";


const chartData1 = ref({
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: [52, 48],
      backgroundColor: ["#F04438", "#D0D0D0"],
      cutout: "80%",
    },
  ],
});

const chartOptions1 = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    customText: {
      centerText: "F",
      secondaryText: "52 out of 100",
    },
  },
});

const item = {
  value: 50,
  percentage: 50,
  color: 'bg-blue-500'
}

</script>

<template>
  <article class="border-2 p-[20px] rounded-lg">
    <div class="mb-[20px]">
      <p>ELA - 5th</p>
      <p class="font-bold">Jose Martinez de la Cruz</p>
      <div class="flex gap-[10px] mt-[10px]">
        <BadgeItem class="px-[5px] py-[3px]" :text="'active'" :color="'green'" />
        <BadgeItem class="px-[5px] py-[3px]" :text="'english'" :color="'orange'" />
      </div>
    </div>

    <div class="flex items-center">
      <div style="width: 200px; height: 200px;">
        <DoughnutChartWithText :width="200" :height="200" :chart-data="chartData1" :options="chartOptions1" />
      </div>


      <div class="ml-[20px]">
        <div class="flex items-center my-[20px]">
          <div class="p-[8px] mr-[10px] rounded-full" style="background-color: #12B76A; width: 16px; height: 16px;">
          </div>
          <p>36 sessions finished</p>
        </div>
        <div class="flex items-center my-[20px]">
          <div class="p-[8px] mr-[10px] rounded-full" style="background-color: #F04438; width: 16px; height: 16px;">
          </div>
          <p>24 sessions absent</p>
        </div>
        <div class="flex items-center my-[20px]">
          <div class="p-[8px] mr-[10px] rounded-full" style="background-color: #d0d0d0; width: 16px; height: 16px;">
          </div>
          <p>24 sessions absent</p>
        </div>
      </div>
    </div>
  </article>
</template>