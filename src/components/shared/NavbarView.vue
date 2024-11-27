<template>

  <header class="bg-background dark:bg-background-dark flex items-center py-4 justify-between px-[104px]">
    <HorizontalLogoView />
    <nav>
      <ul class="flex gap-9 text-t1 dark:text-t1-dark">
        <router-link to="#home" class="flex gap-1 items-center hover:text-primary">
          <HomeIcon class="size-4" />Home
        </router-link>
        <router-link to="#key-features" class="flex gap-1 items-center hover:text-primary">
          <StarIcon class="size-4" />Key Features
        </router-link>
        <router-link to="#faq" class=" flex gap-1 items-center hover:text-primary">
          <QuestionMarkCircleIcon class="size-4" />
          FAQ
        </router-link>
        <router-link to="#our-team" class="flex gap-1 items-center hover:text-primary">
          <UsersIcon class="size-4" /> Our Team
        </router-link>
      </ul>
    </nav>

    <section class="flex gap-4 items-center">
      <DarkModeToggle />
      <span class="h-[35px] w-[3px] bg-input rounded-2xl"></span>
      <ButtonView />
    </section>
  </header>
</template>
<script>
import ButtonView from '@/components/shared/ButtonView.vue';
import HorizontalLogoView from '@/assets/icons/HorizontalLogoView.vue';
import { HomeIcon, StarIcon, QuestionMarkCircleIcon, UsersIcon } from '@heroicons/vue/24/solid';
import DarkModeToggle from '@/assets/icons/DarkModeToggle.vue';

export default {
  name: 'NavbarView',
  components: {
    ButtonView, HorizontalLogoView, HomeIcon, StarIcon, QuestionMarkCircleIcon, UsersIcon, DarkModeToggle
  },

}
</script>
