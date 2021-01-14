<template>
  <div :class="['menu', { 'menu--open': menuOpen }]">
      <div class="menu__links">
        <router-link class="menu__link" to="/">Accueil</router-link>
        <router-link class="menu__link" to="/jeu">Jeu</router-link>
      </div>
  </div>
  <router-view/>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  computed: {
      ...mapState(['menuOpen'])
  }
}
</script>

<style lang="scss" scoped>
    .router-link-active{
        font-weight: 900;
        background-color: $color-header-middle;
        border-radius: 3px;
        width: 100%;
    }
    .menu{
        position: fixed;
        right: 0px;
        width: 175px;
        background-color: $color-header-dark;
        height: 100vh;
        top: 0px;
        z-index: 8;
        transform: translateX(175px);
        transition: 100ms ease-in-out;
        &--open {
            transform: translateX(0px);
        }
        &__links{
            display: flex;
            flex-direction: column;
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
