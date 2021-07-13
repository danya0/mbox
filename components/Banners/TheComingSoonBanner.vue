<template>
  <div class="coming-soon">
    <div class="coming-soon-block image"></div>
    <div class="coming-soon-block text">
      <img :src="img2021" alt="2021" class="text__image">
      <div class="text__text">Coming Soon...</div>
    </div>
  </div>
</template>

<script>
import img2021 from '~/assets/img/banners/2021.png'
export default {
  data() {
    return {
      img2021
    }
  }
}
</script>

<style lang="scss" scoped>
.coming-soon {
  background: linear-gradient(87.02deg, #0D1A73 29.67%, #000000 70.52%);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  height: 340px;
  overflow: hidden;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 0 35px rgba(255, 255, 255, 0.3);
  }

  &-block {
    flex: 1;
  }

  .image {
    background: url('~assets/img/banners/bbb.png') no-repeat center / cover;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;

    &__img {
      margin-bottom: 20px;
    }

    &__text {
      font-weight: bold;
      font-size: 64px;
      text-transform: capitalize;
    }
  }

  @include grid-tablet {
    flex-direction: column;
    height: 460px;
    .text__text {
      font-size: 45px;
    }
  }
  @include grid-mobile {
    .text__image {
      height: 120px;
      margin-bottom: 20px;
    }
    .text__text {
      font-size: 30px;
      line-height: 100%;
    }
  }
}
</style>
