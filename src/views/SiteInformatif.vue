<template>
  <div class="siteInfo">
    <BasePageSpecialisee
      :title1="'Make a lasting impression with an elegant design!'"
      :title2="'Create a successful visual identity and boost your credibility. Avoid having a scary website!'"
      :title3="'Let\'s create your website.'"
      :paragraph1="'Here\'s an example of a design we have created:'"
    >
      <template v-slot:content>
        <div class="siteInfo__portfolio">
          <Portfolio :projects-list-from-props="projetsList" />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>We create fully customized websites to meet your needs.</p>
        <p>
          Your brand image is unique, we will make sure to find yours, and then
          create your web page according to it.
        </p>
        <p>
          We will work together to find the best approach to showcase your
          business on the web. We will make it stand out with strong visuals and
          distinctive originality.
        </p>
        <p>
          Do you want peace of mind? No worries: we will take care of your
          website's maintenance and updates. You don’t have to do anything!
        </p>
        <p>Do you want to know more? Contact me!</p>
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
      projetsList: {
        hdp: {
          title: "Hôtel de Paris Saint Tropez",
          subtitle: "Design and website integration.",
          urlImage: "hdp-portfolio-2.jpg",
          text: "This hotel wanted to refresh its old website. We created three new design proposals for them so they could choose the one that suited them best. Once the design was decided, we carefully integrated it.",
          images: [
            require("@/assets/img/projets/hdp-1.jpeg"),
            require("@/assets/img/projets/hdp-3.jpeg"),
            require("@/assets/img/projets/hdp-2.jpeg"),
            require("@/assets/img/projets/hdp-4.jpeg"),
          ],
          url: "https://hoteldeparis-sainttropez.com/",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.siteInfo {
  &__portfolio {
    margin-top: 70px;
  }
}
</style>
