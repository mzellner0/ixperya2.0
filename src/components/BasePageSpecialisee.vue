<template>
  <div class="page-spec">
    <Title :title="title" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "BasePageSpecialisee",
  components: {
    Title
  },
  props: {
    title: { type: String, default: "" }
  }
}
</script>

<style lang="scss" scoped>
.page-spec {}
</style>