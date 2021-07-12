<template>
  <div class="container">
    <div class="genres">
      <app-component-link-title @link-click="$router.push('/genres')">
        Popular Genres
      </app-component-link-title>
      <div class="genres-cards">
        <app-genres-card
          v-for="card of cards"
          :key="card.title"
          @card-click="$router.push(card.click)"
          :title="card.title"
          :bg="card.bg"
          :ico="card.ico"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppComponentLinkTitle from "~/components/AppComponentLinkTitle";
import AppGenresCard from "~/components/Genres/AppGenresCard";
import RomanceSvg from '~/assets/img/genres/romance.svg'
import DramaSvg from '~/assets/img/genres/drama.svg'
import HistoricalSvg from '~/assets/img/genres/historical.svg'
import ActionSvg from '~/assets/img/genres/action.svg'
import ScifiSvg from '~/assets/img/genres/scifi.svg'
import HorrorSvg from '~/assets/img/genres/horror.svg'
import ComedySvg from '~/assets/img/genres/comedy.svg'
import DocumentarySvg from '~/assets/img/genres/documentary.svg'

export default {
  data() {
    return {
      RomanceSvg, DramaSvg, HistoricalSvg, ActionSvg, ScifiSvg, HorrorSvg, ComedySvg, DocumentarySvg,
      cards: [
        {
          title: 'Romance',
          bg: 'linear-gradient(109.31deg, #FD093F 2.4%, #F383F1 100%)',
          ico: RomanceSvg,
          click: '/genres/romance',
        },
        {
          title: 'Drama',
          bg: 'linear-gradient(114.5deg, #0FFFDA 2.22%, #3CDB77 68.84%)',
          ico: DramaSvg,
          click: '/genres/drama',
        },
        {
          title: 'Historical',
          bg: 'linear-gradient(109.31deg, #B936FF 2.4%, #57DEDA 100%)',
          ico: HistoricalSvg,
          click: '/genres/historical',
        },
        {
          title: 'Action',
          bg: 'linear-gradient(109.31deg, #FD093F 2.4%, #FB1378 2.41%, #FCCB1A 100%)',
          ico: ActionSvg,
          click: '/genres/action',
        },
        {
          title: 'Sci-fi',
          bg: 'linear-gradient(109.31deg, #FF6472 2.4%, #FDA75D 100%)',
          ico: ScifiSvg,
          click: '/genres/sci-fi',
        },
        {
          title: 'Horror',
          bg: 'linear-gradient(110.16deg, #13547A 2.37%, #80D0C7 96.77%)',
          ico: HorrorSvg,
          click: '/genres/horror',
        },
        {
          title: 'Comedy',
          bg: 'linear-gradient(109.93deg, #FFF77B 2.37%, #FFBF42 50%)',
          ico: ComedySvg,
          click: '/genres/comedy',
        },
        {
          title: 'Documentary',
          bg: 'linear-gradient(109.31deg, #1FA2FF 2.4%, #1FA2FF 2.41%, #1F535C 97.46%)',
          ico: DocumentarySvg,
          click: '/genres/documentary',
        },
      ]
    }
  },
  components: {AppGenresCard, AppComponentLinkTitle}
}
</script>

<style lang="scss" scoped>
.genres {
  &-cards {
    display: grid;
    grid-gap: 27px;
    grid-template: repeat(2, 1fr) / repeat(4, 1fr);

    @include grid-tablet {
      grid-template: repeat(4, 1fr) / repeat(2, 1fr);
    }
  }
}
</style>
