<template>
    <header>
        <img alt="logo" src="@/assets/img/svg/logoEpais.svg" @click="goToAccueil">
        <div class="text-header">
            <h1>IXPERYA</h1>
            <p>Développement web</p>
        </div>
        <div class="menuOpener" @click="toggleMenu">
            <p :style="{ opacity: menuOpen ? 0 : 1 }">Menu</p>
            <div :class="[{ 'menuOpener__bar1--active': menuOpen }]"></div>
            <div :class="[{ 'menuOpener__bar2--active': menuOpen }]"></div>
            <div :class="[{ 'menuOpener__bar3--active': menuOpen }]"></div>
        </div>
    </header>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Header',
  components: { 
  },
  data: function () {
      return {}
  },
  computed: {
      ...mapState(['menuOpen'])
  },
  methods: {
      ...mapActions(['toggleMenu']),
      goToAccueil() {
        this.$router.push({ name: 'Accueil' });
      }
  }
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    @include flex(row, center, space-between);
    z-index: 10;
    > * {
        z-index: inherit;
    }
    .text-header {
        height: 140px;
        @include flex(column, center, initial);
        width: 30%;
        margin-right: 35%;
        h1 {
            font-family: $police-logo;
            font-weight: 400;
            font-size: 50px;
            color: $color-header-dark;
            user-select: none;
            pointer-events: none;
            transition: 200ms;
            opacity: 1;
            margin-bottom: 5px;
        }
        p {
            margin: 0;
            font-family: $police-logo;
            font-size: 20px;
            text-align: center;
            color: $color-header-dark;
            user-select: none;
            pointer-events: none;
            transition: 200ms;
            opacity: 1;
            text-transform: uppercase;
        }
    }
    img {
        user-select: none;
        max-width: 50px;
        margin-left: 30px;
        cursor: pointer;
    }
    .menuOpener {
        width: 50px;
        margin-right: 30px;
        margin-bottom: 5px;
        position: fixed;
        right: 10px;
        top: 10px;
        cursor: pointer;
        p{
            font-family: $police-logo;
            color: $color-header-dark;
            font-size: 12px;
            font-weight: 600;
            transition: 200ms;
            font-weight: 700;
        }
        div {
            background-color: $color-header-middle;
            border-radius: 3px;
            height: 8px;
            width: 100%;
            margin: 7px 0px;
            transform-origin: right center;
            transition: 200ms;
        }
        &__bar1 {
            &--active {
                transform: rotateZ(-36deg);
                @include breakpoint(500) {
                    transform: rotateZ(-42deg);
                }
            }
        }
        &__bar2 {
            &--active {
                opacity: 0;
            }
        }
        &__bar3 {
            &--active {
                transform: rotateZ(36deg);
                @include breakpoint(500) {
                    transform: rotateZ(42deg);
                }
            }
        }
    }
    @include breakpoint(500){
        .text-header {
            height: 110px;
            h1 {
                font-size: 30px;
            }
            p {
                font-size: 15px;
            }
        }
        img {
            max-width: 40px;
            margin-left: 15px;
        }
        .menuOpener {
            font-size: 30px;
            margin-right: 0px;
            p {
                font-size: 10px;
            }
            div {
                width: 45px;
            }
        }
    }
}
</style>
