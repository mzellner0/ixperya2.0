<template>
  <div class="technos">
    <h2>Technologies front-end que j'utilise :</h2>
    <div class="frontend">
      <img :src="require('@/assets/img/logos/vue.png')" alt="logo vue">
      <img :src="require('@/assets/img/logos/trio.png')" alt="logo css-html-js">
      <img :src="require('@/assets/img/logos/sass.png')" alt="logo sass">
      <img :src="require('@/assets/img/logos/three.png')" alt="logo three.js">
    </div>
    <h2>Technologies back-end que j'utilise :</h2>
    <div class="backend">
      <img :src="require('@/assets/img/logos/node.png')" alt="logo node">
      <img :src="require('@/assets/img/logos/expressjs.png')" alt="logo express">
      <img :src="require('@/assets/img/logos/mysql.png')" alt="logo mysql" class="mysql">
    </div>
    <h2>Technologies 3D que j'utilise :</h2>
    <div class="trois-d">
      <img :src="require('@/assets/img/logos/logo_blender.png')" alt="logo blender">
      <img :src="require('@/assets/img/logos/houdini_logo.png')" alt="logo houdini">
      <img :src="require('@/assets/img/logos/maya_logo.png')" alt="logo maya">
    </div>
    <h2>Technologies pour la retouche / le montage que j'utilise :</h2>
    <div class="montage">
      <img :src="require('@/assets/img/logos/premiere_logo.png')" alt="logo premiere">
      <img :src="require('@/assets/img/logos/ae_logo.jpg')" alt="logo ae">
      <img :src="require('@/assets/img/logos/photoshop.svg')" alt="logo photoshop">
      <img :src="require('@/assets/img/logos/illustrator_logo.jpg')" alt="logo illustrator">
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
  padding: 0px 15px;
  background-color: $color-header-dark;
  .frontend, .backend, .trois-d, .montage {
    @include flex(row, center, center);
    img {
      max-height: 100px;
      margin: 0px 20px;
    }
    .mysql {
      margin-bottom: 55px;
    }
    &:last-of-type {
      margin-bottom: 60px;
    }
    @include breakpoint(1000) {
      .mysql {
        margin-bottom: 30px;
      }
      img {
        max-height: 70px;
      }
      &:last-of-type {
        margin-bottom: 45px;
      }
    }
    @include breakpoint(700) {
      // flex-direction: column;
      flex-wrap: wrap;
      img {
        margin: 20px 20px;
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
    &:nth-child(3) {
      margin-bottom: 40px;
    }
    @include breakpoint(700) {
      margin-bottom: 30px;
    }
  }
}
</style>