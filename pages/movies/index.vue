<template>
  <div class="page with-header">
    <div class="container">
      <app-cards-place place="movies" :card-array="getMovies"/>
    </div>
  </div>
</template>

<script>
import AppCardsPlace from "~/components/AppCardsPlace";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('library', ['getMovies'])
  },
  components: {AppCardsPlace}
}
</script>
