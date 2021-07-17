<template>
  <div>
    <transition
      enter-class="trailer-enter-from"
      leave-class="trailer-leave-from"
      name="trailer">
      <the-trailer v-if="trailer" :link="videoLink"/>
    </transition>
    <the-burger-menu :active="burgerMenu" />
    <the-header :with-burger="burgerMenu" />
    <div class="content" :class="{'with-burger-menu': burgerMenu}">
      <Nuxt/>
    </div>
    <the-footer class="footer-transition" :class="{'with-burger-menu': burgerMenu}"/>
  </div>
</template>

<script>
import TheHeader from "~/components/Header/TheHeader";
import TheBurgerMenu from "~/components/Burger/TheBurgerMenu";
import TheFooter from "~/components/Footer/TheFooter";
import TheTrailer from "~/components/Trailer/TheTrailer";
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
    ...mapState({burgerMenu: 'burgerMenu'}),
    ...mapState('trailer', ['trailer', 'videoLink']),
  },
  components: {TheTrailer, TheBurgerMenu, TheHeader, TheFooter}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap');

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

.content {
  min-height: 65vh;
}

.with-header {
  padding-top: 100px;
}

body, h1, h2, h3, p {
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

.trailer-enter-from,
.trailer-leave-to {
  opacity: 0;
}
.trailer-enter-to,
.trailer-leave-from {
  opacity: 1;
}
.trailer-enter-active,
.trailer-leave-active {
  transition: all .5s;
}

@include grid-tablet {
  .content, .footer-transition {
    transition: transform $burger-show-transition;
  }
  .with-burger-menu {
    transform: translateY($burger-menu-height);
  }
}

</style>
