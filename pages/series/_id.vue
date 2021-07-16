<template>
  <div class="page with-header">
    <div class="container">
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
        class="tablet-solo"
        :link-text="linkText"
        :objects-array="getAllButOne({id, place})"
        :place="place"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CardPage from "~/components/CardPage/CardPage";
import AppTrendingPanel from "~/components/Trending/AppTrendingPanel";
import TheFooter from "~/components/Footer/TheFooter";
import {toUpperFirst} from "~/utils/toUpperFirst";

export default {
  components: {AppTrendingPanel, CardPage, TheFooter},
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
</style>
