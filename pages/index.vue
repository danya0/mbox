<template>
  <div class="page">
    <the-main />
    <the-trending />
    <the-genres />
    <the-actors />
    <the-banners />
  </div>
</template>

<script>
import TheMain from "~/components/Main/TheMain";
import TheTrending from "~/components/Trending/TheTrending";
import TheGenres from "~/components/Genres/TheGenres";
import TheActors from "~/components/Actors/TheActors";
import TheBanners from "~/components/Banners/TheBanners";
export default {
  components: {TheBanners, TheActors, TheGenres, TheTrending, TheMain}
}
</script>

<style>

</style>
