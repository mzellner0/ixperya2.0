import { createStore } from 'vuex'

export default createStore({
  state: {
    menuOpen: false,
    linkBackPortfolio: null
  },
  mutations: {
    TOGGLE_MENU (state) {
      state.menuOpen = !state.menuOpen;
    },
    UPDATE_LINKBACKPORTFOLIO (state, composantName) {
      state.linkBackPortfolio = composantName;
    }
  },
  actions: {
    toggleMenu ({ commit }) {
      commit('TOGGLE_MENU');
    },
    updateLinkBackPortfolio ({ commit }, composantName) {
      commit('UPDATE_LINKBACKPORTFOLIO', composantName);
    }
  },
  modules: {
  }
})
