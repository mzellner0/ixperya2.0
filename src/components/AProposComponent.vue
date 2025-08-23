<template>
  <div class="a-propos">
    <img :src="require('@/assets/img/maud_square.jpg')" alt="maud zellner" />
    <LineTop />
    <div class="a-propos__texts">
      <h1>Maud Zellner</h1>
      <h2>Web Developer</h2>
      <p>
        Passionate about coding and 3D for 10 years, I combine creativity and
        technical performance to design smooth, immersive, and innovative
        digital experiences.
      </p>
      <p>
        Above all, I am here to listen to you and bring to life the project that
        best meets your expectations.
      </p>
      <p>Call me, and together we will create amazing projects.</p>
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
