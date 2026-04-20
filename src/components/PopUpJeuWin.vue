<template>
  <div class="pop-up-win" v-if="win">
    <div class="pop-up-win__text">
      <p>{{ $t("game.pop_up.win") }}</p>
      <button @click="onClickOnRestart">{{ $t("game.pop_up.play_again") }}</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PopUpJeuWin",
  computed: {
    ...mapState(["win"]),
  },
  methods: {
    ...mapActions(["hideWin", "toggleRestartGame"]),
    onClickOnRestart() {
      this.hideWin();
      this.toggleRestartGame();
    },
  },
};
</script>

<style lang="scss" scoped>
.pop-up-win {
  position: absolute;
  top: 200px;
  left: 35%;
  width: 30%;
  z-index: 2;
  @include breakpoint(500) {
    top: 70px;
    left: 5%;
    width: 90%;
  }
  &__text {
    @include flex(column, center, space-around);
    text-align: center;
    line-height: 30px;
    font-family: $police-logo;
    font-size: 25px;
    color: $color-header-dark;
    transition: $fadeDurationTuto;
    background: white;
    width: 100%;
    min-width: 440px;
    height: 270px;
    border: solid 2px #182836;
    border-radius: 40px;
    @include breakpoint(500) {
      width: 90%;
      min-width: auto;
      height: 125px;
      border-radius: 20px;
      padding: 15px 10px;
      margin-top: 120px;
      font-size: 17px;
    }
  }
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
  &:hover {
    background-color: white;
    color: $color-header-dark;
    animation: waves 1000ms ease-in-out infinite;
    border-color: $color-header-dark;
  }
  @include breakpoint(500) {
    font-size: 15px;
  }
}
</style>
