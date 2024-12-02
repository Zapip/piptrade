<template>
  <article class="min-h-screen bg-fourground dark:bg-fourground-dark flex items-center justify-center p-8">
    <form @submit.prevent="handleEnterCode"
      class="w-1/2 bg-background dark:bg-background-dark rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
      <button @click="$router.back()" class="flex items-center text-button hover:text-buttonHover font-bold mb-8 gap-1">
        <ArrowLeftIcon class="size-5" />
        Back
      </button>

      <section class="flex flex-col gap-4">
        <!-- Logo -->
        <h1 class="text-center text-2xl font-semibold text-t1 dark:text-t1-dark">
          Password Recovery
        </h1>

        <!-- Welcome Text -->
        <p class="text-center text-t2 dark:text-t2-dark">
          A verification code has been sent to <b> zapip@gmail.com </b>
          please check your email to find it.
        </p>
      </section>

      <!-- Code Input -->
      <section class="flex justify-center gap-3">
        <input v-for="(digit, index) in code" :key="index" type="text" maxlength="1" v-model="code[index]"
          @keydown="handleKey(index, $event)"
          class="w-12 h-16 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark text-center border border-primary rounded-lg text-lg font-semibold focus:ring-2 focus:ring-button focus:outline-none" />
      </section>

      <section class="flex flex-col gap-2 items-center">
        <!-- Submit Button -->
        <button type="submit"
          class="w-fit bg-button hover:bg-buttonHover text-white font-medium py-2 px-24 rounded-lg flex items-center justify-center">
          Verify
          <CursorArrowRaysIcon class="w-4 h-4 ml-2" />
        </button>
      </section>
    </form>
  </article>
</template>

<script setup>
import { ArrowLeftIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const code = ref(new Array(6).fill(''));

const handleKey = (index, event) => {
  const key = event.key;

  if (/^[0-9]$/.test(key)) {
    code.value[index] = key;
    const nextInput = document.querySelectorAll('input')[index + 1];
    if (nextInput) nextInput.focus();
  }

  if (key === 'Enter') {
    const nextInput = document.querySelectorAll('input')[index + 1];
    if (nextInput) nextInput.focus();
  }

  if (key === 'Backspace') {
    code.value[index] = '';
    const prevInput = document.querySelectorAll('input')[index - 1];
    if (prevInput) prevInput.focus();
  }
};

const handleEnterCode = () => {
  console.log('Verification Code:', code.value.join(''));
  router.push('/forgot-password/set-new-password');
};
</script>
