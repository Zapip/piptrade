<template>
  <article class="min-h-screen bg-fourground dark:bg-fourground-dark flex items-center justify-center p-8">
    <form @submit.prevent="handleSetNewPassword"
      class="w-1/2 bg-background dark:bg-background-dark rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
      <button @click="$router.back()" class="flex items-center text-button hover:text-buttonHover font-bold mb-8 gap-1">
        <ArrowLeftIcon class="size-5" />
        Back
      </button>

      <section class="flex flex-col gap-4">
        <!-- Logo -->
        <h1 class="text-center text-2xl font-semibold text-t1 dark:text-t1-dark">
          Set New Password
        </h1>

        <!-- Welcome Text -->
        <p class="text-center text-t2 dark:text-t2-dark">
          Your password should be a minimum of 8 characters and must contain a combination of letters, numbers, and
          special symbols.
        </p>
      </section>

      <section class="flex flex-col gap-3 px-6">
        <!-- Password -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">New Password</label>
          <div class="relative">
            <input v-model="NewPassword" :type="showPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter new password">
            <LockClosedIcon class="size-5 text-primary absolute left-3 top-2.5" />
            <button type="button" @click="showPassword = !showPassword"
              class="absolute right-3 top-2.5 text-primary hover:text-primary">
              <EyeIcon v-if="!showPassword" class="size-5" />
              <EyeSlashIcon v-else class="size-5" />
            </button>
          </div>
        </section>
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Confirm Password</label>
          <div class="relative">
            <input v-model="ConfirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter your new password again here">
            <LockClosedIcon class="size-5 text-primary absolute left-3 top-2.5" />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 top-2.5 text-primary hover:text-primary">
              <EyeIcon v-if="!showConfirmPassword" class="size-5" />
              <EyeSlashIcon v-else class="size-5" />
            </button>
          </div>
        </section>
      </section>

      <section class="flex flex-col gap-2 items-center">
        <!-- Submit Button -->
        <button type="submit"
          class="w-fit bg-button hover:bg-buttonHover text-white font-medium py-2 px-24 rounded-lg flex items-center justify-center">
          Reset Your Password
          <CursorArrowRaysIcon class="w-4 h-4 ml-2" />
        </button>
      </section>
    </form>
  </article>
</template>

<script setup>
import { ArrowLeftIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const NewPassword = ref('');
const ConfirmPassword = ref('');

const handleSetNewPassword = () => {
  console.log('New password set:', NewPassword.value, ConfirmPassword.value);
  router.push('/signin');
};
</script>
