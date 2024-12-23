<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'

import BackBtn from '@/components/utils/BackBtn.vue';
import SearchItem from '@/components/utils/SearchItem.vue';
import EffectiveTimeStudent from '@/components/effective-time/EffectiveTimeStudent.vue';

</script>

<template>
  <section class="p-[20px] main-container">
    <BackBtn @click="$router.back()" class="my-[20px]" />
    
    <CardLayout> 
      <div>
        <p class="text-[20px] font-bold">Effective Time</p>
      </div>
      <SearchItem class="my-[20px]" />
      <div class="flex gap-[20px] flex-wrap">
        <EffectiveTimeStudent v-for="(item, index) in 10" :key="index" />
      </div>
    </CardLayout>
  </section>
</template>