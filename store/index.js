export const state = () => ({
  burgerMenu: false,
})

export const mutations = {
  toggleBurgerMenu(state) {
    state.burgerMenu = !state.burgerMenu
  },
  closeBurgerMenu(state) {
    state.burgerMenu = false
  }
}

export const actions = {
  toggleBurgerMenu({state, commit}) {
    commit('toggleBurgerMenu')

    if (state.burgerMenu) {
      document.body.style.overflow = 'hidden'
      document.body.style.padding = 'padding: 0 calc(20px - (100vw - 100%)) 0 0;'
      // document.body.style.marginRight = 'calc(-1 * (100vw - 100%))'
    } else if (!state.burgerMenu) {
      document.body.style.overflow = ''
      document.body.style.marginRight = ''
      document.body.style.padding = ''

    }
  },
  closeBurgerMenu({state, commit}) {
    if (state.burgerMenu) {
      commit('closeBurgerMenu')
      document.body.style.overflow = ''
      document.body.style.marginRight = ''
      document.body.style.padding = ''
    }
  }
}

