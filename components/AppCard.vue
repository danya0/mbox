<template>
  <div class="card" @click="$emit('click-card')">
    <app-trending-element :image="image" :title="title"/>
    <p v-if="!noTitle" class="card__title">{{ title }}</p>
  </div>
</template>

<script>
import AppTrendingElement from "~/components/Trending/AppTrendingElement";
export default {
  emits: ['click-card'],
  props: {
    title: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    noTitle: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  components: {AppTrendingElement}
}
</script>

<style lang="scss">
.card {
  cursor: pointer;
  &__title {
    text-align: center;
    font-size: 20px;
  }

  &:hover {
    .trending-element {
      box-shadow: 0 0 25px -2px #2cb0f9;
    }
  }
}
</style>
