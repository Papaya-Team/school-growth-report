<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'

import BackBtn from '@/components/utils/BackBtn.vue';
import SearchItem from '@/components/utils/SearchItem.vue';
import EffectiveTimeStudent from '@/components/effective-time/EffectiveTimeStudent.vue';

import apiClient from "@/plugins/axios";
import { ref, onMounted } from "vue";

const student = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchStudentData = async () => {
  loading.value = true; 
  error.value = null;

  try {
    const response = await apiClient.get("/attendance");
    student.value = response.data;
  } catch (err) {
    error.value = "Hubo un error al obtener los datos: " + err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchStudentData);

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