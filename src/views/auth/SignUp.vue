<template>
  <article class="min-h-screen bg-fourground dark:bg-fourground-dark flex items-center justify-center p-8">
    <form @submit.prevent="handleSubmit"
      class="w-1/2 bg-background dark:bg-background-dark rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
      <button @click="$router.back()" class="flex items-center text-button hover:text-buttonHover font-bold mb-8 gap-1">
        <ArrowLeftIcon class="size-5" />
        Back
      </button>

      <section class="flex flex-col gap-4">
        <!-- Logo -->
        <section class="flex justify-center">
          <VerticalLogoView />
        </section>

        <!-- Welcome Text -->
        <p class="text-center text-t2 dark:text-t2-dark">
          Hey there! If you haven't signed up yet, no worries! Just fill out the form with your details and hit <b
            class="text-t1 dark:text-t1-dark">"Sign
            Up"</b> to get started.
        </p>
      </section>

      <section class="flex flex-col gap-3 px-6">
        <!-- Username -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Username</label>
          <div class="relative">
            <input v-model="form.username" type="text"
              class="w-full px-4 py-2 border bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter your username">
            <UserIcon class="size-5 text-primary absolute left-3 top-2.5" />
          </div>
          <p class="mt-1 text-sm text-caption">Must be unique</p>
        </section>

        <!-- Email -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Email Address</label>
          <div class="relative">
            <input v-model="form.email" type="email"
              class="w-full px-4 py-2 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter your email">
            <EnvelopeIcon class="size-5 text-primary absolute left-3 top-2.5" />
          </div>
        </section>

        <!-- Experience Level -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Investment/Trading Experience Level</label>
          <div class="relative">
            <select v-model="form.experienceLevel"
              class="w-full px-4 py-2 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10 appearance-none">
              <option value="" disabled selected>Select an option</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <ChartBarIcon class="size-5 text-primary absolute left-3 top-2.5" />
            <ChevronDownIcon class="size-5 text-primary absolute right-3 top-2.5" />
          </div>
        </section>

        <!-- Password -->
        <section>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Create a Password</label>
          <div class="relative">
            <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
              placeholder="Enter your password">
            <LockClosedIcon class="size-5 text-primary absolute left-3 top-2.5" />
            <button type="button" @click="showPassword = !showPassword"
              class="absolute right-3 top-2.5 text-primary hover:text-primary">
              <EyeIcon v-if="!showPassword" class="size-5" />
              <EyeSlashIcon v-else class="size-5" />
            </button>
          </div>
        </section>

        <!-- Confirm Password -->
        <div>
          <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Re-enter Password</label>
          <div class="relative">
            <input v-model="form.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border border-primary rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              placeholder="Re-enter your password">
            <LockClosedIcon class="size-5 text-primary absolute left-3 top-2.5" />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 top-2.5 text-primary hover:text-primary">
              <EyeIcon v-if="!showConfirmPassword" class="size-5" />
              <EyeSlashIcon v-else class="size-5" />
            </button>
          </div>
        </div>

        <!-- Terms -->
        <p class=" text-t2 dark:text-t2-dark">
          By signing up, you accept the PipTrade
          <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a> and
          <a href="#" class="text-blue-500 hover:underline">Terms of Service</a>
        </p>
      </section>

      <section class="flex flex-col gap-2 items-center">
        <!-- Submit Button -->
        <button type="submit"
          class="w-fit bg-button hover:bg-buttonHover text-white font-medium py-2 px-24 rounded-lg flex items-center justify-center">
          Sign Up
          <CursorArrowRaysIcon class="w-4 h-4 ml-2" />
        </button>
        <p class="mt-6 text-center text-t2 dark:text-t2-dark">
          Already have an account?
          <router-link to="signin" class="text-button hover:underline">Sign In</router-link>
        </p>
      </section>

    </form>
  </article>
</template>

<script setup>
import { ArrowLeftIcon, UserIcon, EnvelopeIcon, ChartBarIcon, LockClosedIcon, ChevronDownIcon, EyeIcon, EyeSlashIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/solid';
import VerticalLogoView from '@/assets/icons/VerticalLogoView.vue';
import { useRouter } from 'vue-router';

import { ref } from 'vue'

const router = useRouter()
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const form = ref({
  username: '',
  email: '',
  experienceLevel: '',
  password: '',
  confirmPassword: ''
})


const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  router.push('/dashboard')
}
</script>
