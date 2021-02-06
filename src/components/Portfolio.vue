<template>
  <div class="portfolio">
    <div class="portfolio__title">
      <h1 class="portfolio__title--light">Portfolio</h1>
      <h1 class="portfolio__title--dark">Portfolio</h1>
    </div>
    <div class="portfolio__projets">
      <ProjetPortfolio
        v-for="(projet, index) in projetsList"
        :key="index"
        :title-projet="projet.title"
        :image-projet="projet.urlImage"
        :params="projet.params"
      />
    </div>
  </div>
</template>

<script>
import ProjetPortfolio from "@/components/ProjetPortfolio.vue"
export default {
  name: "Portfolio",
  components: {
    ProjetPortfolio
  },
  props: {
    projetsList: { type: Array, default: () => [] }
  }
}
</script>

<style lang="scss" scoped>
  .portfolio {
    background-color: $color-header-dark;
    margin-top: 0px;
    width: 100%;
    @include flex(column, flex-start, center);
    &__title {
      margin-left: 10%;
      @include breakpoint(500) {
        margin-left: 6%;
      }
      @include breakpoint(360) {
        margin-left: 2%;
      }
      h1 {
        font-family: $police-logo;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 40px;
        margin-top: -14px;
      }
      &--light {
        color: white;
      }
      &--dark {
        position: absolute;
        color: $color-header-dark;
        margin-top: -70px !important;
        clip-path: inset(0 0 25px 0);
      }
    }
    &__projets {
      width: 100%;
      @include flex(row, center, center);
      @include breakpoint(1850) {
        @include flex(row, center, space-around);
        flex-flow: row wrap;
      }
      @include breakpoint(1280) {
        @include flex(column, center, center);
      }
    }
  }
</style>