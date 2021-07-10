<template>
  <div class="container">
    <header class="header">
      <div class="header-block">
        <app-logo/>
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
</template>

<script>
import AppLogo from "~/components/AppLogo";
import TheBurgerButton from "~/components/Burger/TheBurgerButton";
import AppNav from "~/components/AppNav";
import AppHeaderButtons from "~/components/Header/AppHeaderButtons";
import {mapState, mapMutations, mapActions} from "vuex";

export default {
  computed: {
    ...mapState(['burgerMenu'])
  },
  methods: {
    ...mapActions(['toggleBurgerMenu'])
  },
  components: {AppHeaderButtons, AppNav, TheBurgerButton, AppLogo}
}
</script>

<style lang="scss">
.header {
  padding-top: 15px;
  display: flex;
  align-items: center;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 1400px;

  &-block {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    &:not(:first-child) {
      justify-content: center;
    }
  }

  @include grid-laptop-l {
    width: 1000px;
  }
  @include grid-laptop {
    width: 760px;
  }
  @include grid-tablet {
    width: 415px;
  }
  @include grid-mobile {
    width: 310px;
  }
}


</style>
