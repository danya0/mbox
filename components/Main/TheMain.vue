<template>
  <div class="main-section">
    <div class="container">
      <div class="main">
        <div class="main-block">
          <div class="main__title">{{ item.title }}</div>
        </div>
        <div class="main-block">
          <the-main-information
            :year="item.year"
            :age-limit="item.ageLimit"
            :rating="item.rating"
            type="Movie"
          />
        </div>
        <div class="main-block">
          <div class="main__description">
            {{ croppedDescription }}
          </div>
        </div>
        <div class="main-block">
          <div class="main-buttons">
            <app-button with-play @click="openTrailerWithVideo(item.trailerVideo)">Watch</app-button>
            <app-button white @click="$router.push(`${place}/${id}`)">More info</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMainInformation from "~/components/Main/TheMainInformation";
import AppButton from "~/components/AppButton";
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      place: 'movies',
      id: 4,
      item: {},
      croppedDescription: ''
    }
  },
  async fetch() {
    this.item = await this.getFromId({id: this.id, place: this.place})
    this.croppedDescription = this.cropFunction(this.item.description, 220)
  },
  computed: {
    ...mapGetters('library', ['getFromId']),
  },
  methods: {
    ...mapActions('trailer', ['openTrailerWithVideo']),
    cropFunction(text, stop) {
      return text.slice(0, stop) + (stop < text.length ? '...' : '')
    }
  },
  components: {AppButton, TheMainInformation},
}
</script>

<style lang="scss" scoped>

.main {
  margin-bottom: 70px;
  &-section {
    background-image: url('~assets/img/bg.jpg');
    position: relative;
    background-size: cover;
    background-position: 500px center;
    background-repeat: no-repeat;

    @include grid-laptop {
      background-position: 200px center;
    }

    @include grid-tablet {
      background-position: 100px center;
    }

    @include grid-mobile {
      background-position: right -330px center;
    }
  }

  padding-top: 285px;
  padding-left: 205px;
  padding-bottom: 170px;

  &-block {
    &:not(&:last-child) {
      margin-bottom: 25px;
    }
  }

  &__title {
    max-width: 600px;
    font-family: 'Marcellus', serif;
    font-size: 100px;
    line-height: 100px;
  }

  &__description {
    max-width: 500px;
    font-size: 18px;
    line-height: 28px;
    color: #C2C2C2;
  }

  @include grid-laptop {
    padding-left: 60px;
    padding-bottom: 140px;
  }

  @include grid-tablet {
    padding-top: 180px;
    &__title {
      font-size: 60px;
      line-height: 65px;
    }
    &__description {
      font-size: 16px;
    }
  }
  @include grid-mobile {
    padding-bottom: 100px;
    padding-left: 0;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
