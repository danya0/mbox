<template>
  <div class="page">
    <the-main />
    <the-trending />
  </div>
</template>

<script>
import TheMain from "~/components/Main/TheMain";
import TheTrending from "~/components/Trending/TheTrending";
export default {
  components: {TheTrending, TheMain}
}
</script>

<style>

</style>
