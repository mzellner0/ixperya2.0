<template>
  <div class="technos">
    <h1>Technologies used</h1>
    <h2>Front-end</h2>
    <div class="frontend">
      <img :src="require('@/assets/img/logos/three.png')" alt="logo three.js" />
      <img :src="require('@/assets/img/logos/react.png')" alt="logo react" />
      <img :src="require('@/assets/img/logos/vue.png')" alt="logo vue" />
      <img :src="require('@/assets/img/logos/ts.png')" alt="logo ts" />
      <img
        :src="require('@/assets/img/logos/trio.png')"
        alt="logo css-html-js"
      />
      <img :src="require('@/assets/img/logos/sass.png')" alt="logo sass" />
    </div>
    <h2>Mobile development</h2>
    <div class="mobile">
      <img :src="require('@/assets/img/logos/dart.png')" alt="logo dart" />
      <img
        :src="require('@/assets/img/logos/flutter.webp')"
        alt="logo flutter"
      />
    </div>
    <h2>Back-end</h2>
    <div class="backend">
      <img :src="require('@/assets/img/logos/node.png')" alt="logo node" />
      <img
        :src="require('@/assets/img/logos/expressjs.png')"
        alt="logo express"
      />
      <img
        :src="require('@/assets/img/logos/mysql.png')"
        alt="logo mysql"
        class="mysql"
      />
    </div>
    <h2>3D software</h2>
    <div class="trois-d">
      <img
        :src="require('@/assets/img/logos/logo_blender.png')"
        alt="logo blender"
      />
      <img
        :src="require('@/assets/img/logos/houdini_logo.png')"
        alt="logo houdini"
      />
      <img :src="require('@/assets/img/logos/maya_logo.png')" alt="logo maya" />
    </div>
    <h2>Editing / Post-production</h2>
    <div class="montage">
      <img
        :src="require('@/assets/img/logos/premiere_logo.png')"
        alt="logo premiere"
      />
      <img :src="require('@/assets/img/logos/ae_logo.jpg')" alt="logo ae" />
      <img
        :src="require('@/assets/img/logos/photoshop.svg')"
        alt="logo photoshop"
      />
      <img
        :src="require('@/assets/img/logos/illustrator_logo.jpg')"
        alt="logo illustrator"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Technologies",
};
</script>

<style lang="scss" scoped>
.technos {
  @include flex(column, center, center);
  color: white;
  padding: 0px 15px;
  background-color: $color-header-dark;
  .frontend,
  .backend,
  .trois-d,
  .montage,
  .mobile {
    @include flex(row, center, center);
    width: 80%;
    img {
      max-width: 150px;
      object-fit: contain;
      height: 100px;
      margin: 0px 20px;
      &:first-of-type {
        margin-left: 0;
      }
    }
    &:last-of-type {
      margin-bottom: 60px;
    }
    @include breakpoint(1000) {
      img {
        height: 70px;
        max-width: 130px;
      }
    }
    @include breakpoint(700) {
      flex-wrap: wrap;
      width: 90%;
      img {
        margin: 20px 20px !important;
      }
    }
  }
  h1 {
    font-size: 20px;
    margin: 20px 0px;
    margin-top: 60px;
    @include breakpoint(500) {
      font-size: 18px;
      width: 90%;
    }
  }
  h2 {
    width: 80%;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.623);
    margin: 40px 0px;
    font-size: 15px;
    @include breakpoint(700) {
      width: 90%;
    }
  }
  h1,
  h2 {
    font-family: $police-logo;
    text-transform: uppercase;
    font-weight: 800;
  }
}
</style>
