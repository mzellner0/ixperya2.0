<template>
	<div class="apropos">
		<div class="apropos__apropos">
			<AProposComponent />
		</div>
		<div class="apropos__buttons">
			<Button :text="'Contactez-moi'" :composant-name="'Contact'" />
		</div>
		<div class="apropos__technos">
			<Technologies	/>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button.vue";
import AProposComponent from "@/components/AProposComponent.vue";
import Technologies from "@/components/Technologies.vue";

export default {
	name: "APropos",
	components: {
		Button,
    AProposComponent,
    Technologies
	}
}
</script>

<style lang="scss" scoped>
.apropos {
	width: 100%;
	&__apropos {
    margin-top: -20px;
		margin-bottom: 70px;
	}
	&__buttons {
		@include flex(row, center, center);
		width: 100%;
	}
	&__technos {
		margin-bottom: 100px;
	}
}
</style>