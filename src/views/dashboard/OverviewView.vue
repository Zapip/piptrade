<template>
  <article class="flex gap-4 flex-col w-full">
    <h1 class="text-4xl font-semibold text-t1 dark:text-t1-dark w-full">Overview</h1>
    <section class="flex gap-3">
      <!-- Looping cards -->
      <IndicatorOverview v-for="(indicator, index) in indicators" :key="index" :title="indicator.title"
        :icon="indicator.icon" :amount="indicator.amount" :percentage="indicator.percentage" :profit="indicator.profit"
        :profitCondition="indicator.profitCondition" :bgSpanColor="indicator.bgSpanColor"
        :showButton="indicator.showButton" :showStatsLeft="indicator.showStatsLeft"
        :showStatsRight="indicator.showStatsRight" />
    </section>
    <section class="flex gap-3">
      <ChartLineView class="w-full" />
      <ChartPieView class="w-1/4" />
    </section>
  </article>
</template>

<script>
import { markRaw } from 'vue';
import IndicatorOverview from '@/components/shared/IndicatorOverview.vue';
import WalletIcon from '@/assets/icons/WalletIcon.vue';
import CashIcon from '@/assets/icons/CashIcon.vue';
import ProfitIcon from '@/assets/icons/ProfitIcon.vue';
import LostIcon from '@/assets/icons/LostIcon.vue';
import ChartLineView from '@/components/shared/ChartLineView.vue';
import ChartPieView from '@/components/shared/ChartPieView.vue';


export default {

  name: 'OverviewView',
  components: {
    IndicatorOverview,
    ChartLineView,
    ChartPieView,

  },
  data() {
    return {
      indicators: [
        {
          title: 'Initial Capital',
          icon: markRaw(WalletIcon),
          amount: 'Rp20.000.000',
          percentage: '75.76%',
          profit: '+Rp200.000',
          profitCondition: true,
          bgSpanColor: '90,140,255',
          showStatsLeft: false,
          showStatsRight: false,
          showButton: true,
        },
        {
          title: 'All-time Profit',
          icon: markRaw(CashIcon),
          amount: 'Rp22.000.000',
          percentage: '75.67%',
          profit: '+Rp300.000',
          showStats: true,
          profitCondition: true,
          bgSpanColor: '34,197,94',
          showStatsRight: false,

        },
        {
          title: 'Best Performer',
          icon: markRaw(ProfitIcon),
          amount: 'BBRI',
          percentage: 'Up 87.5%',
          profit: '+Rp2000.000',
          showStats: true,
          profitCondition: true,
          bgSpanColor: '16,185,129',
        },
        {
          title: 'Worst Performer',
          icon: markRaw(LostIcon),
          amount: 'MANTA',
          percentage: 'Down 50%',
          profit: '-Rp350.000',
          showStats: true,
          profitCondition: false,
          bgSpanColor: '239,56,3',
        },
      ],
    };
  },
};
</script>
