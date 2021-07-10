<template>
  <button class="button" :class="{white}">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 100px;
  background: $gradient;
  box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  border: none;
  padding: 15px 30px;
  color: #ffffff;
  cursor: pointer;
  transition: transform .3s;

  margin-right: 30px;

  &.white {
    color: #323232;
    background: #ffffff;
    box-shadow: none;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
