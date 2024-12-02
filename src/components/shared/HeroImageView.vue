<template>
  <section class="grid grid-cols-3 w-fit gap-3 relative">
    <div v-for="(column, columnIndex) in imageColumns" :key="columnIndex" class="flex flex-col gap-3">
      <img v-for="(image, imageIndex) in column" :key="imageIndex" :src="image" alt="Gallery image"
        class="object-cover w-[150px] h-[165px] rounded-lg border border-white transform hover:scale-105 transition duration-300" />
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/images/HeroImage (1).jpeg';
import image2 from '@/assets/images/HeroImage (2).png';
import image3 from '@/assets/images/HeroImage (3).png';
import image4 from '@/assets/images/HeroImage (4).jpeg';
import image5 from '@/assets/images/HeroImage (5).jpeg';
import image6 from '@/assets/images/HeroImage (6).jpeg';
import image7 from '@/assets/images/HeroImage (7).jpeg';
import image8 from '@/assets/images/HeroImage (8).jpeg';
import image9 from '@/assets/images/HeroImage (9).jpeg';
import image10 from '@/assets/images/HeroImage (10).jpeg';

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
