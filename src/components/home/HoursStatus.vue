<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import { ref, onMounted } from "vue";
import { DoughnutChart } from "vue-chart-3";
import DoughnutChartWithText from '@/plugins/chart-setup';
import BulletChart from '@/components/home/BulletChart.vue';


const chartData1 = {
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: [2, 11, 87],
      backgroundColor: ["#D83D32", "#12B76A", "#E6E6E6"],
      cutout: "80%",
    },
  ],
};

const chartOptions1 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: '13%',
      secondaryText: '138 hours',
      thirdText: '10%'
    },
    legend: {
      display: false,
    },
  },
};



</script>

<template>
  <CardLayout>
    <div>
      <p class="text-[20px]">Campus Hours Status</p>
    </div>

    <div>
      <div class="flex">
        <DoughnutChartWithText :chart-data="chartData1" :options="chartOptions1" :width="200" :height="200" />
        <div class="ml-[20px]">
          <BulletChart :bgColor="'#12B76A'" :text="'Hours used'" :value="'114.4 hrs'" />
          <BulletChart :bgColor="'#FFB700'" :text="'Hours lost'" :value="'23.6 hrs'" />
          <BulletChart :bgColor="'#D0D0D0'" :text="'Hours remaining'" :value="'920.94 hrs'" />
        </div>
      </div>
    </div>

  </CardLayout>
</template>