<template>
  <div class="trailer" @click="closeTrailer">
    <button class="close">&times;</button>
    <div class="video-block" @click.stop>
      <iframe v-if="link" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p class="no-trailer" v-else>No trailer for this item</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    link: {
      type: String,
      require: true,
    },
  },
  methods: {
    ...mapActions('trailer', ['closeTrailer'])
  }
}
</script>

<style lang="scss" scoped>
.no-trailer {
  font-size: 55px;
}

.trailer {
  z-index: 15;
  position: fixed;
  background: rgba(#000000, .5);
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .video-block {
    height: 75%;
    width: 80%;

    iframe {
      height: 100%;
      width: 100%;
    }
  }

  .close {
    position: absolute;
    right: 25px;
    top: 25px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 70px;
    color: $text-color;
    cursor: pointer;
    transition: color .3s;

    &:hover {
      color: darken($text-color, 70%)
    }
  }
}
</style>
