import { createStore } from 'vuex'

export default createStore({
  state: {
    loader: false,

    menuOpen: false,

    hideButtonsMenu: true,
    hideInventory: true,

    hideGrabTuto: true,
    hideExplanation: true,
    hideArrowInventory: true,
    hideArrowCatch: true,

    showArrowInventoryPossible: true,
    showArrowCatchPossible: true,

    cardInInventory: false,

    disableCanvasJeu: true,

    win: false,
    restartGame: false,
    gameStart: false
  },
  mutations: {
    SHOW_LOADER (state) {
      state.loader = true;
    },
    HIDE_LOADER (state) {
      state.loader = false;
    },

    TOGGLE_MENU (state) {
      state.menuOpen = !state.menuOpen;
    },

    TOGGLE_HIDEINVENTORY (state) {
      state.hideInventory = !state.hideInventory;
    },
    TOGGLE_HIDEBUTTONSMENU (state) {
      state.hideButtonsMenu = !state.hideButtonsMenu;
    },

    SHOW_GRABTUTO (state) {
      state.hideGrabTuto = false;
    },
    HIDE_GRABTUTO (state) {
      state.hideGrabTuto = true;
    },
    TOGGLE_HIDEEXPLANATION (state) {
      state.hideExplanation = !state.hideExplanation;
    },
    SHOW_ARROWINVENTORY (state) {
      state.hideArrowInventory = false;
    },
    SHOW_ARROWCATCH (state) {
      state.hideArrowCatch = false;
    },
    HIDE_ARROWINVENTORY (state) {
      state.hideArrowInventory = true;
    },
    HIDE_ARROWCATCH (state) {
      state.hideArrowCatch = true;
    },

    TOGGLE_SHOWARROWINVENTORYPOSSIBLE (state) {
      state.showArrowInventoryPossible = !state.showArrowInventoryPossible;
    },
    TOGGLE_SHOWARROWCATCHPOSSIBLE (state) {
      state.showArrowCatchPossible = !state.showArrowCatchPossible;
    },

    TOGGLE_CARDININVENTORY(state) {
      state.cardInInventory = !state.cardInInventory;
    },

    SHOW_WIN(state) {
      state.win = true;
    },
    HIDE_WIN(state) {
      state.win = false;
    },
    TOGGLE_RESTARTGAME(state) {
      state.restartGame = !state.restartGame;
    },

    TOGGLE_GAMESTART (state) {
      state.gameStart = !state.gameStart;
    },

    TOGGLE_DISABLECANVASJEU (state) {
      state.disableCanvasJeu = !state.disableCanvasJeu;
    }
  },
  actions: {
    showLoader ({ commit }) {
      commit('SHOW_LOADER')
    },
    hideLoader ({ commit }) {
      commit('HIDE_LOADER')
    },

    toggleMenu ({ commit }) {
      commit('TOGGLE_MENU');
    },

    toggleHideInventory({ commit }) {
      commit('TOGGLE_HIDEINVENTORY');
    },
    toggleHideButtonsMenu({ commit }) {
      commit('TOGGLE_HIDEBUTTONSMENU');
    },

    showGrabTuto({ commit }) {
      commit('SHOW_GRABTUTO');
    },
    hideGrabTuto({ commit }) {
      commit('HIDE_GRABTUTO');
    },
    toggleHideExplanation({ commit }) {
      commit('TOGGLE_HIDEEXPLANATION');
    },
    showArrowInventory({ commit }) {
      commit('SHOW_ARROWINVENTORY');
    },
    hideArrowInventory({ commit }) {
      commit('HIDE_ARROWINVENTORY');
    },
    showArrowCatch({ commit }) {
      commit('SHOW_ARROWCATCH');
    },
    hideArrowCatch({ commit }) {
      commit('HIDE_ARROWCATCH');
    },

    toggleShowCatchArrowPossible({ commit }) {
      commit('TOGGLE_SHOWARROWCATCHPOSSIBLE');
    },
    toggleShowInventoryArrowPossible({ commit }) {
      commit('TOGGLE_SHOWARROWINVENTORYPOSSIBLE');
    },

    toggleCardInInventory({ commit }) {
      commit('TOGGLE_CARDININVENTORY');
    },

    showWin({ commit }) {
      commit('SHOW_WIN');
    },
    hideWin({ commit }) {
      commit('HIDE_WIN');
    },
    toggleRestartGame({ commit }) {
      commit('TOGGLE_RESTARTGAME');
    },

    toggleGameStart({ commit }) {
      commit('TOGGLE_GAMESTART');
    },

    toggleDisableCanvasJeu({commit}) {
      commit('TOGGLE_DISABLECANVASJEU');
    }
  },
  modules: {
  }
})
