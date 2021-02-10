<template>
  <div class="siteJeu">
    <BasePageSpecialisee
      :title1="'Rendez votre site interactif et captez l\'attention de vos visiteurs.'"
      :title2="'Grâce à la 3D tout devient possible !'"
      :title3="'Ensemble, Créons votre jeu'"
      :paragraph1="'Vous vous demandez à quoi cela peut bien ressembler ? Regardez plutôt un exemple :'"
    >
      <template v-slot:content>
        <div class="siteJeu__button">
          <Button :text="'Jeu'" :composant-name="'Jeu'" :new-tab="true" />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>
          Chaque projet de jeu est unique. De l'augmentation du temps de visite de votre site à la vente d'items dans le jeu, le champs des possibles est très vaste. 
        </p>
        <p>
          A votre écoute, nous élaborerons, ensemble, les règles et objectifs du jeu que vous souhaitez réaliser. 
        </p>
        <p>
          Contactez-moi maintenant pour qu'on en discute !
        </p>
      </template>
    </BasePageSpecialisee>
  </div>
</template>

<script>
import BasePageSpecialisee from "@/components/BasePageSpecialisee.vue";
import Button from "@/components/Button.vue";

export default {
  name: "SiteAvecJeu",
  components: {
    BasePageSpecialisee,
    Button
  }
}
</script>

<style lang="scss" scoped>
.siteJeu {
  &__button {
    @include flex(row, center, center);
  }
}
</style>