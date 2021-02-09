<template>
	<div class="apropos">
		<div class="apropos__apropos">
			<AProposComponent />
		</div>
		<div class="contact">
      <ContactComponent />
    </div>
		<div class="apropos__technos">
			<Technologies	/>
		</div>
	</div>
</template>

<script>
import AProposComponent from "@/components/AProposComponent.vue";
import Technologies from "@/components/Technologies.vue";
import ContactComponent from "@/components/ContactComponent.vue"

export default {
	name: "APropos",
	components: {
    AProposComponent,
    Technologies,
		ContactComponent
	}
}
</script>

<style lang="scss" scoped>
.contact {
  @include flex(row, center, center);
  @include breakpoint(1150) {
    margin-top: 100px;
  }
}

.apropos {
	width: 100%;
	&__apropos {
    margin-top: -20px;
	}
	&__technos {
		margin-bottom: 100px;
		margin-top: 50px;
	}
}
</style>