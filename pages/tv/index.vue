<template>
  <div class="page with-header">
    <div class="container">
      <app-cards-place place="tv" :card-array="getTvShows"/>
    </div>
  </div>
</template>

<script>
import AppCardsPlace from "~/components/AppCardsPlace";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('library', ['getTvShows'])
  },
  components: {AppCardsPlace}
}
</script>
