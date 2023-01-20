<template>
  <div>
    <ProjetPopUp
      :class="{ 'hide': !showPopUpProjet }"
      :title-projet="titleProjet"
      :subtitle="subtitle"
      :text="text"
      :url="url"
      :is-mobile="isMobile"
      :images="images"
      @close-projet="closeProjet"
    />
    <div class="portfolio">
      <div class="portfolio__title">
        <h1 class="portfolio__title--light">Portfolio</h1>
        <h1 class="portfolio__title--dark">Portfolio</h1>
      </div>
      <div class="portfolio__projets">
        <ProjetPortfolio
          v-for="(projet, index) in projetsList"
          :key="index"
          :title-projet="projet.title"
          :image-projet="projet.urlImage"
          @open-projet="openProjet(projet.title, projet.subtitle, projet.text, projet.images, projet.url, projet.isMobile)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjetPortfolio from "@/components/ProjetPortfolio.vue"
import ProjetPopUp from "@/components/ProjetPopUp.vue"

export default {
  name: "Portfolio",
  components: {
    ProjetPortfolio,
    ProjetPopUp
  },
  props: {
    projetsList: { type: Array, default: () => [
        { 
          title: 'Hôtel de Paris Saint Tropez',
          subtitle: "Réalisation du design et de l'intégration du site.", 
          urlImage: 'hdp-portfolio-2.jpg',
          text: "Cet hôtel cherchait à rafraîchir son ancien site internet. Je leurs ai donc réalisés 3 nouvelles propostions graphiques pour qu'il puisse choisir celle qui leurs correspondait le mieux. Une fois le design décidé, je l'ai integré avec soin.",
          images: [
            require('@/assets/img/projets/hdp-1.jpeg'),
            require('@/assets/img/projets/hdp-3.jpeg'),
            require('@/assets/img/projets/hdp-2.jpeg'),
            require('@/assets/img/projets/hdp-4.jpeg'),
          ],
          url: "https://hoteldeparis-sainttropez.com/",
          isMobile: false
        },
        {
          title: 'Tutuyoutoo',
          subtitle: 'Création d\'une application mobile.',
          urlImage: "phone-group.webp",
          text: "Réalisation de A à Z (des maquettes à la mise en ligne sur le play store et l'app store en passant par le développement), d'une application permettant à ses utilisateurs d'organiser leurs vacances ultra facilement en améliorant la communication dans les groupes de voyages.",
          images: [
            require('@/assets/img/projets/phone-group.webp'),
            require('@/assets/img/projets/phone-calendar.webp'),
            require('@/assets/img/projets/phone-balance.webp')
          ],
          url: "https://tutuyoutoo.com/fr",
          isMobile: true
        },
        { 
          title: "Création d'avatar",
          subtitle: "Réalisation d'un module de personnalisation d'avatar pour le site de Sandbox.game.",
          urlImage: 'avatar-portfolio.jpg',
          text: "Sandbox.game souhaitait intégrer, à leur site internet, un module permettant à chaque utilisateur de personnaliser son propre avatar 3D. Je me suis donc occupée, en tant que développeuse front-end, d'intégrer leur maquette déjà réalisée au préalable et de coder cette fonctionnalité en javascript (à l'aide de vue.js et de three.js) pour que cette idée puisse prendre vie.",
          images: [
            require('@/assets/img/projets/avatar-portfolio.jpg'),
            require('@/assets/img/projets/avatar-phone.png')
          ],
          url: "https://www.sandbox.game/en/me/avatar/",
          isMobile: false
        },
        { 
          title: "Création d'un jeu 3D", 
          subtitle: "Réalisation d'un jeu 3D.",
          urlImage: 'jeu.png',
          text: "Poussée par l'envie d'en connaître plus sur Three.js, j'ai créé un jeu en 3D sur internet.",
          images: [
            require('@/assets/img/projets/jeu.png'),
            require('@/assets/img/projets/jeu-2.png'),
          ],
          url: "https://maudzellner.fr/jeu",
          isMobile: false
        },
      ]}
  },
  data() {
    return {
      titleProjet: "Hôtel de Paris Saint Tropez",
      subtitle: "Réalisation du design et de l'intégration du site.",
      text: "Cet hôtel cherchait à rafraîchir son ancien site internet. Je leurs ai donc réalisés 3 nouvelles propostions graphiques pour qu'il puisse choisir celle qui leurs correspondait le mieux. Une fois le design décidé, je l'ai integré avec soin.",
      images: [
            require('@/assets/img/projets/hdp-1.jpeg'),
            require('@/assets/img/projets/hdp-3.jpeg'),
            require('@/assets/img/projets/hdp-2.jpeg'),
            require('@/assets/img/projets/hdp-4.jpeg'),
          ],
      url: "https://hoteldeparis-sainttropez.com/",
      showPopUpProjet: false,
      isMobile: false
    }
  },
  methods: {
    openProjet(title, subtitle, text, images, url, isMobile) {
      this.titleProjet = title;
      this.subtitle = subtitle;
      this.text = text;
      this.images = images;
      this.url = url;
      this.isMobile = isMobile;
      this.showPopUpProjet = true;
      document.body.style.overflowY = "hidden";
    },
    closeProjet() {
      this.showPopUpProjet = false;
      document.body.style.overflowY = "auto";
    }
  }
}
</script>

<style lang="scss" scoped>
.hide { 
  display: none;
}
.portfolio {
  background-color: $color-header-dark;
  margin-top: 0px;
  width: 100%;
  @include flex(column, flex-start, center);
  &__title {
    margin-left: 10%;
    @include breakpoint(500) {
      margin-left: 12%;
    }
    h1 {
      font-family: $police-logo;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 40px;
      margin-top: -14px;
      @include breakpoint(500) {
        font-size: 30px;
        margin-top: -13px;
      }
    }
    &--light {
      color: white;
    }
    &--dark {
      position: absolute;
      color: $color-header-dark;
      margin-top: -70px !important;
      clip-path: inset(0 0 25px 0);
      @include breakpoint(500) {
        margin-top: -52px !important;
        clip-path: inset(0 0 17px 0);
      }
    }
  }
  &__projets {
    width: 100%;
    @include flex(row, center, center);
    @include breakpoint(1850) {
      @include flex(row, center, space-around);
      flex-flow: row wrap;
    }
    @include breakpoint(1280) {
      @include flex(column, center, center);
    }
  }
}
</style>