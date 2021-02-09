<template>
  <div class="contact">
    <ContactComponent />
  </div>
</template>

<script>
import ContactComponent from "@/components/ContactComponent.vue"

export default {
  name: "Contact",
  components: {
    ContactComponent
  }
}
</script>

<style lang="scss" scoped>
.contact {
  @include flex(row, center, center);
  @include breakpoint(1150) {
    margin-top: 50px;
  }
}
</style>