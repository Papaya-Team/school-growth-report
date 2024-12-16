<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import LeftArrow from '@/components/icons/LeftArrow.vue'
import { ref, onMounted } from "vue";
import { DoughnutChart } from "vue-chart-3";
import DoughnutChartWithText from '@/plugins/chart-setup';



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


const chartData2 = ref({
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: [49, 51],
      backgroundColor: ["#F04438", "#D0D0D0"],
      cutout: "80%",
    },
  ],
});

const chartOptions2 = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    customText: {
      centerText: "F",
      secondaryText: "49 out of 100",
    },
  },
});

const chartData4 = ref({
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: [67, 33],
      backgroundColor: ["#A1258F", "#D0D0D0"],
      cutout: "80%",
    },
  ],
});

const chartOptions4 = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    customText: {
      centerText: "D",
      secondaryText: "67 out of 100",
    },
  },
});

</script>

<template>
  <CardLayout>
    <div>
      <p class="text-[20px]">Accountability Grade</p>
      <p class="text-[#FF7223] text-[12px]"> Your current grade vs Your future grade </p>
    </div>
    <div class="flex items-center">
      <DoughnutChartWithText :width="200" :height="200" :chart-data="chartData1" :options="chartOptions1" />
      <LeftArrow />
      <DoughnutChartWithText :width="200" :height="200" :chart-data="chartData2" :options="chartOptions2" />
    </div>

    <div class="mt-[30px]">
      <p class="text-[#FF7223] text-[12px]"> Your goal grade </p>
    </div>
    <div class="flex items-center">
      <DoughnutChartWithText :width="200" :height="200" :chart-data="chartData1" :options="chartOptions1" />
      <LeftArrow />
      <DoughnutChartWithText :width="200" :height="200" :chart-data="chartData4" :options="chartOptions4" />
    </div>
  </CardLayout>
</template>