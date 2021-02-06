<template>
  <div class="title">
    <div class="border-futura-left anim-border-left" />
    <h1>{{ title }}</h1>
    <div class="border-futura-right anim-border-right" />
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: { type: String, default: "" }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 80px;
  h1 {
    width: 100%;
    padding-top: 100px;
    text-align: center;
    align-items: center;
    font-family: $police-logo;
    font-weight: 500;
    font-size: 25px;
    text-transform: uppercase;
    max-width: 800px;
    margin: auto;
    line-height: 35px;
    @include breakpoint(950) {
      font-size: 20px;
      max-width: 400px;
    }
    @include breakpoint(500) {
      font-size: 20px;
      max-width: 250px;
    }
  }
  .border-futura-left {
    @include border-futura-left(160px, 400px);
    left: 20%;
    @include breakpoint(1440) {
      @include border-futura-left(160px, 240px);
      left: 5%;
    }
  }
  .border-futura-right {
    @include border-futura-right(100px, 300px);
    right: 20%;
    @include breakpoint(1440) {
      @include border-futura-right(100px, 180px);
      right: 5%;
    }
  }
}
</style>