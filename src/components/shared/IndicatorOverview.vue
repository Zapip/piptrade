<template>
  <section class="bg-background dark:bg-background-dark w-1/4 p-4 flex flex-col rounded-xl gap-3 shadow">
    <section class="flex items-center justify-between">
      <h3 class="text-t2 dark:text-t2-dark">{{ title }}</h3>
      <span class="size-12 flex items-center justify-center rounded-lg"
        :style="{ backgroundColor: `rgba(${bgSpanColor}, 0.5)` }">
        <component :is="icon" />
      </span>
    </section>
    <section class="flex justify-between items-center">
      <h2 class="text-2xl font-semibold w-full text-t1 dark:text-t1-dark">{{ amount }}</h2>
      <button v-if="showButton">
        <PencilSquareIcon class="size-6 text-button hover:text-buttonHover" />
      </button>
    </section>
    <section class="flex justify-between">
      <section class="flex items-center gap-1" :class="profitCondition ? 'text-complete' : 'text-rejected'"
        v-if="showStatsLeft">
        <ArrowTrendingUpIcon v-if="profitCondition" class="size-4 text-complete" />
        <ArrowTrendingDownIcon v-else class="size-4 text-rejected" />
        {{ percentage }}
      </section>
      <section class="flex items-center gap-1" :class="profitCondition ? 'text-complete' : 'text-rejected'"
        v-if="showStatsRight">
        <ChevronUpIcon v-if="profitCondition" class="size-4 text-complete" />
        <ChevronDownIcon v-else class="size-4 text-rejected" />
        {{ profit }}
      </section>
    </section>
  </section>
</template>

<script>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/solid';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';


export default {
  name: 'IndicatorOverview',
  components: {
    PencilSquareIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    ChevronUpIcon,
    ChevronDownIcon,
  },
  props: {
    title: {
      type: String,
      default: 'Initial Capital',
    },
    icon: {
      type: Object,
    },
    amount: {
      type: String,
      default: 'Rp2000.000',
    },
    percentage: {
      type: String,
      default: '75.76%',
    },
    profit: {
      type: String,
      default: '+Rp200.000',
    },
    showStatsLeft: {
      type: Boolean,
      default: true,
    },
    showStatsRight: {
      type: Boolean,
      default: true,
    },
    profitCondition: {
      type: Boolean,
      default: true,
    },
    bgSpanColor: {
      type: String,
      default: '90,140,255',
    },
    showButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
