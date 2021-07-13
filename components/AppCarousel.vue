<template>
  <vue-slick-carousel v-bind="carouselSettings">
    <!--slides-->
    <slot />

    <!--arrows-->
    <template #nextArrow>
      <img :src="nextSvg" alt="next slide" class="custom-arrow">
    </template>
    <template #prevArrow>
      <img :src="prevSvg" alt="prev slide" class="custom-arrow">
    </template>
  </vue-slick-carousel>
</template>

<script>
import VueSlickCarousel  from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import nextSvg from '~/assets/img/next-arrow.svg'
import prevSvg from '~/assets/img/prev-arrow.svg'

export default {
  data() {
    return {
      nextSvg,
      prevSvg,
      carouselSettings: {
        arrows: true,
        slidesToShow: 6,
        infinite: false,
        slidesToScroll: 1,
        responsive: [
          {
            "breakpoint": 1400,
            "settings": {
              "slidesToShow": 5,
            }
          },
          {
            "breakpoint": 1174,
            "settings": {
              "slidesToShow": 4,
            }
          },
          {
            "breakpoint": 950,
            "settings": {
              "slidesToShow": 3,
            }
          },
          {
            "breakpoint": 730,
            "settings": {
              "slidesToShow": 2,
            }
          },
          {
            "breakpoint": 515,
            "settings": {
              "slidesToShow": 1,
            }
          }
        ]
      }
    }
  },
  components: {VueSlickCarousel}
}
</script>

<style scoped>
.custom-arrow {
  height: 35px;
}
</style>
