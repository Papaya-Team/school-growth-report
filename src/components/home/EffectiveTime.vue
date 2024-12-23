<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import TableEffectiveTime from '@/components/home/TableEffectiveTime.vue';


</script>

<template>
  <CardLayout>
    <div>
      <p>Effective Time by Time Frame</p>
    </div>

    <div class="">
      <div>
        <p class="text-orange-500">ELA</p>
      </div>
      <div class="flex items-center">
        <div class="p-[10px] mr-[30px]">
          <p>Effective Time</p>
          <p class="text-[40px] text-yellow-400">69%</p>
        </div>

        <TableEffectiveTime />
        
      </div>
    </div>

    <div class="">
      <div>
        <p class="text-orange-500">Math</p>
      </div>
      <div class="flex items-center">
        <div class="p-[10px] mr-[30px]">
          <p>Effective Time</p>
          <p class="text-[40px] text-yellow-400">69%</p>
        </div>
        <table class="bg-indigo-950 border-spacing-4 border-separate rounded-xl w-full">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Time Frame</th>
              <th>Effective Time</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TBD</td>
              <td>1:10 pm - 1:55 pm</td>
              <td>66%</td>
              <td>86%</td>
            </tr>
            <tr>
              <td>TBD</td>
              <td>2:00 pm - 2:45 pm</td>
              <td>80%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </CardLayout>
</template>

<style>
table th,
table td {
  @apply px-[20px] py-[5px] m-[10px] text-white rounded-lg
}

table td {
  @apply bg-white bg-opacity-20
}
</style>