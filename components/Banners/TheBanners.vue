<template>
  <div class="container">
    <div class="banners">
      <the-coming-soon-banner class="banner" />
      <the-register-banner class="banner" />
    </div>
  </div>
</template>

<script>
import TheComingSoonBanner from "~/components/Banners/TheComingSoonBanner";
import TheRegisterBanner from "~/components/Banners/TheRegisterBanner";
export default {
  components: {TheRegisterBanner, TheComingSoonBanner}
}
</script>

<style lang="scss" scoped>
.banners {
  margin-top: 100px;

  .banner {
    margin-bottom: 120px;
    @include grid-mobile {
      margin-bottom: 60px;
    }
  }
}
</style>
