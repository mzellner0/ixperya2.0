<template>
  <div class="portfolio">
    <div class="portfolio__title">
      <h1 class="portfolio__title--light">Portfolio</h1>
      <h1 class="portfolio__title--dark">Portfolio</h1>
    </div>
    <div class="portfolio__projets">
      <Projet
        v-for="(projet, index) in projetsList"
        :key="index"
        :title-projet="projet.title"
        :image-projet="projet.urlImage"
      />
    </div>
  </div>
</template>

<script>
import Projet from "@/components/Projet.vue"
export default {
  name: "Portfolio",
  components: {
    Projet
  },
  data: () => {
    return {
      projetsList: [
        { title: 'Hôtel de Paris Saint Tropez', urlImage: 'hdp-portfolio-2.jpg' },
        { title: 'Création d\'avatar', urlImage: 'avatar-portfolio.jpg' }
        // { title: 'Hôtel de Paris Saint Tropez', urlImage: 'hdp-portfolio-2.jpg' }
      ]
    }
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
    }
  }
</style>