<template>
  <div class="main-information">
    <div class="main-information-block">
      <div class="year">{{ year }}</div>
    </div>
    <div class="main-information-block">
      <div class="age-limit">
        <div class="age-limit-main">{{ ageLimit }}+</div>
      </div>
    </div>
    <div class="main-information-block">
      <div class="type">{{ type }}</div>
    </div>
    <div class="main-information-block">
      <div class="rating">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.83 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.611 15.443H3.612Z" fill="#FFB800"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        {{ rating }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['year', 'ageLimit', 'type', 'rating']
}
</script>

<style lang="scss" scoped>
.main-information {
  font-family: Mulish, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;

  & .age-limit {
    height: 25px;
    width: 60px;
    border-radius: 50px;
    background: $gradient;
    display: flex;
    justify-content: center;
    align-items: center;

    &-main {
      height: 21px;
      width: 56px;
      border-radius: 50px;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & .rating {
    display: flex;
    align-items: center;
    & svg {
      margin-right: 7px;
    }
  }

  @include grid-mobile {
    margin: 0 auto;
  }
}
</style>
