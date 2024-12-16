<script lang="ts" setup>
import CardLayout from '@/layouts/CardLayout.vue'
import CurrentState from '@/components/home/accountability/CurrentState.vue'

</script>

<template>
  <CardLayout class="flex gap-[20px]">
    <section style="width: 60%;">
      <div>
        <p class="text-[20px]">Your current state vs Your future state</p>
        <p class="text-[#666666] text-[12px]"> STAAR Test Data 2023 </p>
      </div>
      <div class="grid grid-cols-2 gap-[20px]">
        <div>
          <div class="bg-blue-950 py-[5px] rounded-md mt-[20px]">
            <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">Math</span> 14 students
            </p>
          </div>

          <div class="grid grid-cols-2">
            <CurrentState :title="'Current state'" />
            <CurrentState :title="'Projected future'" />
          </div>

        </div>

        <div>
          <div class="bg-[#F04438] py-[5px] rounded-md mt-[20px]">
            <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">ELA</span> 14 students</p>
          </div>

          <div class="grid grid-cols-2">
            <CurrentState :title="'Current state'" />
            <CurrentState :title="'Projected future'" />
          </div>

        </div>
      </div>
    </section>

    <section style="width: 40%;">
      <div>
        <p class="text-[20px]">Your goal</p>
        <p class="text-[#666666] text-[12px]"> STAAR Test Data 2023 </p>
      </div>
      <div class="grid grid-cols-2 gap-[20px]">
        <div>
          <div class="bg-blue-950 py-[5px] rounded-md mt-[20px]">
            <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">Math</span> 14 students
            </p>
          </div>

          <div class="grid grid-cols-2">
            <CurrentState :title="'Current state'" />
            <CurrentState :title="'Projected future'" />
          </div>

        </div>

        <div>
          <div class="bg-[#F04438] py-[5px] rounded-md mt-[20px]">
            <p class="text-white text-center text-[14px]"><span class="font-bold text-[16px]">ELA</span> 14 students</p>
          </div>

          <div class="grid grid-cols-2">
            <CurrentState :title="'Current state'" />
            <CurrentState :title="'Projected future'" />
          </div>

        </div>
      </div>
    </section>
  </CardLayout>
</template>