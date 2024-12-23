<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import UpgradeArrow from '@/components/icons/UpgradeArrow.vue'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps<{
  item: {
    name: string
    value: string
    percentage: string
    route: string | undefined
  }
}>()

const router = useRouter();

</script>

<template>
  <CardLayout>
    <div :class="item.route ? 'bg-red-300 cursor-pointer' : ''">
      <p @click="router.push(item.route)"> {{ item.name }}</p>
    </div>
    <div class="flex justify-between items-center">
      <p class="text-[30px]">{{item.value}}</p>
      <div class="text-[12px] text-[#12B76A] bg-[#D1FADF] px-[8px] py-[6px] rounded-md flex items-center">
        <UpgradeArrow class="mr-[4px]"/>
        <p>{{ item.percentage }}</p>
      </div>
    </div>
  </CardLayout>
</template>