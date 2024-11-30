<template>
  <article class="min-h-screen bg-fourground dark:bg-fourground-dark flex items-center justify-center p-8">
    <form @submit.prevent="handleSignIn"
      class="w-1/2 bg-background dark:bg-background-dark rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
      <button @click="$router.back()" class="flex items-center text-button hover:text-buttonHover font-bold mb-8 gap-1">
        <ArrowLeftIcon class="size-5" />
        Back
      </button>

      <section class="flex flex-col gap-4 ">
        <!-- Logo -->
        <section class="flex justify-center">
          <VerticalLogoView />
        </section>

        <!-- Welcome Text -->
        <p class="text-center text-t2 dark:text-t2-dark">
          Hey there! Just pop in your email to log into your account.
        </p>
      </section>

      <section class="flex flex-col gap-3 px-6">
        <!-- Email/Username -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Username/Email</label>
          <div class="relative">
            <input v-model="form.emailOrUsername" type="text"
              class="w-full px-4 py-2 border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter your email address or username">
            <UserIcon class="size-5 text-primary absolute left-3 top-2.5" />
          </div>
        </section>

        <!-- Password -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Password</label>
          <div class="relative">
            <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter your password">
            <LockClosedIcon class="size-5 text-primary absolute left-3 top-2.5" />
            <button type="button" @click="showPassword = !showPassword"
              class="absolute right-3 top-2.5 text-primary hover:text-primary">
              <EyeIcon v-if="!showPassword" class="size-5" />
              <EyeSlashIcon v-else class="size-5" />
            </button>
          </div>
          <p class="mt-2 text-right">
            <router-link to="/forgot-password" class="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </router-link>
          </p>
        </section>
      </section>

      <section class="flex flex-col gap-2 items-center">
        <!-- Submit Button -->
        <button type="submit"
          class="w-fit bg-button hover:bg-buttonHover text-white font-medium py-2 px-24 rounded-lg flex items-center justify-center">
          Sign In
          <CursorArrowRaysIcon class="w-4 h-4 ml-2" />
        </button>
        <p class="mt-6 text-center text-t2 dark:text-t2-dark">
          Don’t have an account?
          <router-link to="signup" class="text-button hover:underline">Sign Up</router-link>
        </p>
      </section>

    </form>
  </article>
</template>

<script setup>
import { ArrowLeftIcon, UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/solid';
import VerticalLogoView from '@/assets/icons/VerticalLogoView.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
import { ref } from 'vue';

const showPassword = ref(false);

const form = ref({
  emailOrUsername: '',
  password: ''
});

const handleSignIn = () => {
  console.log('Sign In Form submitted:', form.value);
  router.push('/dashboard');
};
</script>
