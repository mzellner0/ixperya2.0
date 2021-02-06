<template>
  <div v-if="loader" class="loader bg">
      <span class="loader__circle"></span>
      <p>Chargement ...</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Loader",
    computed: {
    ...mapState(['loader'])
  }
}
</script>

<style lang="scss" scoped>
$size-border: 2px;
$size-circle: 30px;
$size-small: 6px;
$color-circle: $color-header-dark;

.loader{
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0%;
  left: 0%;
  transition: 500ms;
  &__circle{
    height: $size-circle;
    width: $size-circle;
    border-radius: $size-circle;
    border: solid $size-border transparent;
    border-top-color: $color-circle;
    position: relative;
    animation: rotate-circle 1000ms linear infinite;
    &::after{
      content: '';
      position: absolute;
      border: solid $size-border transparent;
      border-top-color: $color-circle;
      top: $size-border;
      left: $size-border;
      right: $size-border;
      bottom: $size-border;
      border-radius: $size-circle;
      animation: rotate-circle 2000ms linear infinite;
    }
    &::before{
      content: '';
      position: absolute;
      border: solid $size-border transparent;
      border-top-color: $color-circle;
      top: $size-small;
      left: $size-small;
      right: $size-small;
      bottom: $size-small;
      border-radius: $size-circle;
      animation: rotate-circle 40000ms linear infinite;
    }
  }
  p{
    margin-left: 20px;
    font-family: $police-logo;
    color: $color-circle;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
  }
}

@keyframes rotate-circle{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>