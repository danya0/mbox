<template>
  <div class="logo" :class="{little}" @click="$router.push('/')">
    <div class="logo__letter">
      <div class="black-box">M</div>
    </div>
    <div class="logo__text">box</div>
  </div>
</template>

<script>
export default {
  props: {
    little: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__letter {
    transition: height, weight, background-color, $header-change-style-transition;
    height: 70px;
    width: 70px;
    border-radius: 14px;
    background: $gradient;
    margin-right: 15px;

    @include center;

    .black-box {
      transition: height, weight, background-color, $header-change-style-transition;
      height: 62px;
      width: 62px;
      border-radius: 10px;
      background: #000;

      font-family: 'Lemon', sans-serif;
      font-size: 40px;

      @include center;
    }
  }

  &__text {
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
  }

  &.little {
    .logo__letter {
      height: 50px;
      width: 50px;
      margin-right: 5px;
    }
    .black-box {
      height: 42px;
      width: 42px;
      font-size: 30px;
    }
  }
}
</style>
