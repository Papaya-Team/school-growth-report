<script lang="ts" setup>
import ClosingGap from '@/components/closing-gap/ClosingGap.vue';
import BackBtn from '@/components/utils/BackBtn.vue';
import CardLayout from '@/layouts/CardLayout.vue';

</script>

<template>
  <section class="p-[20px]">
    <BackBtn @click="$router.push('/')" class="my-[20px]" />

    <CardLayout>
      <ClosingGap />
    </CardLayout>
  </section>
</template>