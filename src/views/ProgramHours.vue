<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'

import BackBtn from '@/components/utils/BackBtn.vue';
import SearchItem from '@/components/utils/SearchItem.vue';
import HoursStudent from '@/components/program-hours/HoursStudent.vue';
import MainProgramHours from '@/components/program-hours/MainProgramHours.vue';

</script>

<template>
  <section class="main-container">
    <BackBtn @click="$router.back()" class="my-[20px]" />

    <div>
      <p class="text-[20px] font-bold">Program Hours</p>
    </div>

    <div class="flex gap-[20px]">
      <MainProgramHours />

      <CardLayout>
        <SearchItem class="my-[20px]" />
        <div class="flex gap-[20px] flex-wrap justify-center">
          <HoursStudent v-for="(item, index) in 10" :key="index" />
        </div>
      </CardLayout>
    </div>
  </section>
</template>