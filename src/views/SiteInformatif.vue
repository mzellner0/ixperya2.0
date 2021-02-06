<template>
  <div class="siteInfo">
    <BasePageSpecialisee
      :title1="'La solutions pour que votre site vous rapporte enfin de l\'argent (au lieu de vous en coûter) :'"
      :title2="'Mettez en avant votre marque avec un design élégant.'"
      :title3="'Ensemble, Créons votre site'"
      :paragraph1="'GRÂCE À UNE CHARTE GRAPHIQUE RÉUSSIE, GAGNEZ EN CRÉDIBILTIÉ (ÉVITEZ QUE VOTRE SITE NE FASSE PEUR).'"
    >
      <template v-slot:content>
        <div class="siteInfo__portfolio">
          <Portfolio :projets-list="projetsList" />
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
import Portfolio from "@/components/Portfolio.vue";
import { mapActions } from 'vuex'

export default {
  name: "SiteInformatif",
  components: {
    BasePageSpecialisee,
    Portfolio
  },
  data: () => {
    return {
      projetsList: [
        { 
          title: 'Hôtel de Paris Saint Tropez', 
          urlImage: 'hdp-portfolio-2.jpg',
          params: {
            title: 'Hôtel de Paris Saint Tropez'
          }
        }
      ]
    }
  },
  beforeRouteLeave(to, from, next) {
		this.updateLinkBackPortfolio(from.name);
		next();
	},
	methods: {
		...mapActions(['updateLinkBackPortfolio'])
	}
}
</script>

<style lang="scss" scoped>
.siteInfo {
  &__portfolio {
    margin-top: 80px;
  }
}
</style>