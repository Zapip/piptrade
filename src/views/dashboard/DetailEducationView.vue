<template>
  <article v-if="course" class="flex flex-col gap-4 h-full">
    <section class="flex flex-col gap-2 ">
      <h1 class="text-4xl font-semibold text-t1 dark:text-t1-dark w-full">{{ course.title }}</h1>
      <h2 class="text-2xl text-t2 dark:text-t2-dark w-full">By {{ course.author }}</h2>
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
    </section>
    <iframe :src="`https://www.youtube.com/embed/${course.videoId}`" allowfullscreen
      class="w-full h-screen rounded-3xl shadow-lg">
    </iframe>
    <section class="p-6 bg-background dark:bg-background-dark rounded-3xl shadow-lg text-t2 dark:text-t2-dark">
      <p>{{ course.description }}</p>
      <section class="w-full flex justify-end">

        <button
          class="flex p-2 gap-1 items-center justify-center bg-button hover:bg-buttonHover rounded-lg text-white mt-12">
          <CheckCircleIcon class="size-5" /> Mark Complete
        </button>
      </section>
    </section>
  </article>
  <p v-else>Loading...</p>
</template>


<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref } from 'vue'

const props = defineProps(['id'])
const course = ref(null)

const courses = [
  {
    id: '1',
    title: 'Money management: Use this for consistent profits',
    author: 'Andy Senjaya',
    videoId: 'P1bWwi9yyYc?si=kEK5LoOSQNeECxPD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen',
    description: 'Video ini berisi pembahasan tentang pentingnya Money Management dan Risk Management dalam trading, yang disampaikan oleh Andy Senjaya dalam Kelas Trading Si Koko Saham Hari ke-4. Ia menjelaskan bahwa kedua aspek ini sering diabaikan oleh trader pemula, meskipun lebih krusial dibandingkan analisis teknikal. Materi mencakup lima prinsip utama Risk Management, yaitu pentingnya menggunakan Stop Loss, menghindari strategi "Average Down," menetapkan minimal Risk:Reward Ratio 1:2, membatasi penurunan saham maksimal 10%, dan memastikan risiko per transaksi tidak melebihi 2% dari modal. Andy juga menekankan pentingnya disiplin, diversifikasi portofolio, dan fokus pada tujuan utama trading, yaitu profit konsisten. Dengan menerapkan prinsip-prinsip ini, trader dapat mengelola risiko dengan lebih baik dan meningkatkan peluang sukses di pasar modal.',
    tags: [
      { type: 'Category', text: 'Risk Management' },
      { type: 'Level', text: 'Basic' },
      { type: 'Status', text: 'Completed' }
    ]
  },
  {
    id: '2',
    title: 'I risk $107 to make $7,500 in Trading... This is how',
    author: 'Umar Ashraf',
    videoId: 'H98T8KASxT4?si=c88kSH_3l6K8UDTz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen',
    description: 'The YouTube video with the title "I risked $107 to make $7,500 in Trading... This is how" presents a story or tutorial about someone who managed to make a profit of $7,500 from initial capital of only $107 through trading activities. These videos may highlight specific strategies, techniques, or even tools used by the individual to achieve significant gains in a relatively short time.',
    tags: [
      { type: 'Category', text: 'Risk Management' },
      { type: 'Level', text: 'Intermediate' },
      { type: 'Status', text: 'Not Started' }
    ]
  },
  {
    id: '3',
    title: 'Investing for Beginners - How I Make Millions from Stocks (Full Guide)',
    author: 'Mark Tilbury',
    videoId: '8Ij7A1VCB7I?si=8CcahrEJOOA8DWMC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen',
    description: 'The video "Investing for Beginners - How I Made Millions from Stocks (Full Guide)" discusses the investment journey of an individual who started investing in 1985, overcoming various market challenges, including Black Monday and other major crises. Even though the market experienced a sharp decline, he kept his investments and saw a major recovery, which ultimately gave him tremendous profits. This video also explains how to start investing in a simple way, using apps such as Trading 212 to buy shares, as well as the importance of opening tax-advantaged accounts such as Stocks and Shares ISAs in the UK or Roth IRAs in America. Additionally, viewers are given practical tips on investing in indexes such as the S&P 500 which reduces risk by spreading investments across many large companies. With a smart approach, such as daily investment automation, viewers are invited to understand the power of long-term investing and how to make the right decisions to achieve maximum results.',
    tags: [
      { type: 'Category', text: 'Invest' },
      { type: 'Level', text: 'Basic' },
      { type: 'Status', text: 'On Progress' }
    ]
  },
  {
    id: '4',
    title: 'From Trading Capital of Only 5 Million to Being Able to Have 4 of Your Own Trading Companies',
    author: 'Traders Family',
    videoId: 'w83uHnyyZSk?si=4jVcXFc2qDhjn0Fb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen',
    description: 'The video "From Trading Capital of Only 5 Million to Being Able to Have 4 of Your Own Trading Companies" tells the inspiring journey of a trader who started with capital of only 5 million and succeeded in building four of his own trading companies. In this video, the speaker shares how he started trading with limited capital, faced various challenges, and learned from his mistakes to ultimately achieve great success. He explained how important risk management, proper strategy, and discipline is in following a trading plan to avoid major losses. The speaker also emphasized the importance of learning from experience, continuing to increase knowledge about the market, and maintaining a strong mentality in facing market volatility. With time and consistent effort, he was able to increase his capital, expand his portfolio, and build successful trading companies, inspiring novice traders to dare to dream big and strive hard to achieve their goals.',
    tags: [
      { type: 'Category', text: 'Risk Management' },
      { type: 'Level', text: 'Intermediate' },
      { type: 'Status', text: 'On Progress' }
    ]
  },
]

onMounted(() => {
  course.value = courses.find(c => c.id === props.id)
})
</script>
