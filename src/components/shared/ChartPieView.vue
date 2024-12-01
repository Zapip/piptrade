<template>
  <article class="bg-background dark:bg-background-dark shadow-lg rounded-lg p-4 flex flex-col gap-6 h-fit">
    <!-- Header -->
    <section class="flex justify-between items-center">
      <div class="flex items-center">
        <h2 class="text-2xl font-semibold text-t1 dark:text-t1-dark">Allocation</h2>
        <button class="ml-2 text-t1 dark:text-t1-dark" @click="showInfo = !showInfo">
          <component :is="InformationCircleIcon" class="size-6"></component>
        </button>
      </div>
    </section>

    <!-- Chart -->
    <VueApexCharts type="donut" width="100%" :options="chartOptions" :series="chartSeries" />
    <div class="flex flex-col gap-2 ">
      <div v-for="(label, index) in chartLabels" :key="index" class="flex items-center gap-2 size-full">
        <div :style="{ backgroundColor: chartOptions.colors[index] }" class="size-4 rounded-full"></div>
        <section class="flex justify-between items-center size-full ">
          <span class="text-sm">{{ label }}</span>
          <span class="font-bold text-sm">{{ chartSeries[index] }}%</span>
        </section>
      </div>
    </div>
  </article>

</template>
<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
import VueApexCharts from 'vue3-apexcharts';
import { ref } from 'vue';


const chartSeries = ref([67.54, 2.86, 8.27, 5.0, 3.87, 2.46]);

const chartLabels = ref(['BTC', 'BBCA', 'XAU/USD', 'WLD', 'PTBA', 'OTHER']);

const chartOptions = ref({
  chart: {
    type: 'pie',
    background: 'transparent',
  },
  labels: chartLabels.value,
  colors: ['#486DF7', '#16C784', '#F5B97F', '#FF775F', '#11A2BC', '#7435D4'],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    formatter: (val) => `${val}%`,
  },
  tooltip: {
    y: {
      formatter: (val) => `${val}%`,
    },
  },
});
</script>
