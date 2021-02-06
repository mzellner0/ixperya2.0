<template>
  <div class="menu-colors">
    <p>{{ title }}</p>
    <div class="menu-colors__colors">
        <div
          v-for="color in colors"
          :key="color.id"
          :style="{ backgroundColor: color.color }"
          :class="['menu-colors__color', { 'menu-colors__color--active': colorActive === color.id }]"
          @click="onClickColor(color.id, color.color3D)"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuColorsCutsom",
  props: {
    title: { type: String, default: "" },
    colors: { type: Array, default: () => [] }
  },
  data: function () {
    return {
      colorActive: 2
    }
  },
  methods: {
    onClickColor(id, color3D) {
      this.colorActive = id;
      this.$emit('changeColor', { menuToChange: this.title, color: color3D });
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-colors {
  margin: 10px 0px;
  @include flex(row, center, space-between);
  @include breakpoint(600) {
    flex-direction: column;
  }
  &__colors {
    @include flex(row, center, center);
  }
  p {
    font-family: $police-text;
  }
  &__color{
    width: 20px;
    height: 20px;
    margin: 0px 5px;
    border-radius: 20px;
    border: solid 2px $color-body-middle;
    z-index: 5;
    cursor: pointer;
    transition: 200ms;
    &:hover{
        transform: scale(1.15);
    }
    &--active {
      transform: scale(1.15);
      border-color: $color-header-middle;
    }
  }
}
</style>