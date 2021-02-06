<template>
  <div class="technos">
    <h2>Technologies front-end que j'utilise :</h2>
    <div class="frontend">
      <img :src="require('@/assets/img/logos/vue.png')" alt="logo vue">
      <img :src="require('@/assets/img/logos/trio.png')" alt="logo css-html-js">
      <img :src="require('@/assets/img/logos/sass.png')" alt="logo sass">
      <img :src="require('@/assets/img/logos/three.png')" alt="logo three.js">
    </div>
    <h2>Connaissances back-end :</h2>
    <div class="backend">
      <img :src="require('@/assets/img/logos/node.png')" alt="logo node">
      <img :src="require('@/assets/img/logos/expressjs.png')" alt="logo express">
      <img :src="require('@/assets/img/logos/mysql.png')" alt="logo mysql" class="mysql">
    </div>
  </div>
</template>

<script>
export default {
  name: "Technologies"
}
</script>

<style lang="scss" scoped>
.technos {
  @include flex(column, center, center);
  color: white;
  background-color: $color-header-dark;
  .frontend, .backend {
    @include flex(row, center, center);
    img {
      max-height: 100px;
      margin: 0px 20px;
    }
    .mysql {
      margin-bottom: 55px;
    }
    &:last-of-type {
      margin-bottom: 40px;
    }
    @include breakpoint(1000) {
      .mysql {
        margin-bottom: 30px;
      }
      img {
        max-height: 70px;
      }
      &:last-of-type {
        margin-bottom: 30px;
      }
    }
    @include breakpoint(700) {
      flex-direction: column;
      img {
        margin: 20px 0px;
      }
    }
  }
  h2 {
    margin: 0px 20px;
    margin-top: 70px;
    margin-bottom: 50px;
    font-family: $police-logo;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    &:last-of-type {
      margin-bottom: 5px;
    }
    @include breakpoint(700) {
      margin-bottom: 30px;
    }
  }
}
</style>