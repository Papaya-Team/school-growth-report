<script lang="ts" setup>
import BadgeItem from '@/components/utils/BadgeItem.vue';
import LessonItem from '@/components/closing-gap/LessonItem.vue';

const lessons = [
  {text: 'RWNE - 8.4A', status: 'mastered' },
  {text: 'RWNE - 8.4A', status: 'reviewed' ,},
  {text: 'RWNE - 8.4A', status: 'not_covered'},
  {text: 'RWNE - 8.4A', status: 'not_covered'},
  {text: 'RWNE - 8.4A', status: 'not_covered'},
]

</script>

<template>
  <article class="flex items-center border-2 rounded-lg p-[20px] w-full">

    <div class="border-r-2 pr-[20px]">
      <p class="gray_text">5th Grade</p>
      <p class="text-[#1A4180] font-bold my-[8px]">Jose Martinez de la Cruz</p>
      <div class="flex gap-[10px]">
        <BadgeItem class="px-[5px] py-[3px]" :text="'active'" :color="'green'" />
        <BadgeItem class="px-[5px] py-[3px]" :text="'english'" :color="'orange'" />
      </div>
    </div>

    <div class="flex items-center border-r-2 px-[20px] gap-[15px]">
      <div>
        <p class="text-[#5D6165]">Diagnostic Grade</p>
        <p class="text-[#F79009]">2 grades behind</p>
      </div>
      <div>
        <p class="text-[#5D6165]">On grade gaps</p>
        <p class="text-[#1A4180]">17 gaps</p>
      </div>
      <div>
        <p class="text-[#5D6165]">Previous grade gaps</p>
        <p class="text-[#1A4180]">20 gaps</p>
      </div>
    </div>

    <div class="flex items-center border-r-2 px-[20px] gap-[15px]">
      <div>
        <p class="text-[#5D6165]">Current Band Level</p>
        <div class="flex items-center gap-[5px]">
          <img src="/icon-did-not.png" alt="">
          <p class="text-[#DB2C37]">Did Not Meet</p>
        </div>
      </div>
      <div>
        <p class="text-[#5D6165]">Next Band Level</p>
        <div class="flex items-center gap-[5px]">
          <img src="/icon-approaches.png" alt="">
          <p class="text-[#A1258F]">Approaches</p>
        </div>
      </div>
      <div >
        <p class="text-[#5D6165]">Raw Points Missing</p>
        <p class="text-[#1A4180]">10 points</p>
      </div>
    </div>

    <div class="flex gap-[10px] px-[20px] overflow-scroll w-2/6">
      <LessonItem v-for="(item, index) in lessons" :key="index" :item="item"/>
    </div>
  </article>
</template>

<style></style>