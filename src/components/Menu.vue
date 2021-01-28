<template>
  <div :class="['menu', { 'menu--open': menuOpen }]">
      <div class="menu__links">
        <router-link @click="toggleMenu" class="menu__link" to="/">Accueil</router-link>
        <router-link @click="toggleMenu" class="menu__link" to="/jeu">Jeu</router-link>
        <router-link @click="toggleMenu" class="menu__link" to="/developpeur-web">Développeuse web</router-link>
        <router-link @click="toggleMenu" class="menu__link" to="/a-propos">A propos</router-link>
        <router-link @click="toggleMenu" class="menu__link" to="/contact">Contact</router-link>
        <router-link @click="toggleMenu" class="menu__link" to="/site-avec-jeu">Site avec jeu</router-link>
        <router-link @click="toggleMenu" class="menu__link" to="/site-informatif">Site informatif</router-link>
        <router-link @click="toggleMenu" class="menu__link" to="/site-ecommerce">Site e-commerce</router-link>
      </div>
  </div>
  <router-view/>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapState(['menuOpen'])
  },
  methods: {
    ...mapActions(['toggleMenu'])
  }
}
</script>

<style lang="scss" scoped>
    .router-link-active{
        font-weight: 900;
        background-color: $color-header-middle;
        border-radius: 3px;
        width: 100%;
        font-size: 14px;
    }
    .menu{
        position: fixed;
        right: 0px;
        width: 225px;
        background-color: $color-header-dark;
        height: 100vh;
        top: 0px;
        z-index: 8;
        transform: translateX(225px);
        transition: 100ms ease-in-out;
        &--open {
            transform: translateX(0px);
        }
        &__links{
            @include flex(column, initial, initial);
            margin-top: 115px;
            font-family: $police-logo;
            text-transform: uppercase;
            text-align: right;
            margin-right: 30px;
            @media (max-width: 500px){
                margin-right: 15px;
            }
        }
        
        &__link{
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
            &:hover{
                color: white;
            }
        }
    }
</style>
