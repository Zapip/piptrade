<template>
  <article class="min-h-screen bg-fourground dark:bg-fourground-dark flex items-center justify-center p-8">
    <form @submit.prevent="handleForgotPassword"
      class="w-1/2 bg-background dark:bg-background-dark rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
      <button @click="$router.back()" class="flex items-center text-button hover:text-buttonHover font-bold mb-8 gap-1">
        <ArrowLeftIcon class="size-5" />
        Back
      </button>

      <section class="flex flex-col gap-4">
        <h1 class="text-center text-2xl font-semibold text-t1 dark:text-t1-dark">
          Forgot Your Password?
        </h1>

        <!-- Welcome Text -->
        <p class="text-center text-t2 dark:text-t2-dark">
          Please enter your email address associated with your account to reset your password.
        </p>
      </section>

      <section class="flex flex-col gap-3 px-6">
        <!-- Email -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Email</label>
          <div class="relative">
            <input v-model="email" type="email"
              class="w-full px-4 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark py-2 border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter your email">
            <UserIcon class="size-5 text-primary absolute left-3 top-2.5" />
          </div>
        </section>
      </section>

      <section class="flex flex-col gap-2 items-center">
        <!-- Submit Button -->
        <button type="submit"
          class="w-fit bg-button hover:bg-buttonHover text-white font-medium py-2 px-24 rounded-lg flex items-center justify-center">
          Next
          <CursorArrowRaysIcon class="w-4 h-4 ml-2" />
        </button>
      </section>
    </form>
  </article>
</template>

<script setup>
import { ArrowLeftIcon, UserIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import { CursorArrowRaysIcon } from '@heroicons/vue/24/solid';
import { useRouter } from 'vue-router';

const email = ref('');
const router = useRouter();

const handleForgotPassword = () => {
  console.log('Reset code sent to:', email.value);
  router.push('/forgot-password/enter-code');
};
</script>
