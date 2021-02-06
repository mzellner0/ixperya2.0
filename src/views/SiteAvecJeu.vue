<template>
  <div class="siteJeu">
    <BasePageSpecialisee
      :title1="'Vous souhaitez créer un jeu sur le web ?'"
      :title2="'Grâce à la 3D tout devient possible !'"
      :title3="'Ensemble, Créons votre site'"
      :paragraph1="'Vous vous demandez à quoi cela peut bien ressembler ? Regardez plutôt un exemple :'"
    >
      <template v-slot:content>
        <div class="siteJeu__button">
          <Button :text="'Jeu'" :composant-name="'Jeu'" :new-tab="true" />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>
          Nous réalisons vos sites entierement personnalisés pour correspondre au mieux à vos besoins. L'objectif de votre site est unique. Ensemble, nous nous assurerons de trouver le vôtre, pour créer ensuite vos pages internet en partant dans la bonne direction.
        </p>
        <p>
          A votre écoute, nous rechercherons, ensemble, la meilleure approche pour mettre en avant votre entreprise sur le web. Nous la distinguerons par une force visuelle et une originalité marquée.
        </p>
        <p>
          Vous avez envie d’avoir l’esprit tranquille ? Pas de soucis : nous nous occupons de la maintenance de vos sites et de leurs mises à jour. Vous n’avez rien à faire.
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