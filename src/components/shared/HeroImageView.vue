<template>
  <section class="grid grid-cols-3 w-fit gap-3 relative">
    <div v-for="(column, columnIndex) in imageColumns" :key="columnIndex" class="flex flex-col gap-3">
      <img v-for="(image, imageIndex) in column" :key="imageIndex" :src="image" alt="Gallery image"
        class="object-cover w-[150px] h-[165px] rounded-lg border border-white transform hover:scale-105 transition duration-300" />
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/images/1.jpg';

export default {
  name: 'HeroImageView',
  data() {
    return {
      imageColumns: [
        [
          image1,
          image1,
          image1,
        ],
        [
          image1,
          image1,
          image1,
          image1,
        ],
        [
          image1,
          image1,
          image1,
        ],
      ],

    };
  },

};
</script>
