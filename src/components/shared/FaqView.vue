<template>
  <HaflcircleDect class="absolute -left-24 z-10 " />
  <div class="w-full max-w-lg flex flex-col gap-4 relative z-20">
    <div v-for="(faq, index) in faqs" :key="index"
      class="bg-background dark:bg-background-dark rounded-2xl hover:bg-buttonHover transition  group">
      <div @click="toggle(index)" class="flex justify-between items-center p-4  duration-200">
        <section class="flex items-center gap-2">
          <img src="@/assets/images/logo_piptrade.png" alt="Logo PipTrade">
          <h3 class="text-t1 dark:text-t1-dark group-hover:text-white">{{ faq.question }}</h3>
        </section>
        <span class="text-t1 dark:text-t1-dark group-hover:text-white">
          <ChevronDownIcon v-if="isOpen(index)" class="w-5 h-5 transform transition duration-200 rotate-180" />
          <ChevronDownIcon v-else class="w-5 h-5 transform transition duration-200" />
        </span>
      </div>

      <div v-show="isOpen(index)" class="p-4 bg-gray-50 dark:bg-gray-800">
        <p class="text-gray-700 dark:text-gray-300">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import HaflcircleDect from './HaflcircleDect.vue';


export default {
  name: 'AccordionFAQ',
  components: {
    ChevronDownIcon, HaflcircleDect
  },
  data() {
    return {
      // Array FAQ data
      faqs: [
        {
          question: 'What is PipTrade?',
          answer: 'PipTrade is an all-in-one platform designed to help traders and investors manage risk, track portfolios, and learn effective trading strategies. By combining a money management calculator, a trading journal, and educational resources, PipTrade empowers users to make informed trading decisions across various financial markets, including crypto, stocks, and forex.'
        },
        {
          question: 'Who can use PipTrade?',
          answer: "PipTrade is designed for both new and experienced traders and investors. Whether you're starting out or have years of experience, PipTrade’s tools cater to different levels of knowledge, offering valuable insights and easy-to-use features for anyone looking to manage their trading risk and improve their strategies."
        },
        {
          question: 'What are the main features provided by PipTrade?',
          answer: 'PipTrade empowers traders with essential tools for informed decision-making. The Risk Management Calculator facilitates precise risk assessment for individual trades or investment positions. The Trading Journal enables comprehensive tracking and analysis of portfolio performance across various markets. Additionally, Educational Guides offer valuable trading strategies, market insights, and resources to enhance trading knowledge and skills.'
        },
        {
          question: 'How does the risk management calculator work?',
          answer: "The risk management calculator allows you to input data for your open positions (such as entry and exit points, account balance, and risk tolerance) and calculates the appropriate amount to risk per trade. This helps you make smarter trading decisions by keeping risk within manageable levels based on your goals."
        },
        {
          question: 'What are the benefits of using a trading journal?',
          answer: "A trading journal provides you with a detailed history of all your trades, making it easy to review performance, analyze patterns, and learn from past successes and mistakes. By tracking your crypto, stock, and forex trades, you can identify strengths and areas for improvement, making it a vital tool for personal growth as a trader."
        },
        {
          question: 'How do I use the educational guides on PipTrade?',
          answer: "PipTrade’s educational guides are accessible through your account dashboard. You can explore topics such as trading strategies, risk management tips, and market trends. Each guide is crafted to help you deepen your understanding of trading fundamentals and advanced techniques, making learning part of your trading journey."
        },
        {
          question: 'Is PipTrade suitable for beginner traders?',
          answer: "Absolutely! PipTrade provides beginner-friendly educational resources and intuitive tools, making it an ideal choice for those new to trading. The platform’s features help beginners understand and manage trading risks while providing guidance on building their portfolios."
        },
        {
          question: 'Does PipTrade support various financial markets?',
          answer: "Yes, PipTrade supports multiple financial markets – including crypto, stocks, and forex. This multi-market support enables users to manage a diverse portfolio, making PipTrade a flexible tool for any type of trader or investor."
        },
        {
          question: 'How do I access PipTrade?',
          answer: "Simply sign up on PipTrade’s website to create an account. Once registered, you can access all tools and resources on your dashboard, making it easy to start managing risk, tracking your trades, and learning from educational content right away."
        },
      ],
      openIndex: null
    };
  },
  methods: {
    toggle(index) {
      if (this.openIndex === index) {
        this.openIndex = null;
      } else {
        this.openIndex = index;
      }
    },
    isOpen(index) {
      return this.openIndex === index;
    }
  }
}
</script>
