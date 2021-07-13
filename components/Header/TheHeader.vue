<template>
  <div class="header-wrap" :class="{'when-scroll': whenScroll, 'with-burger': withBurger}">
    <div class="container">
      <header class="header">
        <div class="header-block">
          <app-logo :little="whenScroll"/>
        </div>
        <div class="header-block tablet-hidden">
          <app-nav />
        </div>
        <div class="header-block tablet-hidden">
          <app-header-buttons />
        </div>
        <the-burger-button class="tablet-show-fx" :active="burgerMenu" @burger-click="toggleBurgerMenu"/>
      </header>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo";
import TheBurgerButton from "~/components/Burger/TheBurgerButton";
import AppNav from "~/components/AppNav";
import AppHeaderButtons from "~/components/Header/AppHeaderButtons";
import {mapState, mapActions} from "vuex";

export default { // todo: need to fix header width. with percent and max-width
  props: {
    withBurger: {
      type: Boolean
    }
  },
  data() {
    return {
      whenScroll: false,
    }
  },
  mounted() {
    if (process.browser){
      this.checkScrollY();
      window.addEventListener('scroll', this.checkScrollY)
    }
  },
  methods: {
    checkScrollY() {
      window.scrollY > 0 ? this.whenScroll = true : this.whenScroll = false
    },
    ...mapActions(['toggleBurgerMenu']),
  },
  computed: {
    ...mapState(['burgerMenu'])
  },
  components: {AppHeaderButtons, AppNav, TheBurgerButton, AppLogo}
}
</script>

<style lang="scss">
// transitions for scroll animation
.black-box, .logo__text, .nav__link, #search path, .burger, .burger__line {
  transition: $header-change-style-transition;
}

.header-wrap {
  display: flex;
  justify-content: center;
  z-index: 5;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 101%;
  padding: 15px 0 15px 0;
  transition: background-color $header-change-style-transition, transform $burger-show-transition;

  &.when-scroll {
    padding: 10px 0 10px 0;
    background: #fff;

    .nav__link, .logo__text {
      color: #000;
    }

    .logo__letter .black-box {
      background: #fff;
      color: black;
    }

    #search path{
      stroke: #000;
    }

    .burger {
      background: #000;
      &__line {
        background: #ffffff;
      }
    }
  }

  &.with-burger {
    @include grid-tablet {
      transform: translateY(calc(#{$burger-menu-height} - 5px)) translateX(-50%);
    }
  }
}

.header {
  display: flex;
  align-items: center;

  &-block {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    &:not(:first-child) {
      justify-content: center;
    }
  }

  @include grid-mobile {
    padding: 0;
  }
}


</style>
