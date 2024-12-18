<script lang="ts" setup>
import SearchIcon from '@/components/icons/SearchIcon.vue';

</script>

<template>
  <div class="my-[20px] relative">
    <div class="absolute inset-y-0 start-0 flex items-center pl-3">
      <SearchIcon />
    </div>
    <input type="text" placeholder="Search for student" 
    class="w-full p-[10px] pl-[40px] rounded-lg border border-[#E0E0E0]" />
  </div>
</template>