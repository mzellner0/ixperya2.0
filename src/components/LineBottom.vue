<template>
    <div class="line" />
</template>

<script>
export default {
  name: "LineBottom"
}
</script>

<style lang="scss" scoped>
.line {
  margin-top: 10px;
  border-top: 1px solid $color-header-dark;
  width: 90%;
  margin-left: 0%;
  &::before {
    content: "";
    width: 200px;
    height: 2px;
    margin-left: 2%;
    margin-top: 10px;
    background-color: $color-header-dark;
    position: absolute;
  }
}
</style>