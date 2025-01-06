<script lang="ts" setup>
import School from '@/components/icons/School.vue';
import DoughnutChartWithText from '@/plugins/chart-setup';
import { useRouter } from 'vue-router';
import { useSchoolStore } from '@/stores/school';
import { ref } from 'vue';

const router = useRouter();
const schoolStore = useSchoolStore();


const schools = [
  {
    value: 'elementary',
    name: 'Elementary School',
    grade: '3rd to 5th Grade',
    currentAprroaches: 36.2,
    currentAttendance: 76,
    currentEffectiveTime: 70,
    standardApproaches: 38.1,
    standardAttendance: 80,
    standardEffectiveTime: 75,
    staarApproaches: 42,
  },
  {
    value: 'middle',
    name: 'Middle School',
    grade: '6th to 8th Grade',
    currentAprroaches: 48,
    currentAttendance: 76,
    currentEffectiveTime: 70,
    standardApproaches: 30,
    standardAttendance: 80,
    standardEffectiveTime: 75,
    staarApproaches: 50,
  },
  {
    value: 'high',
    name: 'High School',
    grade: '9th to 12th Grade',
    currentAprroaches: 59,
    currentAttendance: 76,
    currentEffectiveTime: 70,
    standardApproaches: 30,
    standardAttendance: 80,
    standardEffectiveTime: 75,
    staarApproaches: 67,
  }
]

const chartData = [
  {
    // labels: ["STAAR", "INTERIM"],
    datasets: [
      {
        label: "Approaches",
        data: [schools[0].standardApproaches, 100 - schools[0].standardApproaches],
        backgroundColor: ["#A1258F", "#D0D0D0"],
        cutout: "80%",
      },
    ],
  },
  {
    // labels: ["Red", "Gray"],
    datasets: [
      {
        label: "Dataset",
        data: [schools[1].currentAprroaches, 100 - schools[1].currentAprroaches],
        backgroundColor: ["#A1258F", "#D0D0D0"],
        cutout: "80%",
      },
    ],
  },
  {
    // labels: ["Red", "Gray"],
    datasets: [
      {
        label: "Dataset",
        data: [schools[2].staarApproaches, 100 - schools[2].staarApproaches],
        backgroundColor: ["#A1258F", "#D0D0D0"],
        cutout: "80%",
      },
    ],
  }
]

const chartOptions = [
  [
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[0].standardApproaches}%`,
          secondaryText: 'Approaches',
          thirdText: 'Future State'
        },
        legend: {
          display: false,
        },
      },
    },
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[0].currentAprroaches}%`,
          secondaryText: 'Interim Data',
          // thirdText: 'Interim Data'
        },
        legend: {
          display: false,
        },
      },
    },
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[0].staarApproaches}%`,
          secondaryText: 'STAAR Data',
          // thirdText: 'STAAR Data'
        },
        legend: {
          display: false,
        },
      },
    },
  ],
  [
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[1].staarApproaches}%`,
          secondaryText: 'Approaches',
          thirdText: 'Interim Data'
        },
        legend: {
          display: false,
        },
      },
    },
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[1].currentAprroaches}%`,
          secondaryText: 'Interim Data',
          // thirdText: 'Interim Data'
        },
        legend: {
          display: false,
        },
      },
    },
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[1].staarApproaches}%`,
          secondaryText: 'STAAR Data',
          // thirdText: 'Interim Data'
        },
        legend: {
          display: false,
        },
      },
    },
  ],
  [
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[2].standardApproaches}%`,
          secondaryText: 'Approaches',
          thirdText: 'STAAR Data'
        },
        legend: {
          display: false,
        },
      },
    },
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[2].currentAprroaches}%`,
          secondaryText: 'Interim Data',
          // thirdText: 'STAAR Data'
        },
        legend: {
          display: false,
        },
      },
    },
    {
      responsive: true,
      plugins: {
        customText: {
          centerText: `${schools[2].staarApproaches}%`,
          secondaryText: 'STAAR Data',
          // thirdText: 'STAAR Data'
        },
        legend: {
          display: false,
        },
      },
    }
  ]
]

const setSchool = (school: string) => {
  schoolStore.setSchool(school);
  if (school != 'high') router.push('/dashboard')
}

</script>

<template>
  <section class="main-container">
    <div class="flex flex-col justify-center items-center">
      <figure style="width: 120px;">
        <img src="/dilley.png" alt="">
      </figure>
      <div class="text-center">
        <p class="text-[40px] text-[#FF7223] font-bold mt-[20px]">Dilley ISD</p>
        <p class="text-[#666666] mb-[20px] mt-[10px]">Weekly Report - Last updated on 01/06/25</p>
        <p class="text-[20px]">Please choose one school to continue</p>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-[20px] my-[30px] px-[20px]">
      <div @click="setSchool(item.value)" v-for="(item, index) in schools" :key="index"
        class="p-[20px] hover:shadow-2xl cursor-pointer rounded-lg">
        <div class="flex flex-col items-center justify-center">
          <School />
          <p class="my-[10px] font-bold text-[20px]">{{ item.name }}</p>
          <p class="text-[#666666]">{{ item.grade }}</p>
        </div>

        <div class="mt-[20px]">
          <div class="flex">
            <DoughnutChartWithText :chart-data="chartData[index]" :options="chartOptions[index][0]" :width="200"
              :height="200" />
            <section>
              <div class="ml-[20px]">
                <p class="text-[16px]">Future State Projection</p>
                <p class="text-[10px] text-[#666666]">With current performance</p>
                <p class="font-bold mt-[6px] text-[14px]"> <span class="text-[#A1258F]">Approaches</span> {{
                  item.currentAprroaches
                }}%</p>
                <p class="font-bold mt-[6px] text-[14px]"> <span>Attendance</span> {{ item.currentAttendance }}%</p>
                <p class="font-bold mt-[6px] text-[14px]"> <span>Effective Time</span> {{ item.currentEffectiveTime }}%</p>
              </div>

              <div class="ml-[20px] mt-[20px]">
                <p class="text-[16px]">Future State Projection</p>
                <p class="text-[10px] text-[#666666]">With standard performance</p>
                <p class="font-bold mt-[6px] text-[14px]"> <span class="text-[#A1258F]">Approaches</span> {{
                  item.standardApproaches
                }}%</p>
                <p class="font-bold mt-[6px] text-[14px]"> <span>Attendance</span> {{ item.standardAttendance }}%</p>
                <p class="font-bold mt-[6px] text-[14px]"> <span>Effective Time</span> {{ item.standardEffectiveTime }}%</p>
              </div>
            </section>
          </div>
          <div class="flex justify-center mt-[20px] gap-[20px]">
            <DoughnutChartWithText :chart-data="chartData[index]" :options="chartOptions[index][1]" :width="160"
              :height="160" />
            <DoughnutChartWithText :chart-data="chartData[index]" :options="chartOptions[index][2]" :width="160"
              :height="160" />
          </div>
        </div>
      </div>


    </div>
  </section>
</template>