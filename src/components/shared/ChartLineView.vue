<template>
  <article class="bg-background dark:bg-background-dark shadow-lg rounded-lg p-4 h-full">
    <!-- Header -->
    <section class="flex justify-between items-center">
      <div class="flex items-center">
        <h2 class="text-2xl font-semibold text-t1 dark:text-t1-dark">History</h2>
        <button class="ml-2 text-t1 dark:text-t1-dark" @click="togglePopover">
          <component :is="InformationCircleIcon" class="size-6"></component>
        </button>
      </div>
      <!-- Filter Buttons -->
      <section class="flex gap-2">
        <button v-for="filter in filters" :key="filter.label" @click="changeFilter(filter.value)" :class="[
          'px-4 py-2 rounded-lg text-sm text-t1 font-bold',
          selectedFilter === filter.value
            ? 'bg-buttonHover text-white'
            : 'bg-input text-t1',
        ]">
          {{ filter.label }}
        </button>
      </section>
    </section>

    <!-- Chart -->
    <VueApexCharts type="area" :options="chartOptions" :series="chartSeries" height="145.9%" width="100%"
      class="px-4 py-6" />
    <section v-if="showInfo"
      class="absolute inset-4 size-fit bg-background dark:bg-background-dark border border-gray-300 shadow-lg rounded-lg p-4 w-48 mt-2 z-10 transition-all transform duration-300 ease-in-out opacity-100">
      <p class="text-t1 dark:text-t1-dark">
        This section displays the history of data or events. It helps you track and review past trends.
      </p>
    </section>

  </article>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
import VueApexCharts from 'vue3-apexcharts';
import { ref } from 'vue';

const showInfo = ref(false);

const togglePopover = () => {
  showInfo.value = !showInfo.value;
};

const filters = ref([
  { label: '24h', value: '24h' },
  { label: '7d', value: '7d' },
  { label: '30d', value: '30d' },
  { label: '90d', value: '90d' },
  { label: 'All', value: 'all' },
]);

const selectedFilter = ref('24h');

const dataByFilter = {
  '24h': [
    { x: '4:00 PM', y: 16000000 },
    { x: '8:00 PM', y: 18000000 },
    { x: '12:00 AM', y: 20000000 },
    { x: '4:00 AM', y: 17000000 },
    { x: '8:00 AM', y: 21000000 },
  ],
  '7d': [
    { x: 'Day 1', y: 17000000 },
    { x: 'Day 2', y: 18500000 },
    { x: 'Day 3', y: 20000000 },
    { x: 'Day 4', y: 21000000 },
    { x: 'Day 5', y: 22000000 },
  ],
  '30d': [
    { x: 'Week 1', y: 16000000 },
    { x: 'Week 2', y: 18000000 },
    { x: 'Week 3', y: 19000000 },
    { x: 'Week 4', y: 20000000 },
  ],
  '90d': [
    { x: 'Month 1', y: 17000000 },
    { x: 'Month 2', y: 20000000 },
    { x: 'Month 3', y: 21000000 },
  ],
  all: [
    { x: 'Jan', y: 16000000 },
    { x: 'Feb', y: 19000000 },
    { x: 'Mar', y: 18000000 },
    { x: 'Apr', y: 22000000 },
  ],
};



const chartSeries = ref([{ name: 'History', data: dataByFilter['24h'] }]);

const chartOptions = ref({
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
    colors: ['#00B69B'],
  },
  dataLabels: { enabled: false },
  fill: {
    type: 'gradient',
    gradient: {
      // shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      colorStops: [
        {
          offset: 0,
          color: '#00B69B',
          opacity: 0.5,
        },
        {
          offset: 50,
          color: '#00B69B',
          opacity: 0.3,
        },
        {
          offset: 100,
          color: '#00B69B',
          opacity: 0.05,
        },
      ],
      stops: [0, 50, 100],
    },
  },
  xaxis: {
    type: 'category',
    labels: {
      style: {
        fontSize: '12px',
        fontFamily: 'Urbanist, sans-serif',
        colors: '#606060',
      },
    },
  },
  yaxis: {
    tickAmount: 5,
    opposite: true,
    labels: {
      formatter: (val) => `Rp${val.toLocaleString()}`,
      style: {
        fontSize: '12px',
        fontFamily: 'Urbanist, sans-serif',
        colors: '#606060',

      },
    },
  },
  grid: {
    borderColor: 'rgba(96, 96, 96, 0.3)',
  },
  tooltip: {
    y: {
      formatter: (val) => `Rp${val.toLocaleString()}`,
    },
  },
});

function changeFilter(filter) {
  selectedFilter.value = filter;
  chartSeries.value = [{ name: 'History', data: dataByFilter[filter] }];
}
</script>
