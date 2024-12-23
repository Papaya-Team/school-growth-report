<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderHome from '@/components/home/HeaderHome.vue'



</script>

<template>
  <HeaderHome />


  <RouterView />
</template>

<style>
.main-container {
  @apply container mx-auto mt-[24px]
}
</style>
