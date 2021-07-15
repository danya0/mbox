<template>
  <div class="card-place">
    <app-card
      v-if="cardArray.length"
      v-for="el of cardArray"
      @click-card="goToRoute(el.id)"
      :key="el.title+Math.random()"
      :image="el.image"
      :title="el.title"
    />
    <h2 v-else>The list is empty</h2>
  </div>
</template>

<script>
import AppCard from "~/components/AppCard";
export default {
  methods: {
    goToRoute(id) {
      this.$router.push(`${this.place}/${id}`)
    }
  },
  props: {
    cardArray: {
      type: Array,
      require: true
    },
    place: {
      type: String,
      require: true
    }
  },
  components: {AppCard}
}
</script>

<style lang="scss" scoped>
.card-place {
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 20%;
    padding: 25px;

    @include grid-laptop {
      width: 33.333%;
    }
    @include grid-tablet {
      width: 50%;
    }
    @include grid-mobile {
      width: 100%;
    }
  }
}
</style>
