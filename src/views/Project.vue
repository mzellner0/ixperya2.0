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
import { mapState } from 'vuex'
import ProjetPage from "@/components/ProjetPage.vue"

export default {
  name: "ProjectView",
  components: {
    ProjetPage
  },
  computed: {
    ...mapState(['projectsListFromState']),
    projet() {
      return this.projectsListFromState[this.$route.query.nom];
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