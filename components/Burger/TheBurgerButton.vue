<template>
  <div class="burger" :class="{active}" @click="$emit('burger-click')">
    <div class="burger__line"></div>
    <div class="burger__line"></div>
    <div class="burger__line"></div>
  </div>
</template>

<script>
export default {
  emits: ['burger-click'],
  props: ['active']
}
</script>

<style lang="scss" scoped>
.burger {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: white;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all .3s;

  &.active {
    .burger__line {
      &:first-child {
        transform: translateY(7px) rotateZ(-45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        transform: translateY(-7px) rotateZ(45deg) ;
      }
    }
  }

  &__line {
    width: 20px;
    height: 3px;
    background: $bg;
    border-radius: 5px;
    margin: 2px 0;
    transition: transform .3s;
  }
}
</style>
