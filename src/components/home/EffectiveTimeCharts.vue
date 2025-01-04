<script lang="ts" setup>
// import "@/plugins/chart-setup";
import CardLayout from '@/layouts/CardLayout.vue'
import { ref, onMounted } from "vue";
import DoughnutChartWithText from '@/plugins/chart-setup';
import BulletChart from '@/components/home/BulletChart.vue';

import { useSchoolStore } from '@/stores/school';

const schoolStore = useSchoolStore();
const { school } = schoolStore;

/* data */

const schools = {
  elementary: {
    math: {
      totalHours: 1058.94,
      timeLost: 148.09,
      effectiveHours: 24.83,
    },
    ela: {
      totalHours: 1058.94,
      timeLost: 148.09,
      effectiveHours: 24.83,
    },
  },
  middle: {
    math: {
      totalHours: 900,
      timeLost: 148.09,
      effectiveHours: 24.83,
    },
    ela: {
      totalHours: 900,
      timeLost: 148.09,
      effectiveHours: 24.83,
    },
  },
  high: {
    math: {
      totalHours: 600,
      timeLost: 148.09,
      effectiveHours: 24.83,
    },
    ela: {
      totalHours: 600.94,
      timeLost: 148.09,
      effectiveHours: 24.83,
    },
  },
}

const effectiveHoursMath = schools[school].math.totalHours - schools[school].math.timeLost;
const effectiveHoursEla = schools[school].ela.totalHours - schools[school].ela.timeLost;

const percentEffectiveMath = (effectiveHoursMath / schools[school].math.totalHours) * 100;
const percentLostMath = (schools[school].math.timeLost / schools[school].math.totalHours) * 100;

const percentEffectiveEla = (effectiveHoursEla / schools[school].ela.totalHours) * 100;
const percentLostEla = (schools[school].ela.timeLost / schools[school].ela.totalHours) * 100;

const chartData1 = {
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: [percentEffectiveMath, percentLostMath],
      backgroundColor: ["#12B76A", "#D0D0D0"],
      cutout: "80%",
    },
  ],
};

const chartOptions1 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: `${percentEffectiveMath.toFixed(2)}%`,
      secondaryText: `${schools[school].math.totalHours} hrs`,
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
      data: [percentEffectiveEla, percentLostEla],
      backgroundColor: ["#12B76A", "#D0D0D0"],
      cutout: "80%",
    },
  ],
};

const chartOptions2 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: `${percentEffectiveEla.toFixed(2)}%`,
      secondaryText: `${schools[school].ela.totalHours} hrs`,
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
          <BulletChart :bgColor="'#d0d0d0'" :text="'Time lost'" :value="`${schools[school].ela.timeLost} hrs`" />
          <BulletChart :bgColor="'#12B76A'" :text="'Effective time'" :value="`${effectiveHoursMath.toFixed(2)} hrs`" />
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
          <BulletChart :bgColor="'#d0d0d0'" :text="'Time lost'" :value="`${schools[school].ela.timeLost} hrs`" />
          <BulletChart :bgColor="'#12B76A'" :text="'Effective time'" :value="`${effectiveHoursEla.toFixed(2)} hrs`" />
        </div>
      </div>
    </div>
  </CardLayout>
</template>