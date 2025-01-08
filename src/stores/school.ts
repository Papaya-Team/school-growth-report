import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSchoolStore = defineStore('school', () => {
  const school = ref('elementary')
  // const doubleCount = computed(() => school.value * 2)
  function setSchool(value:string) {
    school.value = value
  }

  return { school, setSchool, }
})
