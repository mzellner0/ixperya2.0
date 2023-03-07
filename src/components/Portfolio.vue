<template>
  <div>
    <div class="portfolio">
      <div class="portfolio__title">
        <h1 class="portfolio__title--light">Portfolio</h1>
        <h1 class="portfolio__title--dark">Portfolio</h1>
      </div>
      <div class="portfolio__projets">
        <ProjetPortfolio
          v-for="(projectName, index) in Object.keys(projectsList)"
          :key="index"
          :title-projet="projectsList[projectName].title"
          :image-projet="projectsList[projectName].urlImage"
          :link-projet="projectName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjetPortfolio from "@/components/ProjetPortfolio.vue"
import { mapState } from 'vuex'

export default {
  name: "Portfolio",
  components: {
    ProjetPortfolio,
  },
  props: {
    projectsListFromProps: { type: Object, default: () => null }
  },
  computed: {
    ...mapState(['projectsListFromState'])
  },
  data() {
    return {
      projectsList: {}
    }
  },
  mounted() {
    if (
      this.projectsListFromProps == null
    ) {
      this.projectsList = this.projectsListFromState;
    } else {
      this.projectsList = this.projectsListFromProps;
    }
  }
}
</script>

<style lang="scss" scoped>
.hide { 
  display: none;
}
.portfolio {
  background-color: $color-header-dark;
  margin-top: 0px;
  width: 100%;
  @include flex(column, flex-start, center);
  &__title {
    margin-left: 10%;
    @include breakpoint(500) {
      margin-left: 12%;
    }
    h1 {
      font-family: $police-logo;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 40px;
      margin-top: -14px;
      @include breakpoint(500) {
        font-size: 30px;
        margin-top: -13px;
      }
    }
    &--light {
      color: white;
    }
    &--dark {
      position: absolute;
      color: $color-header-dark;
      margin-top: -70px !important;
      clip-path: inset(0 0 25px 0);
      @include breakpoint(500) {
        margin-top: -52px !important;
        clip-path: inset(0 0 17px 0);
      }
    }
  }
  &__projets {
    width: 100%;
    @include flex(row, center, space-around);
    flex-flow: row wrap;
    @include breakpoint(1280) {
      @include flex(column, center, center);
    }
  }
}
</style>