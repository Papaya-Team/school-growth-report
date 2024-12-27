<script lang="ts" setup>
import School from '@/components/icons/School.vue';
import DoughnutChartWithText from '@/plugins/chart-setup';
import BulletChart from '@/components/home/BulletChart.vue';



const schools = [
  { name: 'Elementary School', grade: 'Kinder to 3rd Grade', },
  { name: 'Middle School', grade: '4th to 8th Grade', },
  { name: 'High School', grade: '9th to 12th Grade', }
]

const chartData1 = {
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: [21, 79],
      backgroundColor: ["#A1258F", "#D0D0D0"],
      cutout: "80%",
    },
  ],
};

const chartOptions1 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: '21%',
      secondaryText: 'Approaches',
      thirdText: 'Interim STAAR'
    },
    legend: {
      display: false,
    },
  },
};
</script>

<template>
  <section class="main-container">
    <div class="flex flex-col justify-center items-center">
      <figure style="width: 120px;">
        <img src="/dilley.png" alt="">
      </figure>
      <div class="text-center">
        <p class="text-[40px] text-[#FF7223] font-bold my-[20px]">Dilley ISD</p>
        <p class="text-[20px]">Please choose one school to continue</p>
      </div>
    </div>

    <div class="flex gap-[20px] justify-center items-center" @click="$router.push('/dashboard')">
      <div v-for="(item, index) in schools" :key="index" class="p-[20px]">
        <div class="flex flex-col items-center justify-center">
          <School />
          <p class="my-[10px] font-bold text-[20px]">{{ item.name }}</p>
          <p class="text-[#666666]">{{ item.grade }}</p>
          <p class="mt-[30px]">Accountability Status</p>
        </div>

        <div class="mt-[20px]">
          <div class="flex">
            <DoughnutChartWithText :chart-data="chartData1" :options="chartOptions1" :width="200" :height="200" />
            <div class="ml-[20px]">
              <p>Most Recent Result</p>
              <p class="text-[10px] text-[#666666]">Interim STAAR 2024-2025</p>
              <p class="font-bold mt-[10px]"> <span class="text-[#A1258F]">Approaches</span> 21%</p>

              <p class="mt-[30px]">First Result</p>
              <p class="text-[10px] text-[#666666]">STAAR Data 2023-2024</p>
              <p class="font-bold mt-[10px]"> <span class="text-[#A1258F]">Approaches</span> 21%</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>