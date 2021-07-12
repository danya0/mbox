<template>
  <div class="page">
    <the-main />
    <the-trending />
    <the-genres />
  </div>
</template>

<script>
import TheMain from "~/components/Main/TheMain";
import TheTrending from "~/components/Trending/TheTrending";
import TheGenres from "~/components/Genres/TheGenres";
export default {
  components: {TheGenres, TheTrending, TheMain}
}
</script>

<style>

</style>
