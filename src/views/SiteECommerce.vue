<template>
  <div class="siteECommerce">
    <BasePageSpecialisee
      :title1="'Increase your sales by allowing your users to customize your products interactively!'"
      :title2="'Turn your website into a game!'"
      :title3="'Let\'s boost your sales.'"
      :paragraph1="'With tools that allow 3D game-like product customization, engage your visitors in creating their own orders, and thus, sell more.'"
    >
      <template v-slot:content>
        <OutilPersonnalisation />
      </template>
      <template v-slot:paragraph2>
        <p>
          Engage your visitors in creating their future purchases. Once they’ve
          spent tons of minutes (or even hours) designing their perfect product,
          it will be unthinkable for them not to buy it!
        </p>
        <p>
          We will work together to find the best approach to showcase your
          products.
        </p>
        <p>Every project is unique! Contact me and we will discuss it!</p>
      </template>
    </BasePageSpecialisee>
  </div>
</template>

<script>
import BasePageSpecialisee from "@/components/BasePageSpecialisee.vue";
import OutilPersonnalisation from "@/components/OutilPersonnalisation.vue";
import { mapActions } from "vuex";

export default {
  name: "SiteECommerce",
  components: {
    BasePageSpecialisee,
    OutilPersonnalisation,
  },
  created() {
    this.showLoader();
  },
  methods: {
    ...mapActions(["showLoader"]),
  },
};
</script>
