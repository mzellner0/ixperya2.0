<template>
	<div class="developpeur">
		<Title :title="'Vous cherchez un développeur web ?'" />
		<div class="developpeur__portfolio">
			<Portfolio :projets-list="projetsList" />
		</div>
		<div class="developpeur__apropos">
			<AProposDevComponent />
		</div>
		<Technologies />
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
		margin-top: 250px;
	}
	&__apropos {
		margin-top: 50px;
		margin-bottom: 100px;
	}
	&__technos {
		margin-top: 80px;
		margin-bottom: 50px;
		@include flex(column, center, center);
		color: white;
		background-color: $color-header-dark;
		.frontend, .backend {
			@include flex(row, center, center);
			img {
				max-height: 100px;
				margin: 0px 20px;
			}
			.mysql {
				margin-bottom: 55px;
			}
			&:last-of-type {
				margin-bottom: 40px;
			}
		}
		h2 {
			margin-top: 70px;
			margin-bottom: 50px;
			font-family: $police-logo;
			text-transform: uppercase;
			font-size: 15px;
			font-weight: 800;
			&:last-of-type {
				margin-bottom: 5px;
			}
		}
	}
	&__buttons {
		@include flex(row, center, center);
		width: 100%;
		margin-bottom: 80px;
	}
}
</style>