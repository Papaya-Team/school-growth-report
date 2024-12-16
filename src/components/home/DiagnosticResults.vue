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
      data: [57.2, 35.7, 7.1],
      backgroundColor: ["#FFB700", "#F04438", "#12B76A"],
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
      data: [14.3, 42.9, 42.9],
      backgroundColor: ["#FFB700", "#F04438", "#12B76A"],
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
      <p class="text-[20px]">Diagnostic results</p>
    </div>

    <div>
      <div>
        <p class="text-[12px] my-[20px]"> Math </p>
      </div>
      <div class="flex">
        <DoughnutChartWithText :chart-data="chartData1" :options="chartOptions1" :width="200" :height="200" />
        <div class="ml-[20px]">
          <BulletChart :bgColor="'#12B76A'" :text="'On Grade level'" :value="'1 Student'" />
          <BulletChart :bgColor="'#FFB700'" :text="'2 Grades behind'" :value="'5 Students'" />
          <BulletChart :bgColor="'#F04438'" :text="'3 Grades behind'" :value="'8 Students'" />
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
          <BulletChart :bgColor="'#12B76A'" :text="'On Grade level'" :value="'6 Student'" />
          <BulletChart :bgColor="'#FFB700'" :text="'2 Grades behind'" :value="'2 Students'" />
          <BulletChart :bgColor="'#F04438'" :text="'3 Grades behind'" :value="'6 Students'" />
        </div>
      </div>
    </div>
  </CardLayout>
</template>