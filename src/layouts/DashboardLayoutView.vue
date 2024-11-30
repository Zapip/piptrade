<template>
  <main class="min-h-screen bg-fourground dark:bg-fourground-dark">
    <!-- Sidebar -->
    <aside
      class="fixed left-0 top-0 h-full bg-background dark:bg-background-dark transition-all duration-300 ease-in-out flex flex-col gap-4 pb-6"
      :class="[isCollapsed ? 'w-24' : 'w-64']">
      <section class="h-16 flex items-center justify-center">
        <HorizontalLogoView :class="[isCollapsed ? 'hidden' : 'block']" />
        <img :class="[isCollapsed ? 'block' : 'hidden']" src="@/assets/images/logo.png" alt="Logo" class="h-8" />
      </section>

      <!-- Navigation -->
      <nav class="flex flex-col gap-3">
        <router-link v-for="item in menuItems" :key="item.name" :to="item.to"
          :class="[
            'group flex gap-4 items-center text-sm font-medium rounded-md transition-colors duration-150 ease-in-out pr-5']">
          <!-- Kondisi Warna Sidebar Aktif / Non-aktif -->
          <div :class="[
            item.current ? 'bg-buttonHover' : 'bg-background dark:bg-background-dark',
            'w-2 self-stretch rounded-tr-lg rounded-br-lg transition-colors duration-150 ease-in-out'
          ]"></div>
          <span class="w-full truncate transition-opacity duration-300 p-3 flex rounded-lg gap-2 items-center"
            :class="item.current ? 'bg-buttonHover text-white' : 'text-t1 dark:text-t1-dark hover:bg-blue-50 hover:text-buttonHover dark:hover:text-buttonHover dark:hover:bg-fourground-dark'">
            <!-- Warna Icon Collapse / Non-collapse -->
            <component :is="item.icon" class="flex-shrink-0 h-5 w-5" :class="[
              item.current
                ? 'text-white '
                : isCollapsed
                  ? 'text-t1 dark:text-t1-dark'
                  : 'text-t1 group-hover:text-blue-500 dark:text-t1-dark'
            ]" aria-hidden="true" />
            <section :class="{ 'hidden': isCollapsed }">
              {{
                item.name
              }}
            </section>
          </span>
        </router-link>

      </nav>

      <router-link to="/"
        class="group flex gap-4 items-center text-sm font-medium rounded-md transition-colors duration-150 ease-in-out pr-5 mt-auto">
        <div
          class="bg-background dark:bg-background-dark w-2 self-stretch rounded-tr-lg rounded-br-lg transition-colors duration-150 ease-in-out">
        </div>
        <span
          class="w-full truncate transition-opacity duration-300 p-3 flex rounded-lg gap-2 items-center text-gray-t1 hover:bg-blue-50 hover:text-button text-t1 dark:text-t1-dark dark:hover:text-buttonHover dark:hover:bg-fourground-dark">
          <ArrowLeftEndOnRectangleIcon class="flex-shrink-0 h-5 w-5  group-hover:text-blue-500" aria-hidden="true" />
          <section :class="{ 'hidden': isCollapsed }">
            Sign Out
          </section>
        </span>
      </router-link>
    </aside>

    <!-- Main Content -->
    <div class="transition-all duration-300 ease-in-out" :class="[isCollapsed ? 'ml-16' : 'ml-64']">
      <!-- Navbar -->
      <header class="h-fit  px-9 py-2 bg-background dark:bg-background-dark flex items-center justify-between">
        <nav class="flex items-center">
          <button @click="toggleSidebar"
            class="p-2 rounded-md text-button hover:text-buttonHover hover:bg-input focus:outline-none">
            <Bars3CenterLeftIcon class="size-6" />
          </button>
        </nav>

        <!-- User Menu -->
        <section class="flex items-center gap-4">
          <DarkModeToggle />
          <div class="w-1 h-8 bg-red-50 rounded-2xl"></div>
          <section class="flex gap-2 items-center">
            <img src="@/assets/images/zapip.jpg" alt="" class="size-12 rounded-full">
            <section class="flex flex-col">
              <h1 class="font-bold text-t1 dark:text-t1-dark">{{ profilItem.name }}</h1>
              <p class="text-t2 dark:text-t2-dark">{{ profilItem.email }}</p>
            </section>
          </section>
          <ChevronDownIcon class="size-5 ml-2 text-t1 dark:text-t1-dark" />
        </section>
      </header>

      <!-- Page Content -->
      <main class="pt-6 pb-3 px-6" :class="isCollapsed ? 'px-12' : ''">
        <router-view></router-view>
      </main>
    </div>
  </main>
</template>

<script setup>
import DarkModeToggle from '@/assets/icons/DarkModeToggle.vue';
import { Bars3CenterLeftIcon } from '@heroicons/vue/24/solid';
import HorizontalLogoView from '@/assets/icons/HorizontalLogoView.vue';
import { ref } from 'vue'
import { ChartPieIcon, DocumentIcon, WalletIcon, CurrencyDollarIcon, DocumentChartBarIcon, BookOpenIcon, AcademicCapIcon, ArrowLeftEndOnRectangleIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';


const isCollapsed = ref(false)

const menuItems = [
  { name: 'Overview', to: 'fa', icon: ChartPieIcon, current: true },
  { name: 'Input Transaction Stock', to: 'fa', icon: DocumentIcon, current: false },
  { name: 'Input Transaction Crypto', to: 'fa', icon: WalletIcon, current: false },
  { name: 'Input Transaction Forex', to: 'fa', icon: CurrencyDollarIcon, current: false },
  { name: 'Running Transaction', to: 'fa', icon: DocumentChartBarIcon, current: false },
  { name: 'Journal', to: 'fa', icon: BookOpenIcon, current: false },
  { name: 'Education', to: 'fa', icon: AcademicCapIcon, current: false },
  // { name: 'Sign Out', to: '/', icon: HomeIcon, current: false },
]

const profilItem = { name: 'M. Zafif Hilmi Al-hadi', email: 'zafif3165@gmail.com' }


const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>
