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
    } else if (!state.burgerMenu) {
      document.body.style.overflow = ''
    }
  }
}

