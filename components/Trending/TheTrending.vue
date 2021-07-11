<template>
  <div class="container">
    <div class="trending">
      <app-trending-panel
        linkText="Trending TV Shows"
        :objects-array="library.tvShows"
        @link-click="$router.push('/tv')"
      />
      <app-trending-panel
        linkText="Trending Movies"
        :objects-array="library.movies"
        @link-click="$router.push('/movies')"
      />
      <app-button class="see-more-button" v-if="!more" @click="more = true">See more</app-button>
      <app-trending-panel
        class="m0"
        v-else
        linkText="Trending Series"
        :objects-array="library.series"
        @link-click="$router.push('/series')"
      />
    </div>
  </div>
</template>

<script>
import AppTrendingPanel from "~/components/Trending/AppTrendingPanel";
import {mapState} from "vuex";
import AppButton from "~/components/AppButton";

export default {
  data: () => ({
    more: false
  }),
  computed: {
    ...mapState('library', ['library'])
  },
  components: {AppButton, AppTrendingPanel},
}
</script>

<style lang="scss" scoped>
.see-more-button {
  margin-top: -20px;
}
.m0 {
  margin: 0;
}

.trending {
  padding-top: 70px;
  padding-bottom: 80px;
  position: relative;

  // top line
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #2F2E2E;
  }
}
</style>
