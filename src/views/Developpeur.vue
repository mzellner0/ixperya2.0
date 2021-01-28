<template>
	<div class="developpeur">
		<Title :title="'Vous cherchez un développeur web ?'" />
		<div class="developpeur__portfolio">
			<Portfolio />
		</div>
		<div class="developpeur__apropos">
			<AProposComponent />
		</div>
		<div class="developpeur__technos">
			<h2>Technologies front-end que j'utilise :</h2>
			<div class="frontend">
				<img :src="require('@/assets/img/logos/vue.png')" alt="logo vue">
				<img :src="require('@/assets/img/logos/trio.png')" alt="logo css-html-js">
				<img :src="require('@/assets/img/logos/sass.png')" alt="logo sass">
				<img :src="require('@/assets/img/logos/three.png')" alt="logo three.js">
			</div>
			<h2>Connaissances back-end :</h2>
			<div class="backend">
				<img :src="require('@/assets/img/logos/node.png')" alt="logo node">
				<img :src="require('@/assets/img/logos/expressjs.png')" alt="logo express">
				<img :src="require('@/assets/img/logos/mysql.png')" alt="logo mysql" class="mysql">
			</div>
		</div>
		<div class="developpeur__buttons">
			<Button :text="'Contactez-moi'" :composant-name="'Contact'" />
		</div>
	</div>
</template>

<script>
import Portfolio from "@/components/Portfolio.vue";
import Button from "@/components/Button.vue";
import AProposComponent from "@/components/AProposComponent.vue";
import Title from "@/components/Title.vue";

export default {
	name: "Developpeur",
	components: {
		Portfolio,
		Button,
		Title,
		AProposComponent
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
		margin-top: 80px
	}
	&__technos {
		@include flex(column, center, center);
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
				margin-bottom: 50px;
			}
		}
		h2 {
			margin-top: 100px;
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