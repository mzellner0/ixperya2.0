<template>
  <div class="projet" @click="openProjet">
    <img class="projet__photo" alt="image projet" :src="require(`@/assets/img/projets/${imageProjet}`)" />
    <h3 class="projet__title">{{ titleProjet }}</h3>
  </div>
</template>

<script>
export default {
  name: "Projet",
  props: {
    titleProjet: { type: String, default: null },
    imageProjet: { type: String, default: 'hdp-portfolio.jpg' }
  },
  methods: {
    openProjet() {
      this.$emit("open-projet", true);
    }
  }
}
</script>

<style lang="scss" scoped>
  .projet {
    margin: 50px 50px;
    @include flex(column, center, center);
    transition: 200ms;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
    }
    @include breakpoint(800) {
      margin: 25px 0px;
    }
    &__title {
      font-family: $police-text-2;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 17px;
      color: white;
    }
    &__photo {
      max-width: 700px;
      max-height: 300px;
      @include breakpoint(1850) {
        max-height: initial;
        width: initial;
        height: 320px;
      }
      @include breakpoint(1280) {
        max-height: initial;
        width: 600px;
        height: initial;
        max-height: 500px;
        object-fit: contain;
      }
      @include breakpoint(800) {
        width: 280px;
        height: initial;
        max-height: 400px;
      }
    }
  }
</style>