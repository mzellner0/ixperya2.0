<template>
  <div class="siteJeu">
    <BasePageSpecialisee
      :title="'Vous souhaitez créer un jeu sur le web ?'"
    />
  </div>
</template>

<script>
import BasePageSpecialisee from "@/components/BasePageSpecialisee.vue";

export default {
  name: "SiteAvecJeu",
  components: {
    BasePageSpecialisee
  }
}
</script>

<style lang="scss" scoped>
  
</style>