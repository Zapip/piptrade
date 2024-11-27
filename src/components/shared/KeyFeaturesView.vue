<template>
  <section v-for="(feature, index) in features" :key="index"
    class="bg-background dark:bg-background-dark flex flex-col items-center gap-6 px-6 py-12 rounded-3xl shadow-lg">
    <div class=" bg-primary text-white size-fit p-5 rounded-xl">
      <component :is="feature.icon" class="size-24" />
    </div>
    <section class="gap-2 text-center">
      <h2 class="font-bold text-2xl text-primary">{{ feature.title }}</h2>
      <p class="text-t2 dark:text-t2-dark text-base">{{ feature.description }}</p>
    </section>
  </section>
</template>
<script>
import { CalculatorIcon, BookOpenIcon, AcademicCapIcon } from '@heroicons/vue/24/outline'
export default {
  name: 'KeyFeatures',
  components: {
    CalculatorIcon, BookOpenIcon, AcademicCapIcon
  },
  data() {
    return {
      features: [
        {
          icon: 'CalculatorIcon',
          title: 'Management Calculator',
          description: 'Make informed decisions on your health investments',
        },
        {
          icon: 'BookOpenIcon',
          title: 'Journal',
          description: 'Reflect and learn from your health trading experiences',
        },
        {
          icon: 'AcademicCapIcon',
          title: 'Education',
          description: 'Expand your health knowledge for better decisions',
        },
      ],
    };
  },

}
</script>
