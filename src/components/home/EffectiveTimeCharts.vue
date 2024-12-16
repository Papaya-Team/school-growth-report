<script lang="ts" setup>
// import "@/plugins/chart-setup";
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
      data: [76, 24],
      backgroundColor: ["#12B76A", "#D0D0D0"],
      cutout: "80%",
    },
  ],
};

const chartOptions1 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: '76%',
      secondaryText: '57 hours',
      thirdText: '10%'
    },
    legend: {
      display: false,
    },
  },
};

const chartData2 = {
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: [77, 23],
      backgroundColor: ["#12B76A", "#D0D0D0"],
      cutout: "80%",
    },
  ],
};

const chartOptions2 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: '77%',
      secondaryText: '71 hours',
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
      <p class="text-[20px]">Effective Time</p>
    </div>

    <div>
      <div>
        <p class="text-[12px] my-[20px]"> Math </p>
      </div>
      <div class="flex">
        <DoughnutChartWithText :chart-data="chartData1" :options="chartOptions1" :width="200" :height="200" />
        <div class="ml-[20px]">
          <BulletChart :bgColor="'#d0d0d0'" :text="'Time lost'" :value="'7.2 hours'" />
          <BulletChart :bgColor="'#12B76A'" :text="'Effective time'" :value="'49.8 hours'" />
        </div>
      </div>
    </div>

    <div>
      <div>
        <p class="text-[12px] my-[20px] text-[#F04438]"> ELA </p>
      </div>
      <div class="flex">
        <DoughnutChartWithText :chart-data="chartData2" :options="chartOptions2" :width="200" :height="200" />
        <div class="ml-[20px]">
          <BulletChart :bgColor="'#d0d0d0'" :text="'Time lost'" :value="'16.4 hours'" />
          <BulletChart :bgColor="'#12B76A'" :text="'Effective time'" :value="'54.6 hours'" />
        </div>
      </div>
    </div>
  </CardLayout>
</template>