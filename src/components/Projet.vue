<template>
  <div class="projet">
    <img class="projet__photo" alt="image projet" :src="require(`@/assets/img/projets/${imageProjet}`)" />
    <h3 class="projet__title">{{ titleProjet }}</h3>
  </div>
</template>

<script>
export default {
  name: "Projet",
  props: {
    titleProjet: { type: String, default: null },
    imageProjet: { type: String, default: 'hdp-portfolio.jpg' }
  }
}
</script>

<style lang="scss" scoped>
  .projet {
    margin: 50px 50px;
    @include flex(column, center, center);
    &__title {
      font-family: $police-text-2;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 17px;
      color: white;
    }
    &__photo {
      max-width: 700px;
      max-height: 300px;
    }
  }
</style>