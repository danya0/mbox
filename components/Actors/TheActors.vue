<template>
  <div class="container">
    <div class="actors">
      <app-component-link-title @link-click="$router.push('/actors')">
        Popular Actors & Directors
      </app-component-link-title>
      <app-carousel>
        <app-actor v-for="act of actors" :key="act.name" :name="act.name" :link="act.id" :image="act.image"/>
      </app-carousel>
    </div>
  </div>
</template>

<script>
import AppComponentLinkTitle from "~/components/AppComponentLinkTitle";
import AppCarousel from "~/components/AppCarousel";
import AppActor from "~/components/Actors/AppActor";
import {mapState} from "vuex";
export default {
  components: {AppActor, AppComponentLinkTitle, AppCarousel},
  computed: {...mapState('library', ['actors'])}
}
</script>

<style lang="scss" scoped>
.actors {
  padding-top: 70px;
}
</style>
