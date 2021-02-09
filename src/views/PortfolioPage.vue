<template>
  <div class="portfolio">
			<Portfolio />
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio.vue"

export default {
  name: "PortfolioPage",
  components: {
    Portfolio
  }
}
</script>

<style lang="scss" scoped>
  .portfolio {
    margin: 150px 0px;
    @include breakpoint(800) {
      margin: 80px 0px;
    }
  }
</style>