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
    SunIcon,
    MoonIcon,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // Cek preferensi dark mode di localStorage
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true" || (!savedDarkMode && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      this.isDarkMode = true;
      document.body.classList.add("dark");
    } else {
      this.isDarkMode = false;
      document.body.classList.remove("dark");
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;

      if (this.isDarkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "true"); // Simpan preferensi ke localStorage
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "false"); // Simpan preferensi ke localStorage
      }
    },
  },
};
</script>
