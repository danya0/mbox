<template>
  <div>
    <the-burger-menu :active="burgerMenu" />
    <the-header :with-burger="burgerMenu" />
    <div class="content" :class="{'with-burger-menu': burgerMenu}">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/Header/TheHeader";
import TheBurgerMenu from "~/components/Burger/TheBurgerMenu";
import {mapState} from "vuex"

export default {
  mounted() {
    if (process.browser){
      window.addEventListener('resize', this.listenResize)
    }
  },
  methods: {
    listenResize() {
      if (window.innerWidth > 780) {
        this.$store.dispatch('closeBurgerMenu')
      }
    },
  },
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
  width: 100%;
  @include grid-mobile {
    padding: 0 30px;
  }
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
  .content {
    transition: transform $burger-show-transition;
    &.with-burger-menu {
      transform: translateY($burger-menu-height);
    }
  }
}



</style>
