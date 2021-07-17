<template>
  <div class="search-page with-header">
    <div class="container">
      <div class="search">
        <div class="search-box">
          <input placeholder="Search..." type="text" v-model="searchVal">
        </div>
        <div class="search-panel">
          <div class="search__text" v-if="!searchArray.length">
            <span>{{ text }}</span>
            <div class="info-ico">i</div>
          </div>
          <app-cards-place v-else :place="placesArray" :card-array="searchArray"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AppCardsPlace from "~/components/AppCardsPlace";

export default {
  components: {AppCardsPlace},
  data() {
    return {
      text: 'Start writing something',
      searchVal: '',
      placesArray: [],
    }
  },
  computed: {
    ...mapState('library', ['searchArray'])
  },
  methods: {
    ...mapActions('library', ['search'])
  },
  watch: {
    searchVal(newVal) {
      this.search(newVal)
      if (newVal.length) {
        this.text = 'No results were found for your search'
      } else {
        this.text = 'Start writing something'
      }

      this.placesArray = this.searchArray.map(item => item.place)
    }
  },

  beforeRouteLeave(to, from, next) {
    if (this.searchArray.length) {
      this.$store.commit('library/clearSearch')
      next()
    } else {
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;

  &-box {
    width: 100%;

    input {
      font-family: 'Mulish', sans-serif;
      width: 100%;
      height: 60px;
      font-size: 21px;
      padding: 0 10px;
      border-radius: 14px;
      outline: none;
    }
  }

  &-panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    margin-top: 50px;
    display: flex;
    align-items: center;

    span {
      @include grid-mobile {
        font-size: 25px;
      }
      text-align: center;
      font-size: 35px;
      margin-right: 10px;
    }
  }
}

.info-ico {
  flex-shrink: 0;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;

  @include grid-mobile {
    height: 40px;
    width: 40px;
    font-size: 30px;
  }
}
</style>
