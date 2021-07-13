<template>
  <div class="trending-panel">
    <app-component-link-title @link-click="$emit('link-click')">
      {{linkText}}
    </app-component-link-title>
    <div class="trending-panel-carousel">
      <app-carousel>
        <app-trending-element v-for="(obj, idx) of objectsArray" :key="idx" :title="obj.title" :image="obj.image"/>
      </app-carousel>
    </div>
  </div>
</template>

<script>
import AppTrendingElement from "~/components/Trending/AppTrendingElement";
import AppComponentLinkTitle from "~/components/AppComponentLinkTitle";
import AppCarousel from "~/components/AppCarousel";

export default {
  components: {AppComponentLinkTitle, AppTrendingElement, AppCarousel},
  emits: ['link-click'],
  props: {
    objectsArray: {
      type: Array,
    },
    linkText: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.trending-panel {
  margin-bottom: 60px;
}
</style>
