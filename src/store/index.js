import { createStore } from 'vuex'

export default createStore({
  state: {
    projectsListFromState: {
      "hdp": { 
        title: 'Hôtel de Paris Saint Tropez',
        subtitle: "Réalisation du design et de l'intégration du site.", 
        urlImage: 'hdp-portfolio-2.jpg',
        text: "Cet hôtel cherchait à rafraîchir son ancien site internet. Je leurs ai donc réalisés 3 nouvelles propostions graphiques pour qu'il puisse choisir celle qui leurs correspondait le mieux. Une fois le design décidé, je l'ai integré avec soin.",
        images: [
          require('@/assets/img/projets/hdp-1.jpeg'),
          require('@/assets/img/projets/hdp-3.jpeg'),
          require('@/assets/img/projets/hdp-2.jpeg'),
          require('@/assets/img/projets/hdp-4.jpeg'),
        ],
        url: "https://hoteldeparis-sainttropez.com/",
        isMobile: false
      },
      "ttyt": {
        title: 'Tutuyoutoo',
        subtitle: 'Création d\'une application mobile.',
        urlImage: "phone-group.webp",
        text: "Réalisation de A à Z (des maquettes à la mise en ligne sur le play store et l'app store en passant par le développement), d'une application permettant à ses utilisateurs d'organiser leurs vacances ultra facilement en améliorant la communication dans les groupes de voyages.",
        images: [
          require('@/assets/img/projets/phone-group.webp'),
          require('@/assets/img/projets/phone-calendar.webp'),
          require('@/assets/img/projets/phone-balance.webp')
        ],
        url: "https://tutuyoutoo.com/fr",
        isMobile: true
      },
      "avatar": { 
        title: "Création d'avatar",
        subtitle: "Réalisation d'un module de personnalisation d'avatar pour le site de Sandbox.game.",
        urlImage: 'avatar-portfolio.jpg',
        text: "Sandbox.game souhaitait intégrer, à leur site internet, un module permettant à chaque utilisateur de personnaliser son propre avatar 3D. Je me suis donc occupée, en tant que développeuse front-end, d'intégrer leur maquette déjà réalisée au préalable et de coder cette fonctionnalité en javascript (à l'aide de vue.js et de three.js) pour que cette idée puisse prendre vie.",
        images: [
          require('@/assets/img/projets/avatar-portfolio.jpg'),
          require('@/assets/img/projets/avatar-phone.png')
        ],
        url: "https://www.sandbox.game/en/me/avatar/",
        isMobile: false
      },
      "3D": { 
        title: "Création d'un jeu 3D", 
        subtitle: "Réalisation d'un jeu 3D.",
        urlImage: 'jeu.png',
        text: "Poussée par l'envie d'en connaître plus sur Three.js, j'ai créé un jeu en 3D sur internet.",
        images: [
          require('@/assets/img/projets/jeu.png'),
          require('@/assets/img/projets/jeu-2.png'),
        ],
        url: "https://maudzellner.fr/jeu",
        isMobile: false
      },
    },

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
