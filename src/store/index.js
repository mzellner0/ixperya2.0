import { createStore } from 'vuex'

export default createStore({
  state: {
    menuOpen: false
  },
  mutations: {
    TOGGLE_MENU (state) {
      state.menuOpen = !state.menuOpen;
    }
  },
  actions: {
    toggleMenu ({ commit }) {
      commit('TOGGLE_MENU');
    }
  },
  modules: {
  }
})
