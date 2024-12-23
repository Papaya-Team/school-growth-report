<script lang="ts" setup>
import School from '@/components/icons/School.vue';


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

    <div class="flex gap-[20px] justify-center items-center">
      <div v-for="(item, index) in 3" :key="index"
        class="p-[20px]">
        <div class="flex flex-col items-center justify-center">
          <School />
          <p>Elementary School</p>
          <p>Kinder to 3rd Grade</p>
          <p>Accountability Status</p>
        </div>
      </div>


    </div>
  </section>
</template>