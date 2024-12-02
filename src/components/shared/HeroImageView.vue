<template>
  <section class="grid grid-cols-3 w-fit gap-3 relative">
    <div v-for="(column, columnIndex) in imageColumns" :key="columnIndex" class="flex flex-col gap-3">
      <img v-for="(image, imageIndex) in column" :key="imageIndex" :src="image" alt="Gallery image"
        class="object-cover w-[150px] h-[165px] rounded-lg border border-white transform hover:scale-105 transition duration-300" />
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/images/HeroImage1.jpeg';
import image2 from '@/assets/images/HeroImage2.png';
import image3 from '@/assets/images/HeroImage3.png';
import image4 from '@/assets/images/HeroImage4.jpeg';
import image5 from '@/assets/images/HeroImage5.jpeg';
import image6 from '@/assets/images/HeroImage6.jpeg';
import image7 from '@/assets/images/HeroImage7.jpeg';
import image8 from '@/assets/images/HeroImage8.jpeg';
import image9 from '@/assets/images/HeroImage9.jpeg';
import image10 from '@/assets/images/HeroImage10.jpeg';

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
