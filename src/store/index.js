import { createStore } from 'vuex'

export default createStore({
  state: {
    menuOpen: false,
    linkBackPortfolio: null,

    hideButtonsMenu: true,
    hideInventory: true,

    hideGrabTuto: true,
    hideExplanation: true,
    hideArrowInventory: true,
    hideArrowCatch: true
  },
  mutations: {
    TOGGLE_MENU (state) {
      state.menuOpen = !state.menuOpen;
    },
    UPDATE_LINKBACKPORTFOLIO (state, composantName) {
      state.linkBackPortfolio = composantName;
    },

    TOGGLE_HIDEINVENTORY (state) {
      state.hideInventory = !state.hideInventory;
    },
    TOGGLE_HIDEBUTTONSMENU (state) {
      state.hideButtonsMenu = !state.hideButtonsMenu;
    },

    SHOW_HIDEGRABTUTO (state) {
      state.hideGrabTuto = false;
    },
    HIDE_HIDEGRABTUTO (state) {
      state.hideGrabTuto = true;
    },
    TOGGLE_HIDEEXPLANATION (state) {
      state.hideExplanation = !state.hideExplanation;
    },
    TOGGLE_HIDEARROWINVENTORY (state) {
      state.hideArrowInventory = !state.hideArrowInventory;
    },
    TOGGLE_HIDEARROWCATCH (state) {
      state.hideArrowCatch = !state.hideArrowCatch;
    },
  },
  actions: {
    toggleMenu ({ commit }) {
      commit('TOGGLE_MENU');
    },
    updateLinkBackPortfolio ({ commit }, composantName) {
      commit('UPDATE_LINKBACKPORTFOLIO', composantName);
    },

    toggleHideInventory({ commit }) {
      commit('TOGGLE_HIDEINVENTORY');
    },
    toggleHideButtonsMenu({ commit }) {
      commit('TOGGLE_HIDEBUTTONSMENU');
    },

    showHideGrabTuto({ commit }) {
      commit('SHOW_HIDEGRABTUTO');
    },
    hideHideGrabTuto({ commit }) {
      commit('HIDE_HIDEGRABTUTO');
    },
    toggleHideExplanation({ commit }) {
      commit('TOGGLE_HIDEEXPLANATION');
    },
    toggleHideArrowInventory({ commit }) {
      commit('TOGGLE_HIDEARROWINVENTORY');
    },
    toggleHideArrowCatch({ commit }) {
      commit('TOGGLE_HIDEARROWCATCH');
    }
  },
  modules: {
  }
})
