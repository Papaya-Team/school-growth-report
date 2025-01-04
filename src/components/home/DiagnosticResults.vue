<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import { ref, onMounted } from "vue";
import DoughnutChartWithText from '@/plugins/chart-setup';
import BulletChart from '@/components/home/BulletChart.vue';

import { useSchoolStore } from '@/stores/school';

const schoolStore = useSchoolStore();
const { school } = schoolStore;

const schools = {
  elementary: {
    math: {
      on_grade: 0,
      grade1: 1,
      grade2: 8,
      grade3: 5,
    },
    ela: {
      on_grade: 6,
      grade1: 2,
      grade2: 6,
      grade3: 0,
    },
  },
  middle: {
    math: {
      on_grade: 0,
      grade1: 0,
      grade2: 11,
      grade3: 2,
    },
    ela: {
      on_grade: 4,
      grade1: 2,
      grade2: 2,
      grade3: 1,
    },
  },
  high: {
    math: {
      on_grade: 0,
      grade1: 0,
      grade2: 0,
      grade3: 0,
    },
    ela: {
      on_grade: 0,
      grade1: 0,
      grade2: 1,
      grade3: 0,
    },
  },
}

const totalStudentsMath = 14;
const totalStudentsEla = 10;


const percentOnGradeMath = (schools[school].math.on_grade / 14) * 100;
const percentGrade1Math = (schools[school].math.grade1 / 14) * 100;
const percentGrade2Math = (schools[school].math.grade2 / 14) * 100;
const percentGrade3Math = (schools[school].math.grade3 / 14) * 100;

const percentOnGradeEla = (schools[school].ela.on_grade / 14) * 100;
const percentGrade1Ela = (schools[school].ela.grade1 / 14) * 100;
const percentGrade2Ela = (schools[school].ela.grade2 / 14) * 100;
const percentGrade3Ela = (schools[school].ela.grade3 / 14) * 100;


const dataMath = () => {
  let data = [percentOnGradeMath, percentGrade1Math, percentGrade2Math, percentGrade3Math];
  return data.filter((item) => item > 0);
}

const dataEla = () => {
  let data = [percentOnGradeEla, percentGrade1Ela, percentGrade2Ela, percentGrade3Ela];
  return data.filter((item) => item > 0);
}

const chartData1 = {
  // labels: ["Red", "Gray"],
  datasets: [
    {
      label: "Dataset",
      data: dataMath(),
      backgroundColor: ["#4285f4", "#12b76a", "#ffb700", "#f04438"],
      cutout: "80%",
    },
  ],
};

const chartOptions1 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: `Total ${totalStudentsMath}`,
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
      data: dataEla(),
      backgroundColor: ["#4285f4", "#12b76a", "#ffb700", "#f04438"],
      cutout: "80%",
    },
  ],
};

const chartOptions2 = {
  responsive: true,
  plugins: {
    customText: {
      centerText: `Total ${totalStudentsEla}`,
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
          <BulletChart v-if="schools[school].math.on_grade > 1" :bgColor="'#4285f4'" :text="'On Grades level'"
            :value="`${schools[school].math.on_grade} Students`" />
          <BulletChart v-if="schools[school].math.grade1 > 1" :bgColor="'#12B76A'" :text="'1 Grade behind'"
            :value="`${schools[school].math.grade1} Students`" />
          <BulletChart v-if="schools[school].math.grade2 > 1" :bgColor="'#FFB700'" :text="'2 Grades behind'"
            :value="`${schools[school].math.grade2} Students`" />
          <BulletChart v-if="schools[school].math.grade3 > 1" :bgColor="'#f04438'" :text="'3 Grades behind'"
            :value="`${schools[school].math.grade3} Students`" />
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
          <BulletChart v-if="schools[school].ela.on_grade" :bgColor="'#4285f4'" :text="'On Grade level'"
            :value="`${schools[school].ela.on_grade} Students`" />
          <BulletChart v-if="schools[school].ela.grade1" :bgColor="'#12B76A'" :text="'1 Grades behind'"
            :value="`${schools[school].ela.grade1} Students`" />
          <BulletChart v-if="schools[school].ela.grade2" :bgColor="'#FFB700'" :text="'2 Grades behind'"
            :value="`${schools[school].ela.grade2} Students`" />
          <BulletChart v-if="schools[school].ela.grade3" :bgColor="'#f04438'" :text="'3 Grades behind'"
            :value="`${schools[school].ela.grade3} Students`" />
        </div>
      </div>
    </div>
  </CardLayout>
</template>