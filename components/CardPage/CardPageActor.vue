<template>
  <div>
    <NuxtLink class="back-link" to="/actors">
      <svg class="rotate180" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 256 256"  fill="white" style="height: 18px" xml:space="preserve">
<g>
	<g>
		<polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		"/>
	</g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
</svg>
      <span>Back to actors</span>
    </NuxtLink>
    <div class="card-page">
      <div class="card-page-block">
        <img :src="image" :alt="title" class="card-page__img">
      </div>
      <div class="card-page-block full-size pt">
        <div class="card-page__title">{{ title }}</div>
        <div class="card-page__description">{{ descr }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'descr']
}
</script>
