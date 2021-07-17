<template>
  <div class="main-section">
    <div class="container">
      <div class="main">
        <div class="main-block">
          <div class="main__title">Night Watch</div>
        </div>
        <div class="main-block">
          <the-main-information
            year="2021"
            age-limit="18"
            rating="8"
            type="Serial"
          />
        </div>
        <div class="main-block">
          <div class="main__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc quis et elit lacinia urna.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
        <div class="main-block">
          <div class="main-buttons">
            <app-button with-play>Watch</app-button>
            <app-button white>More info</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMainInformation from "~/components/Main/TheMainInformation";
import AppButton from "~/components/AppButton";

export default {
  components: {AppButton, TheMainInformation}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

.main {
  margin-bottom: 70px;
  &-section {
    background-image: url('~assets/img/main-bg.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @include grid-mobile {
      background-position: right -310px center;
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
