<template>
    <div class="tuto-container">
      <div :class="['tuto-container__explanation', { 'hidden': hideExplanation }]">
        <p>
            Suivez les particules pour trouver la clef et ouvrir la porte.
        </p>
        <button class="letsGo" @click="startGame">
          C'est parti !
        </button>
      </div>
      <font-awesome-icon 
        :class="['tuto-container__pointerGrab', { 'hidden': hideGrabTuto }]" 
        :icon="['fas', 'hand-pointer']"
      />
      <font-awesome-icon 
        :class="['tuto-container__arrow tuto-container__arrowCatch', { 'hidden': hideArrowCatch }]" 
        :icon="['fas', 'long-arrow-alt-down']"
      />
      <font-awesome-icon 
        :class="[
          'tuto-container__arrow tuto-container__arrowInventory', 
          { 'hidden': hideArrowInventory || !hideInventory || !showArrowInventoryPossible }
        ]" 
        :icon="['fas', 'long-arrow-alt-down']"
      />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "TutoJeu",
  computed: {
    ...mapState([
    'hideExplanation', 
    'hideGrabTuto', 
    'hideArrowCatch', 
    'hideArrowInventory', 
    'hideInventory', 
    'showArrowInventoryPossible'
  ])
  },
  methods: {
    ...mapActions(['toggleHideExplanation', 'toggleDisableCanvasJeu']),
    startGame() {
      this.toggleHideExplanation();
      this.toggleDisableCanvasJeu();
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  opacity: 0;
  pointer-events: none;
}

.tuto-container{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  z-index: 99;
  &__pointerGrab{
    position: absolute;
    background-color: white;
    width: 29px;
    height: 29px;
    padding: 20px;
    border-radius: 50px;
    color: $color-header-dark;
    border: $color-header-dark solid 2px;
    z-index: 1;
    margin-top: 320px;
    font-size: 30px;
    transform-origin: center;
    animation: waves 900ms ease-in-out infinite;
    transition: $fadeDurationTuto;
  }
  &__arrow{
    z-index: inherit;
    font-size: 55px;
    position: absolute;
    bottom: 90px;
    transition: 200ms;
    animation: upDownArrow 700ms ease-in-out infinite;
  }
  &__arrowCatch{
    left: calc(50% - 45px);
  }
  &__arrowInventory{
    left: calc(50% + 15px);
  }
  &__explanation{
    @include flex(column, center, space-around);
    z-index: 2;
    margin-top: 170px;
    text-align: center;
    line-height: 30px;
    font-family: $police-logo;
    font-size: 25px;
    padding: 0px 20px;
    color: $color-header-dark;
    transition: $fadeDurationTuto;
    background: white;
    width: 30%;
    min-width: 440px;
    height: 270px;
    border: solid 2px #182836;
    border-radius: 40px;
    @media (max-width: 500px){
      width: 80%;
      min-width: auto;
      padding: 15px 20px;
      margin-top: 95px;
    }
  }
  p{
    margin: 0;
  }
  button {
    background-color: $color-header-dark;
    padding: 0px 20px;
    padding-top: 15px;
    padding-bottom: 10px;
    border-radius: 40px;
    color: white;
    font-family: $police-logo;
    font-weight: 900;
    font-size: 20px;
    box-shadow: 0px 0px 8px #00000036;
    border: 2px solid transparent;
    outline: none;
    cursor: pointer;
    transition: 200ms;
    &:hover{
      background-color: white;
      color: $color-header-dark;
      animation: waves 1000ms ease-in-out infinite;
      border-color: $color-header-dark;
    }
  }
}
</style>