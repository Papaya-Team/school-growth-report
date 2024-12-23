<script lang="ts" setup>
import BackBtn from '@/components/utils/BackBtn.vue';



</script>

<template>
  <section class="main-container">
    <BackBtn @click="$router.back()" class="my-[20px]" />
  </section>
</template>