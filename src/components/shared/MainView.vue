<template>
  <main class="size-full bg-fourground dark:bg-fourground-dark px-[104px]">
    <article id="home" class="h-screen bg-fourground dark:bg-fourground-dark flex items-center justify-between">
      <section class="flex flex-col w-1/2 gap-4 pr-36">
        <section class=" flex flex-col gap-3">
          <h1 class="text-primary text-4xl font-semibold">{{ content.slogan }}</h1>
          <p class="text-t1 dark:text-t1-dark text-base font-normal">{{ content.description }}</p>

        </section>
        <section class="flex gap-1 ">
          <router-link to="/signup"
            class="size-full  flex justify-center rounded-lg p-2 gap-1 items-center bg-button hover:bg-buttonHover text-white font-bold">
            <ChevronRightIcon class="size-4" /> Daftar
          </router-link>
          <router-link to="/user-guide"
            class="size-2/3 flex rounded-lg p-2 justify-center gap-1 items-center outline outline-1 outline-button text-button font-bold">
            <BookOpenIcon class="size-4" /> User Guide
          </router-link>
        </section>
      </section>
      <HeroImageView />
    </article>
    <article id="key-features"
      class="h-screen bg-fourground dark:bg-fourground-dark flex flex-col justify-center items-center gap-6">
      <h1 class="text-7xl font-bold text-primary">Key Features</h1>
      <!-- card -->
      <section class="flex gap-6 py-6">
        <KeyFeaturesView />
      </section>

    </article>
    <article id="faq" class="h-full bg-fourground dark:bg-fourground-dark flex justify-between items-center">
      <h1 class="text-7xl font-bold text-primary size-fit">Frequently Asked Questions</h1>
      <FaqView />
    </article>

    <article id="our-team" class="h-screen flex flex-col gap-6 items-center p-6 justify-center">
      <section class="flex flex-col gap-2 text-center">
        <h1 class="text-7xl font-bold text-primary">Our Team</h1>
        <p class="text-xl text-t1 dark:text-t1-dark">Great team behind the quality content we make.</p>
      </section>
      <OurTeamView />
    </article>
  </main>
</template>

<script>
import { ChevronRightIcon, BookOpenIcon } from '@heroicons/vue/24/solid';
import KeyFeaturesView from './KeyFeaturesView.vue';
import HeroImageView from './HeroImageView.vue';
import FaqView from './FaqView.vue';
import OurTeamView from './OurTeamView.vue';

export default {
  name: 'MainView',
  components: {
    ChevronRightIcon, BookOpenIcon, KeyFeaturesView, HeroImageView, FaqView, OurTeamView
  },
  data() {
    return {
      content: {
        slogan: "Stay safe with Piptrade, Your Calculator and Journal Trading 📊",
        description:
          "Easily monitor your crypto, stock, and forex portfolios, make informed decisions, and grow your skills along the way.",
      },
    };
  },
};
</script>
