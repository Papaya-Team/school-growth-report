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


const singleCards = [
  { name: 'Attendance', value: '90.8%', percentage: '0.0%', route: 'attendance' },
  { name: 'Effective Time', value: '90.8%', percentage: '0.0%', route: 'effective-time' },
  { name: 'Active Students', value: '90.8%', percentage: '0.0%' },
  { name: 'On Track', value: '3.5%', percentage: '0.0%' },
  { name: 'At Risk', value: '40.6%', percentage: '0.0%' },
]

const progressCards = [
  { name: 'Total active students', total: 28, value: 5, number: 28 },
  { name: 'Student Satisfaction', total: 28, value: 4, number: 4 },
]

</script>

<template>
  <main class="p-[20px]">
    <section class="grid grid-cols-5 gap-[24px] main-container">
      <SingleKpiCard v-for="(item, index) in singleCards" :key="item.name" :item="item" />
    </section>

    <section class="main-container ">
      <AccountabilityStatus />
      <!-- <AccountabilityStatus /> -->
    </section>

    <section class="main-container gap-[20px]">
      <AccountabilityGrade class="mt-[20px]" />
    </section>

    <section class="main-container grid grid-cols-3 gap-[20px]">
      <EffectiveTimeCharts class="mt-[20px]" />
      <DiagnosticResults class="mt-[20px]" />
      <div>
        <HoursStatus class="mb-[20px]" />
        <KpiProgressCard v-for="(item, index) in progressCards" :key="index" :item="item" />
        
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

<style>

</style>
