<template>
  <div class="page with-header">
    <div class="container">
      <div v-if="item">
        <card-page-actor
          :title="item.title"
          :image="item.image"
          :descr="item.description"
          class="mb"
        />
        <app-trending-panel
          class="tablet-solo"
          :link-text="linkText"
          :objects-array="getAllButOne({id, actor: true})"
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
import TheFooter from "~/components/Footer/TheFooter";
import {toUpperFirst} from "~/utils/toUpperFirst";
import CardPageActor from "~/components/CardPage/CardPageActor";

export default {
  components: {CardPageActor, AppTrendingPanel, CardPage, TheFooter},
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
    ...mapGetters('library', ['getActor', 'getAllButOne']),
  },
  mounted() {
    this.item = this.getActor(this.id)
    console.log('this.item', this.item)
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
