<template>
  <button class="button" @click="goTo">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: { type: String, default: null },
    composantName: { type: String, default: null }
  },
  methods: {
    goTo() {
      this.$router.push({ name: this.composantName });
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 200px;
  font-family: $police-logo;
  font-weight: 800;
  text-transform: uppercase;
  background-color: $color-header-dark;
  color: white;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px 10px;
  border: solid 2px transparent;
  cursor: pointer;
  transition: 200ms;
  outline: none;
  &:hover {
    border: solid 2px $color-header-dark;
    color: $color-header-dark;
    background-color: white;
  }
}
</style>