<template>
	<div class="qui-suis-je">
		<div class="qui-suis-je__apropos">
			<AProposComponent />
		</div>
    <Technologies />
		<div class="qui-suis-je__buttons">
			<Button :text="'Contactez-moi'" :composant-name="'Contact'" />
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button.vue";
import AProposComponent from "@/components/AProposComponent.vue";
import Technologies from "@/components/Technologies.vue";

export default {
	name: "Developpeur",
	components: {
		Button,
    AProposComponent,
    Technologies
	}
}
</script>

<style lang="scss" scoped>
.qui-suis-je {
	width: 100%;
	&__apropos {
    margin-top: -20px;
		margin-bottom: 100px;
	}
	&__buttons {
		@include flex(row, center, center);
		width: 100%;
		margin-bottom: 80px;
	}
}
</style>