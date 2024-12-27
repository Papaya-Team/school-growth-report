<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HeaderHome from '@/components/home/HeaderHome.vue'
import { computed } from 'vue';


const route = useRoute();

const isHome = computed(() => route.name === 'home');

</script>

<template>
  <HeaderHome v-if="!isHome" />


  <RouterView />
</template>

<style>
.main-container {
  @apply container mx-auto mt-[24px]
}
</style>
