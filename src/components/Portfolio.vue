<template>
  <div>
    <div class="portfolio">
      <div class="portfolio__title">
        <h1 class="portfolio__title--light">{{ $t("portfolio.title") }}</h1>
        <h1 class="portfolio__title--dark">{{ $t("portfolio.title") }}</h1>
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

export default {
  name: "Portfolio",
  components: {
    ProjetPortfolio,
  },
  props: {
    projectsListFromProps: { type: Object, default: () => null }
  },
  data() {
    return {
      projectsList: {}
    }
  },
  computed: {
    projectListFromState() {
      return {
        hdp: {
          title: this.$t("portfolio.project_1.title"),
          subtitle: this.$t("portfolio.project_1.subtitle"),
          urlImage: "hdp-portfolio-2.jpg",
          text: this.$t("portfolio.project_1.text"),
          images: [
            require("@/assets/img/projets/hdp-1.jpeg"),
            require("@/assets/img/projets/hdp-3.jpeg"),
            require("@/assets/img/projets/hdp-2.jpeg"),
            require("@/assets/img/projets/hdp-4.jpeg"),
          ],
          url: "https://hoteldeparis-sainttropez.com/",
        },
        ttyt: {
          title: this.$t("portfolio.project_2.title"),
          subtitle: this.$t("portfolio.project_2.subtitle"),
          urlImage: "phone-group.webp",
          text:  this.$t("portfolio.project_2.text"),
          images: [
            require("@/assets/img/projets/phone-group.webp"),
            require("@/assets/img/projets/phone-calendar.webp"),
            require("@/assets/img/projets/phone-balance.webp"),
          ],
          url: "https://tutuyoutoo.com/fr",
          isMobile: true,
        },
        avatar: {
          title: this.$t("portfolio.project_3.title"),
          subtitle: this.$t("portfolio.project_3.subtitle"),
          urlImage: "avatar-portfolio.jpg",
          text:  this.$t("portfolio.project_3.text"),
          images: [
            require("@/assets/img/projets/avatar-portfolio.jpg"),
            require("@/assets/img/projets/avatar-phone.png"),
          ],
          url: "https://www.sandbox.game/en/me/avatar/",
          isMobile: false,
        },
        "3D": {
          title: this.$t("portfolio.project_4.title"),
          subtitle: this.$t("portfolio.project_4.subtitle"),
          urlImage: "jeu.png",
          text:  this.$t("portfolio.project_4.text"),
          images: [
            require("@/assets/img/projets/jeu.png"),
            require("@/assets/img/projets/jeu-2.png"),
          ],
          url: "https://maudzellner.fr/jeu",
          isMobile: false,
        }
      }
    }
  },
  mounted() {
    if (
      this.projectsListFromProps == null
    ) {
      this.projectsList = this.projectListFromState
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