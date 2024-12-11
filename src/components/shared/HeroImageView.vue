<template>
  <section class="grid grid-cols-3 w-fit gap-3 relative">
    <div v-for="(column, columnIndex) in imageColumns" :key="columnIndex" class="flex flex-col gap-3">
      <img v-for="(image, imageIndex) in column" :key="imageIndex" :src="image" alt="Gallery image"
        class="object-cover w-[150px] h-[165px] rounded-lg border border-white transform hover:scale-105 transition duration-300" />
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/images/heroimage_1.jpeg';
import image2 from '@/assets/images/heroimage_2.png';
import image3 from '@/assets/images/heroimage_3.png';
import image4 from '@/assets/images/heroimage_4.jpeg';
import image5 from '@/assets/images/heroimage_5.jpeg';
import image6 from '@/assets/images/heroimage_6.jpeg';
import image7 from '@/assets/images/heroimage_7.jpeg';
import image8 from '@/assets/images/heroimage_8.jpeg';
import image9 from '@/assets/images/heroimage_9.jpeg';
import image10 from '@/assets/images/heroimage_10.jpeg';

export default {
  name: 'HeroImageView',
  data() {
    return {
      imageColumns: [
        [
          image1,
          image2,
          image3,
        ],
        [
          image4,
          image5,
          image6,
          image7,
        ],
        [
          image8,
          image9,
          image10,
        ],
      ],

    };
  },

};
</script>
