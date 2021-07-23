<template>
  <div>
    <NuxtLink class="back-link" :to="`/${place}`">
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
      <span>Back to {{place}}</span>
    </NuxtLink>
    <div class="card-page">
      <div class="card-page-block">
        <img :src="item.image" :alt="item.title" class="card-page__img">
      </div>
      <div class="card-page-block full-size">
        <div class="card-page__title">{{ item.title }}</div>
        <app-button @click="openTrailerWithVideo(item.trailerVideo)" with-play>Watch trailer</app-button>
        <div class="card-page__genres" >
          Genres:
          <NuxtLink class="genre-link" v-for="(genre, idx) of item.genres" :to="`/genres/${genre}`" :key="genre">{{toUpperFirst(genre)}}{{idx !== item.genres.length-1 ? ',' : ''}}</NuxtLink>
        </div>
        <div class="card-page-stat">
          <the-main-information
            :type="toUpperFirst(place)"
            :rating="item.rating"
            :age-limit="item.ageLimit"
            :year="item.year"
          />
        </div>
        <div class="card-page__description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMainInformation from "~/components/Main/TheMainInformation";
import AppButton from "~/components/AppButton";
import {mapActions} from "vuex";
import {toUpperFirst} from "~/utils/toUpperFirst";

export default {
  components: {AppButton, TheMainInformation},
  data() {
    return {
      toUpperFirst
    }
  },
  props: ['item', 'place'],
  methods: {
    ...mapActions('trailer', ['openTrailerWithVideo'])
  }
}
</script>

<style lang="scss">
.back-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 28px;
  line-height: 20px;
  padding: 30px 0 40px 0;

  svg {
    margin-right: 7px;
  }
}

.rotate180 {
  transform: rotate(180deg);
}

.full-size {
  flex: 1;
}

.pt {
  padding-top: 50px;

  @include grid-tablet {
    padding: 0;
  }
}

.card-page {
  width: 100%;
  display: flex;

  &__img {
    height: 500px;
    width: 300px;
    object-fit: cover;
    border-radius: 30px;
    margin-right: 30px;
  }

  &__title {
    font-size: 50px;
  }

  &__title, &-stat {
    margin-bottom: 20px;
  }

  &__description {
    font-size: 18px;
    color: darken(#FFFFFF, 30%);
  }

  &__genres {
    margin: 20px 0;
    font-size: 18px;

    .genre-link {
      margin-right: 5px;

      &:hover {
        text-decoration: underline;
        color: darken($text-color, 30%)
      }
    }
  }

  @include grid-tablet {
    flex-direction: column;
    padding: 0;

    &__img {
      height: 300px;
      width: 200px;
    }
  }

  @include grid-mobile {
    text-align: center;

    &__img {
      margin: 0;
    }
  }
}
</style>
