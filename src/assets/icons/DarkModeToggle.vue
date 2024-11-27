<template>
  <button @click="toggleDarkMode" class="p-2 text-t1 dark:text-t1-dark transition">
    <span v-if="isDarkMode">
      <SunIcon class="size-5" />
    </span>
    <span v-else>
      <MoonIcon class="size-5" />
    </span>
  </button>
</template>

<script>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    SunIcon, MoonIcon
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    this.isDarkMode = document.body.classList.contains("dark");
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;

      if (this.isDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
  },
};
</script>
