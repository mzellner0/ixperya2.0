<template>
  <div class="developpeur">
    <Title :title="$t('about.title')" />
    <div class="developpeur__apropos">
      <AProposDevComponent />
    </div>
    <div class="developpeur__portfolio">
      <Portfolio />
    </div>
    <div class="developpeur__technos">
      <Technologies />
    </div>
    <div class="contact">
      <ContactComponent />
    </div>
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio.vue";
import AProposDevComponent from "@/components/AProposDevComponent.vue";
import Title from "@/components/Title.vue";
import Technologies from "@/components/Technologies.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "Developpeur",
  components: {
    Portfolio,
    Title,
    AProposDevComponent,
    Technologies,
    ContactComponent,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-bottom: 30px;
  @include flex(row, center, center);
  @include breakpoint(1150) {
    margin-top: 70px;
  }
}

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
  }
}
</style>
