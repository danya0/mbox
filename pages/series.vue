<template>
  <div class="page with-header">
    <div class="container">
      <app-cards-place place="series" :card-array="getSeries"/>
    </div>
  </div>
</template>

<script>
import AppCardsPlace from "~/components/AppCardsPlace";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('library', ['getSeries'])
  },
  components: {AppCardsPlace}
}
</script>
