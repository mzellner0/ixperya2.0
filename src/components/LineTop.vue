<template>
    <div class="line" />
</template>

<script>
export default {
  name: "LineTop"
}
</script>

<style lang="scss" scoped>
.line {
  margin-top: 30px;
  border-bottom: 1px solid $color-header-dark;
  width: 90%;
  margin-left: 0%;
  height: 10px;
  &::before {
    content: "";
    width: 200px;
    height: 2px;
    margin-left: 2%;
    background-color: $color-header-dark;
    position: absolute;
  }
}
</style>