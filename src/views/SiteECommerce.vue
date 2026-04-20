<template>
  <div class="siteECommerce">
    <BasePageSpecialisee
      :title1="$t('ecommerce.title')"
      :title2="$t('ecommerce.text_4')"
      :title3="$t('ecommerce.text_5')"
      :paragraph1="$t('ecommerce.text_6')"
    >
      <template v-slot:content>
        <OutilPersonnalisation />
      </template>
      <template v-slot:paragraph2>
        <p>
          {{ $t("ecommerce.text_1") }} 
        </p>
        <p>
          {{ $t("ecommerce.text_2") }} 
        </p>
        <p>{{ $t("ecommerce.text_3") }}</p>
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
