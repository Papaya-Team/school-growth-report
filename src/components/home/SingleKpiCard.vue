<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import UpgradeArrow from '@/components/icons/UpgradeArrow.vue'
import { defineProps } from 'vue'

const props = defineProps<{
  item: {
    name: string
    value: string
    percentage: string
  }
}>()

</script>

<template>
  <CardLayout>
    <div>
      <p>{{item.name}}</p>
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