<template>
  <div class="banner-register">
    <div class="banner-register-content">
      <div class="banner-register__text">Are You New Here?<br> Don’t wait, Register Now. </div>
      <app-button>Register Now</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/AppButton";
export default {
  components: {AppButton}
}
</script>

<style lang="scss" scoped>
.banner-register {
  margin: 0 auto;
  padding: 70px 15px;
  min-height: 270px;
  max-width: 1225px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: url('~assets/img/banners/bg-register.png') no-repeat center / cover;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  &:hover:before {
    transform: scale(1.2);
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(336.56deg, #000000 58.12%, #FFFFFF 124.09%);
    opacity: 0.5;
    transition: transform .3s;
  }

  &-content {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font-weight: bold;
    font-size: 64px;
    line-height: 100%;
    text-transform: capitalize;
    margin-right: 80px;
  }

  @include grid-laptop {
    &__text {
      font-size: 50px;
    }
  }
  @include grid-tablet {
    &-content {
      flex-direction: column;
    }
    &__text {
      text-align: center;
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
  @include grid-mobile {
    padding: 0 10px;
    &__text {
      font-size: 35px;
    }
  }
}
</style>
