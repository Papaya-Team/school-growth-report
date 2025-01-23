<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
import { BarChart } from "vue-chart-3";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = reactive({
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  datasets: [
    {
      backgroundColor: "#12B76A",
      borderColor: "#1E88E5",
      data: [40, 55, 75, 81, 56],
    },
  ],
});

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
});

</script>

<template>

  <BarChart :chart-data="chartData" :options="chartOptions" :width="400" :height="400" />

</template>