<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import CurrentState from '@/components/home/accountability/CurrentState.vue'
import RightArrow from '@/components/icons/RightArrow.vue';

import { useSchoolStore } from '@/stores/school';

const schoolStore = useSchoolStore();
const { school } = schoolStore;


const schools = {
  elementary: {
    math: {
      totalStudents: 14,
      current: {
        mastered: 0,
        meets: 0,
        approaches: 0,
        didNotMeet: 14,
      },
      future: {
        mastered: 0,
        meets: 0,
        approaches: 3,
        didNotMeet: 11,
      },
      goal: {
        mastered: 0,
        meets: 0,
        approaches: 7,
        didNotMeet: 7,
      }
    },
    ela: {
      totalStudents: 14,
      current: {
        mastered: 0,
        meets: 0,
        approaches: 6,
        didNotMeet: 8,
      },
      future: {
        mastered: 0,
        meets: 2,
        approaches: 10,
        didNotMeet: 2,
      },
      goal: {
        mastered: 0,
        meets: 3,
        approaches: 10,
        didNotMeet: 1,
      }
    },
  },
  middle: {
    math: {
      totalStudents: 14,
      current: {
        mastered: 0,
        meets: 0,
        approaches: 0,
        didNotMeet: 14,
      },
      future: {
        mastered: 0,
        meets: 0,
        approaches: 3,
        didNotMeet: 11,
      },
      goal: {
        mastered: 0,
        meets: 0,
        approaches: 7,
        didNotMeet: 7,
      }
    },
    ela: {
      totalStudents: 14,
      current: {
        mastered: 0,
        meets: 0,
        approaches: 6,
        didNotMeet: 8,
      },
      future: {
        mastered: 0,
        meets: 2,
        approaches: 10,
        didNotMeet: 2,
      },
      goal: {
        mastered: 0,
        meets: 3,
        approaches: 10,
        didNotMeet: 1,
      }
    },
  },
  high: {
    math: {
      totalStudents: 14,
      current: {
        mastered: 0,
        meets: 0,
        approaches: 0,
        didNotMeet: 14,
      },
      future: {
        mastered: 0,
        meets: 0,
        approaches: 3,
        didNotMeet: 11,
      },
      goal: {
        mastered: 0,
        meets: 0,
        approaches: 7,
        didNotMeet: 7,
      }
    },
    ela: {
      totalStudents: 14,
      current: {
        mastered: 0,
        meets: 0,
        approaches: 6,
        didNotMeet: 8,
      },
      future: {
        mastered: 0,
        meets: 2,
        approaches: 10,
        didNotMeet: 2,
      },
      goal: {
        mastered: 0,
        meets: 3,
        approaches: 10,
        didNotMeet: 1,
      }
    },
  },
}

const mathData = schools[school].math;
const elaData = schools[school].ela;

const mathTotalStudents = mathData.totalStudents;
const elaTotalStudents = elaData.totalStudents;


const currentBarsMath = [
  {name: 'Mastered', value: mathData.current.mastered , percentage: 0},
  {name: 'Meets', value: mathData.current.meets, percentage: 0},
  {name: 'Approaches', value: mathData.current.approaches, percentage: 0},
  {name: 'Did Not Meet', value: mathData.current.didNotMeet, percentage: 100},
]

const currentBarsEla = [
  {name: 'Mastered', value: elaData.current.mastered, percentage: 0},
  {name: 'Meets', value: elaData.current.meets, percentage: 0},
  {name: 'Approaches', value: elaData.current.approaches, percentage: ( elaData.current.approaches / elaTotalStudents) * 100},
  {name: 'Did Not Meet', value: elaData.current.didNotMeet, percentage: (elaData.current.didNotMeet / elaTotalStudents) * 100},
]


