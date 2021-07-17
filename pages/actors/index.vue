<template>
  <div class="page with-header">
    <div class="container">
      <app-cards-place place="actors" :card-array="getActors"/>
    </div>
  </div>
</template>

<script>
import AppCardsPlace from "~/components/AppCardsPlace";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('library', ['getActors'])
  },
  components: {AppCardsPlace}
}
</script>
