<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'

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

</script>

<template>
  <CardLayout>
    <div style="width: 200px; height: 200px;">
      <DoughnutChartWithText :width="200" :height="200" :chart-data="chartData1" :options="chartOptions1" />
    </div>
  </CardLayout>
</template>