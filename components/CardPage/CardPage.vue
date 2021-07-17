<template>
  <div class="card-page">
    <div class="card-page-block">
      <img :src="image" :alt="title" class="card-page__img">
    </div>
    <div class="card-page-block full-size pt">
      <div class="card-page__title">{{ title }}</div>
      <app-button @click="openTrailerWithVideo(trailerVideo)" with-play>Watch trailer</app-button>
      <div class="card-page-stat">
        <the-main-information
          :type="type"
          :rating="rating"
          :age-limit="ageLimit"
          :year="year"
        />
      </div>
      <div class="card-page__description">{{ descr }}</div>
    </div>
  </div>
</template>

<script>
import TheMainInformation from "~/components/Main/TheMainInformation";
import AppButton from "~/components/AppButton";
import {mapActions} from "vuex";
export default {
  components: {AppButton, TheMainInformation},
  props: ['image', 'title', 'type', 'rating', 'ageLimit', 'year', 'descr', 'trailerVideo'],
  methods: {
    ...mapActions('trailer', ['openTrailerWithVideo'])
  }
}
</script>

<style lang="scss">
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
  padding-top: 50px;
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

  &-stat {
    margin-top: 20px;
  }

  &__title, &-stat {
    margin-bottom: 20px;
  }

  &__description {
    font-size: 28px;
    color: darken(#FFFFFF, 30%);
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
