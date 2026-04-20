<template>
  <div :class="['menu', { 'menu--open': menuOpen }]">
    <div class="menu__links">
      <router-link @click="toggleMenu" class="menu__link" :to="`/?lang=${$i18n.locale}`"
        >{{ $t("menu.home") }}</router-link
      >
      <router-link @click="toggleMenu" class="menu__link" :to="`/a-propos?lang=${$i18n.locale}`"
        >{{ $t("menu.contact") }}</router-link
      >
      <router-link @click="toggleMenu" class="menu__link" :to="`/portfolio?lang=${$i18n.locale}`"
        >{{ $t("menu.portfolio") }}</router-link
      >
      <router-link @click="toggleMenu" class="menu__link" :to="`/contact?lang=${$i18n.locale}`"
        >{{ $t("menu.contact") }}</router-link
      >
      <div class="menu__lang">
        <button :class="$i18n.locale === 'en' && 'menu__lang--active'" @click="switchToEnglish">EN</button>
        /
        <button :class="$i18n.locale === 'ca' && 'menu__lang--active'" @click="switchToCatalan">CA</button>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Menu",
  computed: {
    ...mapState(["menuOpen"]),
  },
  methods: {
    ...mapActions(["toggleMenu"]),
    switchToCatalan() {
      this.$i18n.locale = 'ca'

      const url = new URL(window.location.href)
      url.searchParams.set('lang', 'ca')
      window.history.pushState({}, '', url)

      this.toggleMenu()
    },
    switchToEnglish() {
      this.$i18n.locale = 'en'

      const url = new URL(window.location.href)
      url.searchParams.set('lang', 'en')
      window.history.pushState({}, '', url)

      this.toggleMenu()
    }
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  font-weight: 900;
  background-color: $color-header-middle;
  border-radius: 3px;
  width: 100%;
  font-size: 14px;
  color: white !important;
}
.menu {
  position: fixed;
  right: 0px;
  width: 180px;
  background-color: $color-header-dark;
  height: 100vh;
  top: 0px;
  z-index: 8;
  border-left: $color-header-middle 5px solid;
  transform: translateX(225px);
  transition: 100ms ease-in-out;
  &--open {
    transform: translateX(0px);
  }
  &__lang {
    @include flex(row, center, flex-end);
    padding: 5px 5px;
    width: 80%;
    margin-left: 20%;
    font-family: $police-logo;
    color: $color-body-middle;
    cursor: default;
    button {
      background-color: transparent;
      border: none;
      padding: 0;
      font-family: $police-logo;
      color: $color-body-middle;
      cursor: pointer;
      margin-right: 5px;
      transition: 200ms;
      &:last-of-type {
        margin-left: 5px;
        margin-right: 0;
      }
      &:hover {
        color: white;
      }
    }
    &--active {
      color: white !important;
      font-weight: bold;
    }
  }
  &__links {
    @include flex(column, initial, initial);
    margin-top: 115px;
    font-family: $police-logo;
    text-transform: uppercase;
    text-align: right;
    margin-right: 30px;
    @media (max-width: 500px) {
      margin-right: 15px;
    }
  }

  &__link {
    text-decoration: none;
    margin-bottom: 10px;
    color: $color-body-middle;
    transform-origin: left center;
    transition: 200ms;
    padding: 5px 5px;
    width: 80%;
    margin-left: 20%;
    padding-bottom: 1px;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
}
</style>
