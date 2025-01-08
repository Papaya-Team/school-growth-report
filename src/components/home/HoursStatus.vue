<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import { ref, onMounted } from "vue";
import DoughnutChartWithText from '@/plugins/chart-setup';
import BulletChart from '@/components/home/BulletChart.vue';
import RightArrow from '@/components/icons/RightArrow.vue';

import { useSchoolStore } from '@/stores/school';

const schoolStore = useSchoolStore();
const { school } = schoolStore;

/* data */

const schools = {
  elementary: {
    totalHours: 1058.94,
    hoursUsed: 148.09,
    wastedHours: 24.83,
  },
  middle: {
    totalHours: 902.06,
    hoursUsed: 69.55,
    wastedHours: 3.5,
  },
  high: {
    totalHours: 39.22,
    hoursUsed: 2,
    wastedHours:0,
  }
}

const totalHours = schools[school].totalHours;
const hoursUsed = schools[school].hoursUsed;
const wastedHours = schools[school].wastedHours;
const effectiveHours = hoursUsed - wastedHours;
const remainingHours = totalHours - hoursUsed;

const percentWasted = (wastedHours / totalHours) * 100;
const percentEffective = (hoursUsed / totalHours) * 100;
const percentRemaining = (remainingHours / totalHours) * 100;

const chartData1 = {
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Hrs",
      data: [percentWasted, percentEffective, percentRemaining],
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
      secondaryText: `${totalHours} hours`,
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
      <router-link to="/program-hours">
        <div class="flex items-center">
          <p class="text-[20px]">Campus Hours Status</p>
          <RightArrow class="ml-[10px]" />
        </div>
      </router-link>
    </div>

    <div>
      <div class="flex">
        <DoughnutChartWithText :chart-data="chartData1" :options="chartOptions1" :width="200" :height="200" />
        <div class="ml-[20px]">
          <BulletChart :bgColor="'#12B76A'" :text="'Effective hours'" :value="`${effectiveHours} hrs`" />
          <BulletChart :bgColor="'#FFB700'" :text="'Wasted hours'" :value="`${wastedHours} hrs`" />
          <BulletChart :bgColor="'#D0D0D0'" :text="'Hours remaining'" :value="`${remainingHours} hrs`" />
        </div>
      </div>
    </div>

  </CardLayout>
</template>