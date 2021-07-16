<template>

  <div class="page with-header">
    <div class="container">
      <div v-if="isExist && arr.length">
        <app-cards-place :place="placesArray" :card-array="arr"/>
      </div>
      <div class="center">
        <h2 v-if="errorText">{{errorText}}</h2>
        <app-button v-if="errorText" @click="$router.push('/')">Go back</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import {isExistGenre} from "~/utils/isExistGenre";
import {mapGetters} from "vuex";
import AppCardsPlace from "~/components/AppCardsPlace";
import AppButton from "~/components/AppButton";

export default {
  components: {AppButton, AppCardsPlace},
  data() {
    return {
      isExist: isExistGenre(this.$route.params.genre),
      genre: this.$route.params.genre,
      errorText: '',
      arr: [],
      placesArray: []
    }
  },
  computed: {
    ...mapGetters('library', ['getByGenre'])
  },
  mounted() {
    this.arr = this.getByGenre(this.genre)
    this.errorText = !this.isExist
      ? 'There is no such genre in our list :('
      : !this.arr.length
        ? 'There are no products in this genre :('
        : null
    this.placesArray = this.arr.map(item => item.place)
  }
}
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
}
</style>
