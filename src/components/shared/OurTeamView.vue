<template>
  <section class="flex gap-6 justify-center">
    <section v-for="(team, index) in teams" :key="index"
      class="bg-background dark:bg-background-dark rounded-2xl shadow border-white p-6 flex items-center gap-4">
      <img :src="team.profile" alt="" class="object-cover size-20 rounded-full">
      <section class="flex flex-col items-start">
        <h2 class="text-t1 dark:text-t1-dark text-lg font-semibold">{{ team.name }}</h2>
        <p class="text-t2 dark:text-t2-dark">{{ team.role }}</p>
      </section>
    </section>
  </section>
</template>
<script>
import zapip from '@/assets/images/Zapip.jpg';
import chatgpt from '@/assets/images/chatgpt.png';
import gemini from '@/assets/images/gemini.png';
export default {
  name: 'OurTeamView',
  data() {
    return {
      teams: [
        {
          profile: zapip,
          name: 'M. Zafif Hilmi Al-hadi',
          role: 'Chief Executive Officer'
        },
        {
          profile: gemini,
          name: 'Gemini',
          role: 'Chief Experience Officer'
        },
        {
          profile: chatgpt,
          name: 'ChatGPT',
          role: 'Chief Technology Officer'
        },
      ]
    }
  }

}
</script>
