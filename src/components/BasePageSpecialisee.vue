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
    <div class="contact">
      <ContactComponent />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import LineTop from "@/components/LineTop.vue";
import ContactComponent from "@/components/ContactComponent.vue"

export default {
  name: "BasePageSpecialisee",
  components: {
    Title,
    LineTop,
    ContactComponent
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
.contact {
  margin-bottom: 30px;
  @include flex(row, center, center);
  @include breakpoint(1150) {
    margin-top: 70px;
  }
}

.page-spec {
  &__paragraph1 {
    font-family: $police-logo;
    text-transform: uppercase;
    text-align: center;
    margin: auto;
    margin-top: 200px;
    max-width: 800px;
    line-height: 30px;
    @include breakpoint(900) {
      width: 80%;
      margin: 0px 10%;
      margin-top: 200px;
    }
    @include breakpoint(500) {
      text-align: left;
      margin-top: 180px;
    }
  }
  &__paragraph2 {
    width: 70%;
    margin: 100px auto;
    font-family: $police-text;
    font-size: 16px;
    margin-bottom: 0px;
    @include breakpoint(500) {
      width: 80%;
      margin: 60px auto;
      margin-bottom: 0px;
    }
  }
  h2 {
    font-family: $police-logo;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
  }
}
</style>