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
      document.body.style.paddingRight = 'calc(20px - (100vw - 100%))'
    } else if (!state.burgerMenu) {
      document.body.style.cssText = ''
    }
  },
  closeBurgerMenu({state, commit}) {
    if (state.burgerMenu) {
      commit('closeBurgerMenu')
      document.body.style.cssText = ''
    }
  }
}

