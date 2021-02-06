<template>
  <div class="carroussel-image-container">
    <font-awesome-icon 
      class="cross" 
      :icon="['fas', 'times']"
      @click="closeCarroussel"
    />
    <div class="carroussel">
      <div class="images">
        <font-awesome-icon 
          :class="['arrow', { 'hidden': imageActive === 0 }]" 
          :icon="['fas', 'arrow-circle-left']"
          @click="imageBefore"
        />
        <img 
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          :alt="`image-projet${index}`"
          :class="[{ 'image-active': index === imageActive }, 'image']"
        >
        <font-awesome-icon 
          :class="['arrow', 'arrow-right', { 'hidden': imageActive === (images.length - 1) }]" 
          :icon="['fas', 'arrow-circle-left']"
          @click="imageAfter"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarrousselImage",
  props: {
    images: { type: Array, default: () => [] },
    imageStart: { type: Number, default: 0 }
  },
  data() {
    return {
      imageActive: 0
    }
  },
  created() {
    this.imageActive = this.imageStart;
    document.body.style.overflowY = "hidden";
  },
  beforeUnmount() {
    document.body.style.overflowY = "auto";
  },
  methods: {
    imageBefore() {
      if (this.imageActive > 0) {
        this.imageActive --;
      }
    },
    imageAfter() {
      if (this.imageActive < (this.images.length - 1)) {
        this.imageActive ++;
      }
    },
    closeCarroussel() {
      this.$emit('close-pop-up', true);
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.carroussel-image-container {
  position: fixed;
  background-color: #000000e3;
  width: 100%;
  height: 100vh;
  top: 0px;
  z-index: 11;
}
.carroussel {
  bottom: 3vh;
  width: 100%;
  position: absolute;
  height: 100vh;
}
.images {
  @include flex(row, center, center);
}
.image {
  display: none;
  bottom: 10vh;
  position: absolute;
  user-select: none;
  max-height: 80vh;
  max-width: 70%;
  &-active {
    display: block;
  }
  @include breakpoint(600) {
    max-width: 90%;
  }
}
.arrow {
  bottom: 0;
  position: absolute;
  left: 40%;
  color: white;
  font-size: 50px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    animation: leftRightArrow 500ms ease-in-out infinite;
  }
  &-right {
    transform: rotateZ(180deg);
    left: auto;
    right: 40%;
    &:hover {
      animation: rightLeftArrow 500ms ease-in-out infinite;
    }
  }
  @include breakpoint(650) {
    font-size: 35px;
  }
  @include breakpoint(450) {
    font-size: 25px;
  }
}
.cross {
  position: absolute;
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