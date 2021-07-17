<template>
  <nav class="nav" :class="{'for-burger-menu': burgerMenu}">
    <NuxtLink class="nav__link" to="/" exact>Home</NuxtLink>
    <NuxtLink class="nav__link" to="/tv">TV Shows</NuxtLink>
    <NuxtLink class="nav__link" to="/movies">Movies</NuxtLink>
    <NuxtLink class="nav__link" to="/series">Series</NuxtLink>
  </nav>
</template>

<script>
export default {
  props: {
    burgerMenu: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 385px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__link {
    opacity: 0.5;
    font-weight: 800;
    position: relative;
    transition: opacity .3s, color $header-change-style-transition;

    &:hover {
      opacity: .75;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      border-radius: 5px;
      background: $gradient;
      display: none;
    }

    &.nuxt-link-exact-active, &.nuxt-link-active {
      opacity: 1;

      &:before {
        display: block;
      }
    }
  }

  &.for-burger-menu {
    .nav {
      &__link {
        color: #000000;
        margin: 10px 0;
      }
    }
    flex-direction: column;
  }
}
</style>
