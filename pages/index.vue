<template>
  <div class="page">
    <the-main />
    <the-trending />
    <the-genres />
    <the-actors />
    <the-banners />
    <the-footer />
  </div>
</template>

<script>
import TheMain from "~/components/Main/TheMain";
import TheTrending from "~/components/Trending/TheTrending";
import TheGenres from "~/components/Genres/TheGenres";
import TheActors from "~/components/Actors/TheActors";
import TheBanners from "~/components/Banners/TheBanners";
import TheFooter from "~/components/Footer/TheFooter";
export default {
  components: {TheBanners, TheActors, TheGenres, TheTrending, TheMain, TheFooter}
}
</script>

<style>

</style>
