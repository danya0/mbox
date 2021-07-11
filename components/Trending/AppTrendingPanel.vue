<template>
  <div class="trending-panel">
    <app-component-link-title @link-click="$emit('link-click')">
      {{linkText}}
    </app-component-link-title>
    <div class="trending-panel-carousel">
      <client-only>
        <carousel
          :per-page-custom="[[150, 1], [570, 2], [750, 3], [950, 4], [1174, 5], [1400, 6]]"
          navigation-enabled
          :navigation-next-label="nextLabel"
          :navigation-prev-label="prevLabel"
          :pagination-enabled="false"
        >
          <slide v-for="(obj, index) of objectsArray" :key="index">
            <app-trending-element :title="obj.title" :image="obj.image"/>
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import nextSvg from '~/assets/img/next-arrow.svg'
import prevSvg from '~/assets/img/prev-arrow.svg'
import AppTrendingElement from "~/components/Trending/AppTrendingElement";
import AppComponentLinkTitle from "~/components/AppComponentLinkTitle";

export default {
  components: {AppComponentLinkTitle, AppTrendingElement},
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
      nextLabel: `<img src='${nextSvg}' />`,
      prevLabel: `<img src='${prevSvg}' />`
    }
  }
}
</script>

<style lang="scss" scoped>
.trending-panel {
  margin-top: 60px;
}

</style>
