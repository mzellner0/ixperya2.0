<template>
	<div class="developpeur">
		<Title :title="'Voici la développeuse web qu\'il vous manquait !'" />
		<div class="developpeur__apropos">
			<AProposDevComponent />
		</div>
		<div class="developpeur__portfolio">
			<Portfolio :projets-list="projetsList" />
		</div>
		<div class="developpeur__technos">
			<Technologies />
		</div>
		<div class="developpeur__buttons">
			<Button :text="'Contactez-moi'" :composant-name="'Contact'" />
		</div>
	</div>
</template>

<script>
import Portfolio from "@/components/Portfolio.vue";
import Button from "@/components/Button.vue";
import AProposDevComponent from "@/components/AProposDevComponent.vue";
import Title from "@/components/Title.vue";
import Technologies from "@/components/Technologies.vue";
import { mapActions } from 'vuex'

export default {
	name: "Developpeur",
	components: {
		Portfolio,
		Button,
		Title,
		AProposDevComponent,
		Technologies
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
        },
        { 
          title: "Création d'avatar", 
          urlImage: 'avatar-portfolio.jpg',
          params: {
            title: "Création d'avatar"
          }
				},
				{ 
          title: "Création d'un jeu 3D", 
          urlImage: 'jeu.png',
          params: {
            title: "Création d'un jeu 3D"
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
.developpeur {
	width: 100%;
	&__portfolio {
		margin-top: 100px;
	}
	&__apropos {
		margin-top: 100px;
		margin-bottom: 100px;
	}
	&__technos {
		margin-top: 10px;
		margin-bottom: 50px;
	}
	&__buttons {
		@include flex(row, center, center);
		width: 100%;
		margin-bottom: 80px;
	}
}
</style>