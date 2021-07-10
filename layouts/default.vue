<template>
  <div>
    <the-burger-menu :active="burgerMenu" />
    <div class="main" :class="{'with-burger-menu': burgerMenu}">
      <the-header />
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/Header/TheHeader";
import TheBurgerMenu from "~/components/Burger/TheBurgerMenu";
import {mapState} from "vuex"

export default {
  computed: {
    ...mapState({burgerMenu: 'burgerMenu'})
  },
  components: {TheBurgerMenu, TheHeader}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;800&display=swap');

html {
  font-family: 'Mulish', sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
  max-width: $container-width;
}

body, h1, h2, h3 {
  margin: 0;
  padding: 0;
}

body {
  background: $bg;
  color: $text-color;
}

a {
  color: $text-color;
  text-decoration: none;
}

@include grid-tablet {
  .main {
    transition: transform .3s;
    &.with-burger-menu {
      transform: translateY($burger-menu-height);
    }
  }
}



</style>
