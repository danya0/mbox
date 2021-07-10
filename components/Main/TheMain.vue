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
            <app-button>
              <div class="custom-button-block">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2923 10.3932L2.15764 17.7762C1.21269 18.4021 0 17.6442 0 16.3824V1.61647C0 0.356646 1.21094 -0.403248 2.15764 0.224664L13.2923 7.60763C13.5073 7.74786 13.686 7.95055 13.8103 8.19516C13.9345 8.43977 14 8.71759 14 9.00043C14 9.28328 13.9345 9.5611 13.8103 9.80571C13.686 10.0503 13.5073 10.253 13.2923 10.3932Z" fill="white"/>
                </svg>
                Watch
              </div>
            </app-button>
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

.custom-button-block {
  display: flex;
  align-items: center;
  svg {
    margin-right: 15px;
  }
}

.main {
  &-section {
    background: url('~assets/img/main-bg.png') center / cover no-repeat;
  }

  padding-top: 285px;
  padding-left: 205px;

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

  &-buttons {

  }
}
</style>
