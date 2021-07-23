<template>
  <div class="page with-header">
    <div class="container">
      <div v-if="item">
        <card-page
          :item="item"
          :place="place"
          class="mb"
        />
        <app-trending-panel
          :link-text="linkText"
          :objects-array="getAllButOne({id, place})"
          :place="place"
        />
      </div>
      <p class="warn" v-else>There is no product with this ID</p>
    </div>
  </div>
</template>

<script>
import CardPage from "~/components/CardPage/CardPage";
import AppTrendingPanel from "~/components/Trending/AppTrendingPanel";
import {toUpperFirst} from "~/utils/toUpperFirst";
import {mapGetters} from "vuex";
export default {
  components: {AppTrendingPanel, CardPage},
  async fetch() {
    this.item = await this.getFromId({id: this.id, place: this.place})
    this.upperPlace = await toUpperFirst(this.place)
  },
  data() {
    return {
      item: {},
      upperPlace: ''
    }
  },
  computed: {
    id() {
      return +this.$route.params.id
    },
    place() {
      return this.$route.fullPath.split('/')[1]
    },
    linkText() {
      return `Watch other ${toUpperFirst(this.place)}`
    },
    ...mapGetters('library', ['getFromId', 'getAllButOne']),
  }
}
</script>

<style scoped>
.mb {
  margin-bottom: 50px;
}

.warn {
  margin-top: 20px;
  font-size: 32px;
  text-align: center;
}
</style>
