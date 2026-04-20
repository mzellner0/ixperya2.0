<template>
  <ProjetPage
    v-if="$route.query.nom"
    :title-projet="projet.title"
    :subtitle="projet.subtitle"
    :text="projet.text"
    :url="projet.url"
    :is-mobile="projet.isMobile"
    :images="projet.images"
  />
  <div v-else>
    <p>Aucun projet à ce nom.</p>
  </div>
</template>

<script>
import ProjetPage from "@/components/ProjetPage.vue"

export default {
  name: "ProjectView",
  components: {
    ProjetPage
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
    },
    projet() {
      return this.projectListFromState[this.$route.query.nom];
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    @include flex(row, center, center);
    p {
      font-family: $police-text;
      color: $color-header-dark;
      font-weight: bold;
      font-size: 17px;
      margin-top: 40px;
    }
  }
</style>