<template>
  <button class="button" :class="{white}" @click="$emit('click')">
    <span v-if="withPlay" class="custom-button-block">
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.2923 10.3932L2.15764 17.7762C1.21269 18.4021 0 17.6442 0 16.3824V1.61647C0 0.356646 1.21094 -0.403248 2.15764 0.224664L13.2923 7.60763C13.5073 7.74786 13.686 7.95055 13.8103 8.19516C13.9345 8.43977 14 8.71759 14 9.00043C14 9.28328 13.9345 9.5611 13.8103 9.80571C13.686 10.0503 13.5073 10.253 13.2923 10.3932Z" fill="white"/>
      </svg>
      <slot />
    </span>

    <slot v-else/>
  </button>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    white: {
      type: Boolean,
      require: false,
      default: false
    },
    withPlay: {
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
  box-shadow: 0 4px 50px rgba(50, 108, 255, 0.5);
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  border: none;
  padding: 15px 30px;
  color: #ffffff;
  cursor: pointer;
  transition: transform .3s;

  margin-right: 30px;
  @include grid-tablet {
    margin-right: 20px;
  }

  &.white {
    color: #323232;
    background: #ffffff;
    box-shadow: none;

    svg path {
      fill: #000000;
      stroke: #000000;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  @include grid-mobile {
    width: 100%;
    margin-bottom: 15px;
    margin-right: 0;
  }
}

.custom-button-block {
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 15px;
  }
}
</style>
