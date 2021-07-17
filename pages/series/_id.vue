<template>
  <div class="page with-header">
    <div class="container">
      <div v-if="item">
        <card-page
          :title="item.title"
          :image="item.image"
          :type="toUpperFirst(place)"
          :age-limit="item.ageLimit"
          :rating="item.rating"
          :year="item.year"
          :descr="item.description"
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
import {mapGetters} from "vuex";
import CardPage from "~/components/CardPage/CardPage";
import AppTrendingPanel from "~/components/Trending/AppTrendingPanel";
import {toUpperFirst} from "~/utils/toUpperFirst";

export default {
  components: {AppTrendingPanel, CardPage},
  data() {
    return {
      item: {},
      toUpperFirst
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
  },
  mounted() {
    this.item = this.getFromId({id: this.id, place: this.place})
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
