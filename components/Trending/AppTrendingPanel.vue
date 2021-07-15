<template>
  <div class="trending-panel">
    <app-component-link-title @link-click="$emit('link-click')">
      {{linkText}}
    </app-component-link-title>
    <div class="trending-panel-carousel">
      <app-carousel>
        <app-card
          v-for="obj of objectsArray"
          @click-card="goToPage(obj.id)"
          :key="obj.id"
          :title="obj.title"
          :image="obj.image"
          no-title
        />
      </app-carousel>
    </div>
  </div>
</template>

<script>
import AppTrendingElement from "~/components/Trending/AppTrendingElement";
import AppComponentLinkTitle from "~/components/AppComponentLinkTitle";
import AppCarousel from "~/components/AppCarousel";
import AppCard from "~/components/AppCard";

export default {
  components: {AppCard, AppComponentLinkTitle, AppTrendingElement, AppCarousel},
  emits: ['link-click'],
  props: {
    objectsArray: {
      type: Array,
    },
    linkText: {
      type: String,
    },
    place: {
      type: String
    }
  },
  methods: {
    goToPage(id) {
      this.$router.push(`${this.place}/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.trending-panel {
  margin-bottom: 60px;
}
</style>
