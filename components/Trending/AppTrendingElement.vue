<template>
  <div class="wrap">
    <div class="trending-element" :title="title" :style="{backgroundImage: newImage}"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
      type: String
    },
    image: {
      require: true,
      type: String
    }
  },
  data() {
    return {
      newImage: `url("${this.image}")`,
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trending-element {
  cursor: pointer;
  border-radius: 20px;
  height: 310px;
  width: 206px;
  margin: 0 auto;

  transition: box-shadow .3s;

  background-size: cover;
  background-position: center center;

  &:hover {
    box-shadow: 0 0 25px -2px #2cb0f9;
  }
}
</style>
