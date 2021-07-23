import {state} from './store/library'

const base = '/mbox/'

function mapRoutes(array, name) {
  return array.map(item => {
    return {
      route: `/${name}/` + item.id,
      payload: item
    }
  })
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mbox-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${base}/favicon.ico` },
    ]
  },


  target: 'static',
  router: {
    base,
  },

  generate: {
    routes() {
      return [
        ...mapRoutes(state().library.tv, 'tv'),
        ...mapRoutes(state().library.series, 'series'),
        ...mapRoutes(state().library.movies, 'movies'),
        ...mapRoutes(state().actors, 'actors'),
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/grid.scss',
      '~/assets/scss/carousel.scss',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
