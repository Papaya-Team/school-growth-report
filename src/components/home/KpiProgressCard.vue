<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import PapayaProgress from '@/components/icons/PapayaProgress.vue'
import { defineProps } from 'vue'

const props = defineProps<{
  item: {
    name: string
    value: number
    total: number
    number: number
  }
}>()

</script>

<template>
  <CardLayout> 
    <div>
      <p>{{ item.name }}</p>
      <p class="text-orange-500"> Total Students: {{ item.total }} </p>
    </div>

    <div class="bg-green-100 rounded-xl p-[15px] flex justify-center items-center">
      <p class="font-bold text-[35px] mr-[15px]">{{ item.number }}</p>
      <template v-for="(icon, index) in item.value" :key="index" >
        <UserIcon v-if="item.name == 'Total active students'" class="mx-[6px]" />
        <PapayaProgress v-else class="mx-[6px]" />
      </template>
    </div>
  </CardLayout>
</template>