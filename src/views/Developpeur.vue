<template>
	<div class="developpeur">
		<div class="developpeur__title">
			<div class="border-futura-left anim-border-left" />
			<h1>Vous cherchez un développeur web ?</h1>
			<div class="border-futura-right anim-border-right" />
		</div>
		<div class="developpeur__portfolio">
			<Portfolio />
		</div>
	</div>
</template>

<script>
import Portfolio from "@/components/Portfolio.vue"

export default {
	name: "Developpeur",
	components: {
		Portfolio
	}
}
</script>

<style lang="scss" scoped>
.developpeur {
	width: 100%;
	&__title {
		margin-top: 80px;
		h1 {
			width: 100%;
			padding-top: 100px;
			text-align: center;
			align-items: center;
			font-family: $police-logo;
			font-weight: 500;
			font-size: 25px;
		}
		.border-futura-left {
			@include border-futura-left(160px, 400px);
			left: 20%;
		}
		.border-futura-right {
			@include border-futura-right(100px, 300px);
			right: 20%;
		}
	}
	&__portfolio {
		margin-top: 250px;
	}
}
</style>