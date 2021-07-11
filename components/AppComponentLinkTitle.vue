<template>
  <div class="component-link" @click="$emit('link-click')">
    <span class="text">
      <slot/>
    </span>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
  </div>
</template>

<script>
export default {
  emits: ['link-click']
}
</script>

<style lang="scss" scoped>
.component-link {
  cursor: pointer;
  margin-left: 19px;
  font-weight: bold;
  font-size: 28px;
  line-height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  svg {
    margin-left: 5px;
  }

  .text {
    margin-left: 20px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 50px;
    width: 8px;
    background: $gradient;
  }
}
</style>
