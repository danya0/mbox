<template>
  <div class="card" :style="{background: bg}" @click="$emit('card-click')">
    <div class="card-block">
      <div class="card__ico" :style="{backgroundImage: urlIco}">
        <img :src="ico" alt="">
      </div>
      <div class="card__title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['card-click'],
  props: ['bg', 'ico', 'title'],
  data() {
    return {
      urlIco: `url("${this.ico}")`
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  height: 200px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #000;
    opacity: 0;
    transition: opacity .3s;
  }

  &:hover:before {
    opacity: .15;
  }

  &-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__ico {
    margin-bottom: 8px;
    max-height: 80px;
  }

  &__title {
    font-weight: bold;
    font-size: 28px;
    line-height: 20px;

    @include grid-mobile {
      font-size: 18px;
    }
  }

  @include grid-tablet {
    height: 140px;
  }

}
</style>
