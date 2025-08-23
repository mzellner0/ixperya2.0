import { createStore } from "vuex";

export default createStore({
  state: {
    projectsListFromState: {
      hdp: {
        title: "Hôtel de Paris Saint Tropez",
        subtitle: "Design and website integration.",
        urlImage: "hdp-portfolio-2.jpg",
        text: "This hotel wanted to refresh its old website. I created 3 new design proposals for them so they could choose the one that suited them best. Once the design was decided, I carefully integrated it.",
        images: [
          require("@/assets/img/projets/hdp-1.jpeg"),
          require("@/assets/img/projets/hdp-3.jpeg"),
          require("@/assets/img/projets/hdp-2.jpeg"),
          require("@/assets/img/projets/hdp-4.jpeg"),
        ],
        url: "https://hoteldeparis-sainttropez.com/",
        isMobile: false,
      },
      ttyt: {
        title: "Tutuyoutoo",
        subtitle: "Creation of a mobile application.",
        urlImage: "phone-group.webp",
        text: "From A to Z (from mockups to publishing on the Play Store and App Store, including development), I created an application that allows users to organize their vacations extremely easily, improving communication within travel groups.",
        images: [
          require("@/assets/img/projets/phone-group.webp"),
          require("@/assets/img/projets/phone-calendar.webp"),
          require("@/assets/img/projets/phone-balance.webp"),
        ],
        url: "https://tutuyoutoo.com/fr",
        isMobile: true,
      },
      avatar: {
        title: "Avatar Creation",
        subtitle:
          "Development of an avatar customization module for the Sandbox.game website.",
        urlImage: "avatar-portfolio.jpg",
        text: "Sandbox.game wanted to integrate a module into their website that would allow each user to customize their own 3D avatar. As a front-end developer, I integrated their pre-made design and coded this functionality in JavaScript (using Vue.js and Three.js) to bring the idea to life.",
        images: [
          require("@/assets/img/projets/avatar-portfolio.jpg"),
          require("@/assets/img/projets/avatar-phone.png"),
        ],
        url: "https://www.sandbox.game/en/me/avatar/",
        isMobile: false,
      },
      "3D": {
        title: "3D Game Creation",
        subtitle: "Development of a 3D game.",
        urlImage: "jeu.png",
        text: "Driven by a desire to learn more about Three.js, I created a 3D game on the web.",
        images: [
          require("@/assets/img/projets/jeu.png"),
          require("@/assets/img/projets/jeu-2.png"),
        ],
        url: "https://maudzellner.fr/jeu",
        isMobile: false,
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
    gameStart: false,
  },
  mutations: {
    SHOW_LOADER(state) {
      state.loader = true;
    },
    HIDE_LOADER(state) {
      state.loader = false;
    },

    TOGGLE_MENU(state) {
      state.menuOpen = !state.menuOpen;
    },

    TOGGLE_HIDEINVENTORY(state) {
      state.hideInventory = !state.hideInventory;
    },
    TOGGLE_HIDEBUTTONSMENU(state) {
      state.hideButtonsMenu = !state.hideButtonsMenu;
    },

    SHOW_GRABTUTO(state) {
      state.hideGrabTuto = false;
    },
    HIDE_GRABTUTO(state) {
      state.hideGrabTuto = true;
    },
    TOGGLE_HIDEEXPLANATION(state) {
      state.hideExplanation = !state.hideExplanation;
    },
    SHOW_ARROWINVENTORY(state) {
      state.hideArrowInventory = false;
    },
    SHOW_ARROWCATCH(state) {
      state.hideArrowCatch = false;
    },
    HIDE_ARROWINVENTORY(state) {
      state.hideArrowInventory = true;
    },
    HIDE_ARROWCATCH(state) {
      state.hideArrowCatch = true;
    },

    TOGGLE_SHOWARROWINVENTORYPOSSIBLE(state) {
      state.showArrowInventoryPossible = !state.showArrowInventoryPossible;
    },
    TOGGLE_SHOWARROWCATCHPOSSIBLE(state) {
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

    TOGGLE_GAMESTART(state) {
      state.gameStart = !state.gameStart;
    },

    TOGGLE_DISABLECANVASJEU(state) {
      state.disableCanvasJeu = !state.disableCanvasJeu;
    },
  },
  actions: {
    showLoader({ commit }) {
      commit("SHOW_LOADER");
    },
    hideLoader({ commit }) {
      commit("HIDE_LOADER");
    },

    toggleMenu({ commit }) {
      commit("TOGGLE_MENU");
    },

    toggleHideInventory({ commit }) {
      commit("TOGGLE_HIDEINVENTORY");
    },
    toggleHideButtonsMenu({ commit }) {
      commit("TOGGLE_HIDEBUTTONSMENU");
    },

    showGrabTuto({ commit }) {
      commit("SHOW_GRABTUTO");
    },
    hideGrabTuto({ commit }) {
      commit("HIDE_GRABTUTO");
    },
    toggleHideExplanation({ commit }) {
      commit("TOGGLE_HIDEEXPLANATION");
    },
    showArrowInventory({ commit }) {
      commit("SHOW_ARROWINVENTORY");
    },
    hideArrowInventory({ commit }) {
      commit("HIDE_ARROWINVENTORY");
    },
    showArrowCatch({ commit }) {
      commit("SHOW_ARROWCATCH");
    },
    hideArrowCatch({ commit }) {
      commit("HIDE_ARROWCATCH");
    },

    toggleShowCatchArrowPossible({ commit }) {
      commit("TOGGLE_SHOWARROWCATCHPOSSIBLE");
    },
    toggleShowInventoryArrowPossible({ commit }) {
      commit("TOGGLE_SHOWARROWINVENTORYPOSSIBLE");
    },

    toggleCardInInventory({ commit }) {
      commit("TOGGLE_CARDININVENTORY");
    },

    showWin({ commit }) {
      commit("SHOW_WIN");
    },
    hideWin({ commit }) {
      commit("HIDE_WIN");
    },
    toggleRestartGame({ commit }) {
      commit("TOGGLE_RESTARTGAME");
    },

    toggleGameStart({ commit }) {
      commit("TOGGLE_GAMESTART");
    },

    toggleDisableCanvasJeu({ commit }) {
      commit("TOGGLE_DISABLECANVASJEU");
    },
  },
  modules: {},
});
