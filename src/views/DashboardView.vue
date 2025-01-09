<script setup lang="ts">
import CardLayout from '@/layouts/CardLayout.vue'

import SingleKpiCard from '@/components/home/SingleKpiCard.vue'
import KpiProgressCard from '@/components/home/KpiProgressCard.vue'
import EffectiveTime from '@/components/home/EffectiveTime.vue'
import AccountabilityStatus from '@/components/home/accountability/AccountabilityStatus.vue'
import AccountabilityGrade from '@/components/home/grade/AccountabilityGrade.vue'
import EffectiveTimeCharts from '@/components/home/EffectiveTimeCharts.vue'
import DiagnosticResults from '@/components/home/DiagnosticResults.vue'
import HoursStatus from '@/components/home/HoursStatus.vue'
import ClosingGap from '@/components/closing-gap/ClosingGap.vue'
import GlowingStudents from '@/components/home/GlowingStudents.vue'

import { useSchoolStore } from '@/stores/school';

const schoolStore = useSchoolStore();
const { school } = schoolStore;

const singleCards = {
  elementary: [
    { name: 'Attendance', value: '44.76%', percentage: '0.0%' },
    { name: 'Effective Time', value: '75.86%', percentage: '0.0%' },
    { name: 'Active Students', value: '100%', percentage: '0.0%' },
    { name: 'On Track', value: '3.5%', percentage: '0.0%' },
    { name: 'At Risk', value: '40.6%', percentage: '0.0%' },
  ],
  middle: [
    { name: 'Attendance', value: '76.19%', percentage: '0.0%' },
    { name: 'Effective Time', value: '69.02%', percentage: '0.0%' },
    { name: 'Active Students', value: '80.8%', percentage: '0.0%' },
    { name: 'On Track', value: '3.5%', percentage: '0.0%' },
    { name: 'At Risk', value: '40.6%', percentage: '0.0%' },
  ],
  high: [
    { name: 'Attendance', value: '100%', percentage: '0.0%' },
    { name: 'Effective Time', value: '28.57%', percentage: '0.0%' },
    { name: 'Active Students', value: '70.8%', percentage: '0.0%' },
    { name: 'On Track', value: '3.5%', percentage: '0.0%' },
    { name: 'At Risk', value: '40.6%', percentage: '0.0%' },
  ]
}

const progressCards = {
  elementary: [
    { name: 'Total active students', total: 28, value: 5, number: 28 },
    { name: 'Student Satisfaction', total: 28, value: 4, number: 4.4 },
  ],
  middle: [
    { name: 'Total active students', total: 24, value: 5, number: 24 },
    { name: 'Student Satisfaction', total: 24, value: 4, number: 4.4 },
  ],
  high: [
    { name: 'Total active students', total: 1, value: 5, number: 28 },
    { name: 'Student Satisfaction', total: 0, value: 0, number: 0 },
  ]
}

const glowingAndGrowingStudents = {
  elementary: [
    {
      name: 'Glowing Students', 
      color: '#7932FF', 
      bgColor: '#F6F1FF',
      students: [
        { name: 'Destiny Aguillon', percentage: 90 },
        { name: 'Alice Baldwin', percentage: 87 },
        { name: 'Carlos Barrera', percentage: 86 },
        { name: 'Jesus Chavera', percentage: 80 },
        { name: 'Riddick Fonseca', percentage: 80 },
      ],
    },
    {
      name: 'Growing Students', 
      color: '#12B76A', 
      bgColor: '#E7F8F0',
      students: [
        { name: 'Jaelyn Hernandez', percentage: 36 },
        { name: 'Alice Baldwin', percentage: 50 },
        { name: 'Carlos Barrera', percentage: 56 },
        { name: 'Jesus Chavera', percentage: 60 },
        { name: 'Riddick Fonseca', percentage: 72 },
      ],
    }
  ]
}

</script>

<template>
  <main class="p-[20px]">
    <section class="grid grid-cols-5 gap-[24px] main-container">
      <SingleKpiCard v-for="(item, index) in singleCards[school]" 
      :key="item.name" 
      :item="item" />
    </section>

    <section class="main-container ">
      <AccountabilityStatus />
      <!-- <AccountabilityStatus /> -->
    </section>

    <section class="main-container flex flex-col gap-[20px]">
      <GlowingStudents v-for="(item, index) in glowingAndGrowingStudents[school]" 
        :key="index" 
        :students="item.students"
        :name="item.name" 
        :bgColor="item.bgColor" 
        :color="item.color" />
    </section>

    <section class="main-container gap-[20px]">
      <AccountabilityGrade class="mt-[20px]" />
    </section>

    <section class="main-container grid grid-cols-3 gap-[20px]">
      <EffectiveTimeCharts class="mt-[20px]" />
      <DiagnosticResults class="mt-[20px]" />
      <div>
        <HoursStatus class="mb-[20px]" />
        <KpiProgressCard v-for="(item, index) in progressCards[school]" 
          :key="index" 
          :item="item" />

      </div>
    </section>

    <section class=" main-container">
      <EffectiveTime />
    </section>

    <section class="main-container">
      <CardLayout>
        <ClosingGap />
      </CardLayout>
    </section>

  </main>
</template>

<style></style>
