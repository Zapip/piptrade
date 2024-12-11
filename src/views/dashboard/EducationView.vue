<template>
  <article class="flex flex-col gap-4 h-screen">
    <section class="flex flex-col gap-2">
      <h1 class="text-4xl font-semibold text-t1 dark:text-t1-dark w-full">Education</h1>
      <h2 class="text-2xl text-t2 dark:text-t2-dark w-full">Watch this video to learn how to manage risks, invest, and
        trade!</h2>
    </section>
    <section class="p-6 bg-background dark:bg-background-dark rounded-3xl overflow-y-scroll h-2/3 shadow-lg">
      <div class="space-y-4 p-4">
        <router-link v-for="course in courses" :key="course.id" :to="`/education/detail-education/${course.id}`"
          class="bg-background dark:bg-background-dark rounded-lg shadow-sm overflow-hidden">
          <div class="flex space-x-4 p-4">
            <!-- Thumbnail -->
            <div class="relative flex-shrink-0">
              <img :src="course.thumbnail" :alt="course.title" class="w-48 h-32 object-cover rounded-lg" />
              <div class="absolute bottom-2 right-2 bg-black/75 text-white text-xs font-semibold px-2 py-1 rounded">
                {{ course.duration }}
              </div>
              <div v-if="course.label" class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {{ course.label }}
              </div>
            </div>

            <!-- Content -->
            <section class="flex-1 min-w-0">
              <section class="flex items-center space-x-2 mb-2">
                <span v-for="tag in course.tags" :key="tag.text" class="px-3 py-1 rounded text-xs font-medium" :class="[{
                  'bg-caption/30 text-caption': tag.type === 'Category',
                  'bg-running/30 text-running': tag.type === 'Level',
                }, {
                  'bg-complete/30 text-complete': tag.text === 'Completed',
                  'bg-rejected/30 text-rejected': tag.text === 'Not Started',
                  'bg-caption/30 text-caption': tag.text === 'On Progress',
                }]">
                  {{ tag.text }}
                </span>
              </section>

              <h3 class="text-xl font-semibold text-t1 dark:text-t1-dark mb-1">{{ course.title }}</h3>
              <p class="text-sm text-t1 dark:text-t1-dark mb-1">Author: {{ course.author }}</p>
            </section>
          </div>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import Thumbnail1 from '@/assets/images/thumbnail_1.jpg'
import Thumbnail2 from '@/assets/images/thumbnail_2.jpg'
import Thumbnail3 from '@/assets/images/thumbnail_3.jpg'
import Thumbnail4 from '@/assets/images/thumbnail_4.jpg'

const courses = ref([
  {
    id: 1,
    title: 'Money management: Use this for consistent profits',
    author: 'Andy Senjaya',
    thumbnail: Thumbnail1,
    duration: '13:00',
    tags: [
      { type: 'Category', text: 'Risk Management' },
      { type: 'Level', text: 'Basic' },
      { type: 'Status', text: 'Completed' }
    ]
  },
  {
    id: 2,
    title: 'I risk $107 to make $7,500 in Trading... This is how',
    author: 'Umar Ashraf',
    thumbnail: Thumbnail4,
    duration: '13:00',
    tags: [
      { type: 'Category', text: 'Risk Management' },
      { type: 'Level', text: 'Intermediate' },
      { type: 'Status', text: 'Not Started' }
    ]
  },
  {
    id: 3,
    title: 'Investing for Beginners - How I Make Millions from Stocks (Full Guide)',
    author: 'Mark Tilbury',
    thumbnail: Thumbnail3,
    duration: '13:00',
    tags: [
      { type: 'Category', text: 'Invest' },
      { type: 'Level', text: 'Basic' },
      { type: 'Status', text: 'On Progress' }
    ]
  },
  {
    id: 4,
    title: 'From Trading Capital of Only 5 Million to Being Able to Have 4 of Your Own Trading Companies',
    author: 'Traders Family',
    thumbnail: Thumbnail2,
    duration: '13:00',
    tags: [
      { type: 'Category', text: 'Story' },
      { type: 'Level', text: 'Basic' },
      { type: 'Status', text: 'On Progress' }
    ]
  }
])
</script>
