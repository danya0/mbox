<template>
  <div class="trending-panel">
    <app-component-link-title @link-click="$emit('link-click')">
      {{linkText}}
    </app-component-link-title>
    <div class="trending-panel-carousel">
      <vue-slick-carousel v-bind="carouselSettings">
        <!--slides-->
        <app-trending-element v-for="(obj, idx) of objectsArray" :key="idx" :title="obj.title" :image="obj.image"/>

        <!--arrows-->
        <template #nextArrow>
          <img :src="nextSvg" alt="next slide" class="custom-arrow">
        </template>
        <template #prevArrow>
          <img :src="prevSvg" alt="prev slide" class="custom-arrow">
        </template>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
import nextSvg from '~/assets/img/next-arrow.svg'
import prevSvg from '~/assets/img/prev-arrow.svg'
import AppTrendingElement from "~/components/Trending/AppTrendingElement";
import AppComponentLinkTitle from "~/components/AppComponentLinkTitle";
import VueSlickCarousel  from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {AppComponentLinkTitle, AppTrendingElement, VueSlickCarousel},
  emits: ['link-click'],
  props: {
    objectsArray: {
      type: Array,
    },
    linkText: {
      type: String,
    }
  },
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
  }
}
</script>

<style lang="scss" scoped>
.trending-panel {
  margin-bottom: 60px;
}

.custom-arrow {
  height: 35px;
}
</style>
