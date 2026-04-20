<template>
  <div class="projet">
    <div class="projet__texts">
      <h2>{{ titleProjet }}</h2>
      <h3>{{ subtitle }}</h3>
      <p>{{ text }}</p>
      <a v-if="url" target="_blank" :href="url">{{ $t("portfolio.discover") }}</a>
    </div>
    <div :class="['projet__images', { 'is-mobile': isMobile }]">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        :alt="`image-projet${index}`"
      />
    </div>
    <CarrousselImage
      v-if="showCarroussel"
      :images="images"
      :imageStart="imageStart"
      @close-pop-up="closeCarroussel"
    />
  </div>
</template>

<!-- click on image -->
<!-- @click="onClickOnImage(event, index)" -->

<script>
import CarrousselImage from "@/components/CarrousselImage.vue";

export default {
  name: "ProjetPage",
  components: {
    CarrousselImage,
  },
  props: {
    titleProjet: { type: String, default: "" },
    text: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    url: { type: String, default: "" },
    images: { type: Array, default: () => [] },
    isMobile: { type: Boolean, default: false },
  },
  data: function () {
    return {
      showCarroussel: false,
      imageStart: 0,
    };
  },
  methods: {
    onClickOnImage(event, index) {
      this.imageStart = index;
      this.showCarroussel = true;
    },
    closeCarroussel() {
      this.showCarroussel = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.projet {
  position: relative;
  background-color: $color-header-darker;
  width: 90%;
  margin: 30px auto;
  margin-bottom: 50px;
  top: 0px;
  @include flex(column, flex-start, center);
  &::before {
    content: "";
    background-color: white;
    width: 30%;
    height: 2px;
    position: absolute;
    top: 15px;
    left: 15px;
    @include breakpoint(500) {
      display: none;
    }
  }
  &::after {
    content: "";
    background-color: white;
    height: 150px;
    width: 2px;
    position: absolute;
    top: 15px;
    left: 15px;
    @include breakpoint(500) {
      display: none;
    }
  }
  @include breakpoint(500) {
    width: 85%;
    margin-top: 50px;
  }
  &__images {
    user-select: none;
    margin: 60px 0px;
    width: 100%;
    @include flex(row, center, center);
    flex-wrap: wrap;
    img {
      max-width: 1000px;
      max-height: 1000px;
      border-radius: 5px;
      margin: 10px 10px;
      transition: 200ms;
      // cursor: pointer;
      // &:hover {
      //   filter: brightness(1.2);
      // }
    }
    &.is-mobile {
      img {
        max-height: 550px;
        object-fit: contain;
      }
    }
    @include breakpoint(1630) {
      @include flex(column, center, center);
      margin: 20px 0px;
      img {
        max-width: 700px;
        max-height: 700px;
        width: 80%;
        max-height: none;
      }
      &.is-mobile {
        @include flex(row, center, center);
        flex-wrap: nowrap;
        img {
          max-height: 500px;
          width: auto;
        }
      }
    }
    @include breakpoint(1000) {
      &.is-mobile {
        @include flex(column, center, center);
        img {
          max-height: 500px;
        }
      }
    }
    @include breakpoint(500) {
      &.is-mobile {
        @include flex(column, center, center);
        img {
          max-height: 450px;
        }
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
      max-width: 70%;
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
        max-width: 70%;
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

.cross {
  position: fixed;
  right: 40px;
  top: 20px;
  font-size: 50px;
  color: white;
  cursor: pointer;
  transition: 200ms;
  z-index: 10;
  &:hover {
    transform: rotate(90deg) scale(1.2);
  }
  @include breakpoint(600) {
    font-size: 30px;
    right: 20px;
    top: 10px;
  }
}
</style>
