<template>
  <div class="projet">
    <div class="projet__texts">
      <h2>{{ $route.query.title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p>{{ text }}</p>
      <a :href="url" target="_blank">Découvrez le site</a>
      <font-awesome-icon 
        class="projet__arrow" 
        :icon="['fas', 'arrow-circle-left']"
        @click="back"
      />
    </div>
    <div class="projet__images">
      <img 
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        :alt="`image-projet${index}`"
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Projet",
  data: function() {
    return {
      subtitle: "",
      text: "",
      images: [],
      url: ""
    }
  },
  mounted() {
    switch (this.$route.query.title) {
      case "Hôtel de Paris Saint Tropez": 
        this.subtitle = "Réalisation du design et de l'intégration du site.";
        this.text = "Cet hôtel cherchait à rafraîchir son ancien site internet. Nous leurs avons donc réalisés 3 nouvelles propostions graphiques pour qu'il puisse choisir celle qui leurs correspondait le mieux. Une fois le design décidé, nous l'avons integré avec soin.";
        this.images = [
          require('@/assets/img/projets/hdp-1.jpeg'),
          require('@/assets/img/projets/hdp-3.jpeg'),
          require('@/assets/img/projets/hdp-2.jpeg'),
          require('@/assets/img/projets/hdp-4.jpeg'),
        ]
        this.url = "https://hoteldeparis-sainttropez.com/"
        break;
      case "Création d'avatar":
        this.subtitle = "Réalisation d'un module de personnalisation d'avatar pour le site de Sandbox.game.";
        this.text = "Sandbox.game souhaitait intégrer, à leur site internet, un module permettant à chaque utilisateur de personnaliser son propre avatar 3D. Je me suis donc occupée, en tant que développeuse front-end, d'intégrer leur maquette déjà réalisée au préalable et de coder cette fonctionnalité en javascript (à l'aide de vue.js et de three.js) pour que cette idée puisse prendre vie.";
        this.images = [
          require('@/assets/img/projets/avatar-portfolio.jpg'),
          require('@/assets/img/projets/avatar-phone.png')
        ]
        this.url = "https://www.sandbox.game/en/me/avatar/"
        break;
      case "Création d'un jeu 3D":
        this.subtitle = "Réalisation d'un jeu 3D.";
        this.text = "Poussée par l'envie d'en connaître plus sur Three.js, j'ai créé un jeu en 3D sur internet.";
        this.images = [
          require('@/assets/img/projets/jeu.png'),
          require('@/assets/img/projets/jeu-2.png'),
        ]
        this.url = "https://www.ixperya.com/jeu"
        break;
    }
  },
  computed: {
    ...mapState(['linkBackPortfolio'])
  },
  methods: {
    back() {
      this.$router.push({ name: this.linkBackPortfolio });
    }
  }
}
</script>

<style lang="scss" scoped>
.projet {
  width: 100%;
  margin: auto;
  margin-top: 100px;
  @include flex(column, flex-start, center);
  @include breakpoint(500) {
    margin-top: 50px;
  }
  &__images {
    margin: 60px 0px;
    margin-bottom: 80px;
    width: 100%;
    @include flex(row, center, center);
    img {
      max-width: 800px;
      max-height: 500px;
      border-radius: 5px;
      margin: 0px 10px;
    }
    @include breakpoint(1630) {
      @include flex(column, center, center);
      margin: 20px 0px;
      img {
        width: 80%;
        max-height: none;
        margin: 10px 0px;
      }
    }
  }
  &__arrow {
    color: white;
    margin-top: 30px;
    font-size: 30px;
    cursor: pointer;
    transition: 200ms;
    &:hover {
      animation: leftRightArrow 500ms ease-in-out infinite;
    }
    @include breakpoint(500) {
      padding: 0px 20px;
    }
  }
  &__texts {
    color: white;
    background-color: $color-header-dark;
    width: 80%;
    padding: 40px;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 90px;
    @include flex(column, flex-start, center);
    @include breakpoint(500) {
      width: 100%;
      padding-left: 0px;
      padding-right: 0px;
    }
    h2 {
      font-family: $police-logo;
      text-transform: uppercase;
    }
    h3 {
      font-family: $police-logo;
      text-transform: uppercase;
      font-weight: normal;
      margin-bottom: 25px;
      margin-top: 0px;
    }
    p {
      font-family: $police-text;
      max-width: 50%;
      line-height: 20px;
    }
    a {
      color: $color-header-middleLight;
      font-family: $police-text;
      text-decoration: none;
      cursor: pointer;
      transition: 200ms;
      &:hover {
        color: white;
      }
    }
    @include breakpoint(500) {
      h2 {
        font-size: 18px;
        padding: 0px 20px;
        line-height: 20px;
      }
      h3 {
        font-size: 16px;
        padding: 0px 20px;
        line-height: 25px;
      }
      p {
        font-size: 16px;
        padding: 0px 20px;
        max-width: 70%;
        line-height: 20px;
      }
      a {
        font-size: 16px;
        padding: 0px 20px;
      }
    }
  }
}
</style>