<template>
  <div class="min-h-screen bg-fourground dark:bg-fourground-dark flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <div class="space-y-4">
        <h1 class="text-9xl font-extrabold text-primary">404</h1>
        <h2 class="text-4xl font-bold text-gray-900">Page Not Found</h2>
        <p class="text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      </div>
      <div class="mt-8">
        <router-link to="/"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-button hover:bg-buttonHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button transition duration-150 ease-in-out">
          <HomeIcon class="w-5 h-5 mr-2" />
          Go back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeIcon } from '@heroicons/vue/24/outline';
export default {
  name: "NotFound",
  components: {
    HomeIcon,
  },
};
</script>
