<template>
  <div class="actor" @click="$router.push(`/actors/${link}`)">
    <div class="actor__img" :style="{backgroundImage: imgUlr}"></div>
    <div class="actor__name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: ['name', 'image', 'link'],
  data() {
    return {
      imgUlr: `url("${this.image}")`
    }
  }
}
</script>

<style lang="scss" scoped>
.actor {
  padding-top: 15px;
  height: 230px;
  width: 190px;
  cursor: pointer;
  &:hover {
    .actor__img {
      box-shadow: 0 0 25px -2px #2cb0f9;
    }
  }

  &__img {
    border-radius: 50%;
    width: 190px;
    height: 190px;
    background-color: #ffffff;
    margin: 0 auto 20px auto;
    background-size: cover;
    background-position: top;
    transition: box-shadow .3s;
  }

  &__name {
    font-size: 18px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
