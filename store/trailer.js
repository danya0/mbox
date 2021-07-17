export const state = () => ({
  trailer: false,
  videoLink: ''
})

export const mutations = {
  closeTrailer(state) {
    state.trailer = false
    state.videoLink = ''
  },
  openTrailer(state, videoLink) {
    state.trailer = true
    state.videoLink = videoLink
  }
}

export const actions = {
  openTrailerWithVideo({commit}, videoLink) {
    commit('openTrailer', videoLink)
    document.body.style.overflow = 'hidden'
  },
  closeTrailer({commit}) {
    commit('closeTrailer')
    document.body.style.cssText = ''
  }
}

