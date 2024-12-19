<template>
  <div class="siteInfo">
    <BasePageSpecialisee
      :title1="'Marquez les esprits avec un design élégant !'"
      :title2="'Créez une charte graphique réussie et ainsi, gagnez en crédibilité (évitez que votre site ne fasse peur).'"
      :title3="'Ensemble, Créons votre site'"
      :paragraph1="'Voici un exemple de design que nous avons réalisé :'"
    >
      <template v-slot:content>
        <div class="siteInfo__portfolio">
          <Portfolio :projects-list-from-props="projetsList" />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>
          Nous réalisons vos sites entierement personnalisés pour correspondre
          au mieux à vos besoins.
        </p>
        <p>
          Votre image de marque est unique.<br />
          Ensemble, nous nous assurerons de trouver la vôtre, pour créer ensuite
          vos pages internet en partant dans la bonne direction.
        </p>
        <p>
          A votre écoute, nous chercherons ensemble, la meilleure approche pour
          mettre en avant votre entreprise sur le web. Nous la distinguerons par
          une force visuelle et une originalité marquée.
        </p>
        <p>
          Vous avez envie d’avoir l’esprit tranquille ? Pas de soucis : nous
          nous occupons de la maintenance de vos sites et de leurs mises à jour
          (sous forme de forfait ou au devis : ne payer pas s'il n'y a aucune
          modification). Vous n’avez rien à faire.
        </p>
        <p>Vous voulez en savoir plus ? Contactez-moi !</p>
      </template>
    </BasePageSpecialisee>
  </div>
</template>

<script>
import BasePageSpecialisee from "@/components/BasePageSpecialisee.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "SiteInformatif",
  components: {
    BasePageSpecialisee,
    Portfolio,
  },
  data: () => {
    return {
      projetsList: {
        hdp: {
          title: "Hôtel de Paris Saint Tropez",
          subtitle: "Réalisation du design et de l'intégration du site.",
          urlImage: "hdp-portfolio-2.jpg",
          text: "Cet hôtel cherchait à rafraîchir son ancien site internet. Nous leurs avons donc réalisés 3 nouvelles propostions graphiques pour qu'il puisse choisir celle qui leurs correspondait le mieux. Une fois le design décidé, nous l'avons integré avec soin.",
          images: [
            require("@/assets/img/projets/hdp-1.jpeg"),
            require("@/assets/img/projets/hdp-3.jpeg"),
            require("@/assets/img/projets/hdp-2.jpeg"),
            require("@/assets/img/projets/hdp-4.jpeg"),
          ],
          url: "https://hoteldeparis-sainttropez.com/",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.siteInfo {
  &__portfolio {
    margin-top: 70px;
  }
}
</style>
