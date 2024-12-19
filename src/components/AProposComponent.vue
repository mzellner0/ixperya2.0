<template>
  <div class="a-propos">
    <img :src="require('@/assets/img/maud_square.jpg')" alt="maud zellner" />
    <LineTop />
    <div class="a-propos__texts">
      <h1>Maud Zellner</h1>
      <h2>Développeuse Web</h2>
      <p>
        Passionnée par le code et la 3D depuis 10 ans, je combine créativité et
        performance technique pour concevoir des expériences numériques fluides,
        immersives et innovantes.
      </p>
      <p>
        Je suis avant tout à votre écoute pour réaliser le projet qui
        corresponde le mieux à vos attentes.
      </p>
      <p>Appelez-moi et ensemble, nous créerons des projets incroyables.</p>
    </div>
    <LineBottom />
  </div>
</template>

<script>
import LineTop from "@/components/LineTop.vue";
import LineBottom from "@/components/LineBottom.vue";

export default {
  name: "AProposComponent",
  components: {
    LineTop,
    LineBottom,
  },
};
</script>

<style lang="scss" scoped>
.a-propos {
  width: 70%;
  margin: 20px auto;
  line-height: 25px;
  @include breakpoint(800) {
    width: 80%;
  }
  &__texts {
    margin-top: 20px;
    @include flex(column, flex-start, center);
    h1 {
      font-family: $police-logo;
      text-transform: uppercase;
      font-size: 25px;
      margin-bottom: 10px;
    }
    h2 {
      font-family: $police-logo;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: normal;
      margin-top: 0px;
    }
    p {
      font-family: $police-text;
      font-size: 16px;
    }
    ul {
      list-style: none;
      margin: 5px;
      font-family: $police-text;
      li {
        &::before {
          content: "\2022";
          color: $color-header-dark;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      }
    }
  }
  img {
    margin-top: 35px;
    max-height: 200px;
    border-radius: 250px;
    border: 3px solid $color-header-dark;
    margin-left: 2%;
  }
}
</style>
