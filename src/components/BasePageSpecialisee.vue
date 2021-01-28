<template>
  <div class="page-spec">
    <Title :title="title1" />
    <div class="page-spec__paragraph1">
      <h2>{{ title2 }}</h2>
      <p>{{ paragraph1 }}</p>
    </div>
    <slot name="content"></slot>
    <div class="page-spec__paragraph2">
      <LineTop />
      <h2>{{ title3 }}</h2>
      <slot name="paragraph2"></slot>
    </div>
    <div class="page-spec__buttons">
      <Button :text="'A propos'" :composant-name="'Developpeur'" />
      <Button :text="'Contact'" :composant-name="'Contact'" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import LineTop from "@/components/LineTop.vue";
import Button from "@/components/Button.vue";

export default {
  name: "BasePageSpecialisee",
  components: {
    Title,
    LineTop,
    Button
  },
  props: {
    title1: { type: String, default: "" },
    title2: { type: String, default: "" },
    title3: { type: String, default: "" },
    paragraph1: { type: String, default: "" }
  }
}
</script>

<style lang="scss" scoped>
.page-spec {
  &__paragraph1 {
    font-family: $police-logo;
    text-transform: uppercase;
    text-align: center;
    margin: auto;
    margin-top: 200px;
    max-width: 800px;
    line-height: 25px;
  }
  &__paragraph2 {
    width: 70%;
    margin: 100px auto;
    font-family: $police-text;
    font-size: 16px;
  }
  h2 {
    font-family: $police-logo;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
  }
  &__buttons {
    @include flex(column, center, center);
    margin-bottom: 100px;
  }
}
</style>