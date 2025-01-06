<script lang="ts" setup>
import StudentItem from '@/components/closing-gap/StudentItem.vue';
import SearchItem from '@/components/utils/SearchItem.vue';

import { getMathES } from '@/api/ctg-data'

const mathES = getMathES()

</script>

<template>
  <section>

    <div class="mb-[20px]">
      <router-link to="/closing-the-gap">
        <p class="text-[20px] font-bold">Closing the Gap</p>
      </router-link>
    </div>
    
    <SearchItem class="my-[20px]" />

    <div class="flex gap-[20px] flex-wrap">
      <StudentItem v-for="(item, index) in mathES" :key="index" :student="item" />
    </div>
  </section>
</template>