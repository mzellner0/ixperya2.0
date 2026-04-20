<template>
  <div class="siteInfo">
    <BasePageSpecialisee
      :title1="$t('web_info.title')"
      :title2="$t('web_info.text_6')"
      :title3="$t('web_info.text_7')"
      :paragraph1="$t('web_info.text_8')"
    >
      <template v-slot:content>
        <div class="siteInfo__portfolio">
          <Portfolio :projects-list-from-props="projetsList" />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>{{ $t("web_info.text_1") }}</p>
        <p>
          {{ $t("web_info.text_2") }}
        </p>
        <p>
         {{ $t("web_info.text_3") }}
        </p>
        <p>
          {{ $t("web_info.text_4") }}
        </p>
        <p>{{ $t("web_info.text_5") }}</p>
      </template>
    </BasePageSpecialisee>
  </div>
</template>

<script>
import BasePageSpecialisee from "@/components/BasePageSpecialisee.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "SiteInformatif",
  components: {
    BasePageSpecialisee,
    Portfolio,
  },
  data: () => {
    return {
      projetsList: {},
    };
  },
  created() {
    this.projetsList = {
        hdp: {
          title: this.$t("portfolio.project_1.title"),
          subtitle: this.$t("portfolio.project_1.subtitle"),
          urlImage: "hdp-portfolio-2.jpg",
          text: this.$t("portfolio.project_1.text"),
          images: [
            require("@/assets/img/projets/hdp-1.jpeg"),
            require("@/assets/img/projets/hdp-3.jpeg"),
            require("@/assets/img/projets/hdp-2.jpeg"),
            require("@/assets/img/projets/hdp-4.jpeg"),
          ],
          url: "https://hoteldeparis-sainttropez.com/",
        },
      }
  }
};
</script>

<style lang="scss" scoped>
.siteInfo {
  &__portfolio {
    margin-top: 70px;
  }
}
</style>
