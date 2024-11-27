<template>
  <router-link to="signin"
    class="flex items-center text-base font-bold bg-button hover:bg-buttonHover gap-1 text-white p-2 rounded-lg">
    <ArrowDownCircleIcon class="size-4" />Masuk
  </router-link>
</template>
<script>
import { ArrowDownCircleIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    ArrowDownCircleIcon
  }

}
</script>
