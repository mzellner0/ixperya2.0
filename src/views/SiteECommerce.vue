<template>
  <div class="siteECommerce">
    <BasePageSpecialisee
      :title1="'La solution pour que votre site vous rapporte enfin de l\'argent (au lieu de vous en coûter) :'"
      :title2="'Faites de votre site un jeu interactif !'"
      :title3="'Ensemble, Boostons vos ventes'"
      :paragraph1="'GRÂCE À NOTRE OUTIL PERMETTANT LA PERSONNALISATION D’OBJETS SOUS FORME DE JEU 3D, IMPLIQUEZ VOS VISITEURS DANS LA CRÉATION DE LEURS PROPRES COMMANDES ET AINSI vendez plus et plus cher.'"
    >
      <template v-slot:content>
        <OutilPersonnalisation />
      </template>
      <template v-slot:paragraph2>
        <p>
          Impliquez vos visiteurs dans la création de leur futur achat. Une fois qu'ils auront passé des dizaines de minutes (voir des heures) à créer leur produit parfait, il sera impensable pour eux de ne pas l'acheter ! 
        </p>
        <p>
          A votre écoute, nous chercherons, ensemble, la meilleure approche pour mettre en avant vos produits.
        </p>
        <p>Chaque projet est unique ! Le mieux est donc de me contacter pour qu'on en discute !</p>
      </template>
    </BasePageSpecialisee>
  </div>
</template>

<script>
import BasePageSpecialisee from "@/components/BasePageSpecialisee.vue";
import OutilPersonnalisation from "@/components/OutilPersonnalisation.vue";
import { mapActions } from 'vuex'

export default {
  name: "SiteECommerce",
  components: {
    BasePageSpecialisee,
    OutilPersonnalisation
  },
  created() {
    this.showLoader();
  },
  methods: {
    ...mapActions(['showLoader']),
  }
}
</script>