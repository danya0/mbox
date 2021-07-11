<template>
  <div class="burger" :class="{active}">
    <div class="placeholder" @click="$store.dispatch('toggleBurgerMenu')"></div>
    <div class="burger-menu tablet-show-fx" @click="closeAfterLinkClick">
      <app-header-buttons darken/>
      <app-nav burger-menu/>
    </div>
  </div>

</template>

<script>
import AppNav from "~/components/AppNav";
import AppHeaderButtons from "~/components/Header/AppHeaderButtons";

export default {
  props: ['active'],
  components: {AppHeaderButtons, AppNav},
  methods: {
    closeAfterLinkClick(e) {
      !e.target.classList.contains('nav')
        ? this.$store.commit('closeBurgerMenu')
        : null
    }
  }
}
</script>

<style lang="scss" scoped>
.burger {
  &.active {
    .burger-menu {
      transform: translateY(0);
    }
    & .placeholder {
      opacity: .5;
      z-index: 1;
    }
  }

  &-menu {
    z-index: 2;
    height: $burger-menu-height;
    padding: 20px 0;
    width: 101%;
    background: #ffffff;
    display: none;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    transition: transform .3s;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    transform: translateY(-100%);

    &.active {
      transform: translateY(0);
    }
  }

  .placeholder {
    display: none;
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    opacity: 0;
    transition: opacity .3s;

    @include grid-tablet {
      display: block;
    }
  }
}



</style>
