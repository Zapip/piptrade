<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <!-- Back Button -->
      <a href="#" class="inline-flex items-center text-blue-500 mb-8">
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back
      </a>

      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <div class="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <ArrowUpRight class="w-8 h-8 text-white transform rotate-45" />
        </div>
      </div>

      <!-- Brand Name -->
      <h1 class="text-center text-xl font-semibold mb-4">PipTrade</h1>

      <!-- Welcome Text -->
      <p class="text-center text-gray-600 mb-8">
        Hey there! If you haven't signed up yet, no worries! Just fill out the form with your details and hit "Sign Up"
        to get started.
      </p>

      <!-- Signup Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Username -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <div class="relative">
            <input v-model="form.username" type="text"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              placeholder="Enter your username">
            <User class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <p class="mt-1 text-sm text-gray-500">Must be unique</p>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <div class="relative">
            <input v-model="form.email" type="email"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              placeholder="Enter your email">
            <Mail class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <!-- Experience Level -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Investment/Trading Experience Level</label>
          <div class="relative">
            <select v-model="form.experienceLevel"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10 appearance-none">
              <option value="" disabled selected>Select an option...</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <LineChart class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            <ChevronDown class="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
          </div>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Create a Password</label>
          <div class="relative">
            <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              placeholder="Enter your password">
            <Lock class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            <button type="button" @click="showPassword = !showPassword"
              class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
              <Eye v-if="!showPassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Re-enter Password</label>
          <div class="relative">
            <input v-model="form.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              placeholder="Re-enter your password">
            <Lock class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
              <Eye v-if="!showConfirmPassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Terms -->
        <p class="text-sm text-gray-600">
          By signing up, you accept the PipTrade
          <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a> and
          <a href="#" class="text-blue-500 hover:underline">Terms of Service</a>
        </p>

        <!-- Submit Button -->
        <button type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center">
          Sign Up
          <Sparkles class="w-4 h-4 ml-2" />
        </button>
      </form>

      <!-- Sign In Link -->
      <p class="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <a href="#" class="text-blue-500 hover:underline"> <router-link to="signin">Sign in</router-link></a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   User,
//   Mail,
//   LineChart,
//   ChevronDown,
//   Lock,
//   Eye,
//   EyeOff,
//   Sparkles
// } from 'lucide-vue-next'

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
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>
