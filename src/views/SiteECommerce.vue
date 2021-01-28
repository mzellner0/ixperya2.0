<template>
  <div class="siteECommerce">
    <BasePageSpecialisee
      :title1="'La solutions pour que votre site vous rapporte enfin de l\'argent (au lieu de vous en coûter) :'"
      :title2="'Vous vendez des produits ?'"
      :title3="'Ensemble, Créons votre site'"
      :paragraph1="'GRÂCE À NOTRE OUTIL PERMETTANT LA PERSONNALISATION D’OBJETS SOUS FORME DE JEU 3D, IMPLIQUEZ VOS VISITEURS DANS LA CRÉATION DE LEURS PROPRES COMMANDES ET AINSI AUGMENTEZ VOS VENTES.'"
    >
      <template v-slot:content>
        <OutilPersonnalisation />
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
import OutilPersonnalisation from "@/components/OutilPersonnalisation.vue";

export default {
  name: "SiteECommerce",
  components: {
    BasePageSpecialisee,
    OutilPersonnalisation
  }
}
</script>

<style lang="scss" scoped>
  
</style>