const futureBarsMath = [
  {name: 'Mastered', value: mathData.future.mastered, percentage: 0},
  {name: 'Meets', value: mathData.future.meets, percentage: 0},
  {name: 'Approaches', value: mathData.future.approaches, percentage: (mathData.future.approaches / mathTotalStudents) * 100},
  {name: 'Did Not Meet', value: mathData.future.didNotMeet, percentage: (mathData.future.didNotMeet / mathTotalStudents) * 100},
]

const futureBarsEla = [
  {name: 'Mastered', value: elaData.future.mastered, percentage: 0},
  {name: 'Meets', value: elaData.future.meets, percentage: (elaData.future.meets / 14) * 100},
  {name: 'Approaches', value: elaData.future.approaches, percentage: (elaData.future.approaches / elaTotalStudents) * 100},
  {name: 'Did Not Meet', value: elaData.future.didNotMeet, percentage: (elaData.future.didNotMeet / elaTotalStudents) * 100},
]


/* your goal */
const goalBarsMath = [
  {name: 'Mastered', value: mathData.goal.mastered, percentage: 0},
  {name: 'Meets', value: mathData.goal.meets, percentage: 0},
  {name: 'Approaches', value: mathData.goal.approaches, percentage: (mathData.goal.approaches / mathTotalStudents) * 100},
  {name: 'Did Not Meet', value: mathData.goal.didNotMeet, percentage: (mathData.goal.didNotMeet / mathTotalStudents) * 100},
]

const goalBarsEla = [
  {name: 'Mastered', value: elaData.goal.mastered, percentage: 0},
  {name: 'Meets', value: elaData.goal.meets, percentage: (3 / 14) * 100},
  {name: 'Approaches', value: elaData.goal.approaches, percentage: (elaData.goal.approaches / elaTotalStudents) * 100},
  {name: 'Did Not Meet', value: elaData.goal.didNotMeet, percentage: (elaData.goal.didNotMeet / elaTotalStudents) * 100},
]

</script>

<template>
  <CardLayout>
    <div class="flex gap-[20px]">
      <section style="width: 65%;">
        <div>
          <p class="text-[20px]">Your current state vs Your future state</p>
          <p class="text-[#666666] text-[12px]"> STAAR Test Data 2023 </p>
        </div>
        <div class="grid grid-cols-2 gap-[20px]">
          <div>
            <div class="bg-blue-950 py-[5px] rounded-md mt-[20px]">
              <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">Math</span> 14 students
              </p>
            </div>

            <div class="grid grid-cols-2">
              <CurrentState :title="'Current state'" :bars="currentBarsMath" />
              <CurrentState :title="'Projected future'" :bars="futureBarsMath"/>
            </div>

          </div>

          <div>
            <div class="bg-[#F04438] py-[5px] rounded-md mt-[20px]">
              <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">ELA</span> 14 students
              </p>
            </div>

            <div class="grid grid-cols-2">
              <CurrentState :title="'Current state'" :bars="currentBarsEla" />
              <CurrentState :title="'Projected future'" :bars="futureBarsEla" />
            </div>

          </div>
        </div>
      </section>

      <section style="width: 35%;">
        <div>
          <p class="text-[20px]">Your goal</p>
          <p class="text-[#666666] text-[12px]"> STAAR Test Data 2023 </p>
        </div>
        <div class="grid grid-cols-2 gap-[20px]">
          <div>
            <div class="bg-blue-950 py-[5px] rounded-md mt-[20px]">
              <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">Math</span> 14 students
              </p>
            </div>

            <div>
              <CurrentState :title="'Projected future'" :bars="goalBarsMath"/>
            </div>

          </div>

          <div>
            <div class="bg-[#F04438] py-[5px] rounded-md mt-[20px]">
              <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">ELA</span> 14 students
              </p>
            </div>

            <div>
              <CurrentState :title="'Projected future'" :bars="goalBarsEla" />
            </div>

          </div>
        </div>
      </section>
    </div>

    <div>
      <p class="text-[#666666] text-[12px] pt-[20px] border-t-2">Your future state has been projected using the current status of the attendance and effective time of the
        students enrolled in Papaya.</p>
    </div>
  </CardLayout>
</template>