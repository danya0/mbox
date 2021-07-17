<template>
  <div class="card-page">
    <div class="card-page-block">
      <img :src="image" :alt="title" class="card-page__img">
    </div>
    <div class="card-page-block full-size pt">
      <div class="card-page__title">{{ title }}</div>
      <div class="card-page__description">{{ descr }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'descr']
}
</script>
